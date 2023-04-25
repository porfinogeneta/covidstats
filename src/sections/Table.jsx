import {useEffect, useState} from "react";
import TableHeaders from "../components/TableHeaders.jsx";
import useGlobalState from "../hooks/useGlobalState.js";
import useFetchData from "../hooks/useFetchData.js";
import './Table.scss'
function Table() {


    const apiUrl = import.meta.env.VITE_API_LINK;
    const { data, loading, error } = useFetchData(apiUrl);


    const countries = data.Countries
    // console.log(data.Countries)
    // console.log(global.NewConfirmed)
    const [globalState, setGlobalState] = useGlobalState()
    const [query, setQuery] = useState(globalState.searchQuery);
    const [result, setResult] = useState([]);

  useEffect(() => {
      setQuery(globalState.searchQuery)
      if (query === ""){
          setResult([data.Global]);
      } else {
          // filtering by country name
          let filteredResults = countries.filter(item => {
              return item.Country.toLowerCase().includes(query.toLowerCase());
          });
          //order handling and sorting according to the sort imposed by user
          if (globalState.order){
              filteredResults = filteredResults.sort((x, y) => (Number(x[globalState.sortBy])) - (Number(y[globalState.sortBy])))
          }else {
              filteredResults = filteredResults.sort((x, y) => (Number(y[globalState.sortBy])) -  (Number(x[globalState.sortBy])))
          }
          setResult(filteredResults);
      }
  }, [query, data, countries, globalState]);
    console.log(result)
    // console.log(data.Countries)


    const recordFields = ["Country", "TotalDeaths", "NewConfirmed", "TotalConfirmed", "TotalRecovered"]

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <TableHeaders/>
              </tr>
            </thead>
            <tbody>
              {result.map((record, index) => (
                <tr className="table-row" key={index}>
                  {record !== undefined ? recordFields.map((field, index) => (
                    query === "" && index === 0 ?
                      <td className="table-cell body1" key={index}>Global</td>
                      :
                      <td className="table-cell body1" key={index}>{record[field]}</td>
                  )) : <td>Loading</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

  )
}


export default Table