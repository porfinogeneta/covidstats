import { useState } from 'react';
import './TableHeaders.scss'
import Button from "./Button.jsx";
import useGlobalState from "../hooks/useGlobalState.js";
function TableHeaders() {

  const headersList = [
      {
          name: "Country", // displayed name
          APIName: "Country",
          selected: false
      },
      {
          name: "Deaths",
          APIName: "TotalDeaths",
          selected: false
      },
      {
          name: "New Confirmed",
          APIName: "NewConfirmed",
          selected: false
      },
      {
          name: "Confirmed",
          APIName: "TotalConfirmed",
          selected: true
      },
      {
          name: "Recovered",
          APIName: "TotalRecovered",
          selected: false
      }

  ]

  const [globalState, setGlobalState] = useGlobalState()
  const [headers, setHeaders] = useState(headersList);

    const handleClick = (index) => {
        // copying the list to create a fresh copy of properties
        const updatedHeaders = headers.map((header, i) => {
          if (i === index) {
            return { ...header, selected: true };
          } else {
            return { ...header, selected: false };
          }
        });

        setGlobalState({
          ...globalState,
          sortBy: headers[index].APIName
      })

        setHeaders(updatedHeaders);
      };

    return (
    <div className={'headers-container'}>
        {headers.map((header, index) => (
        <Button key={index}
                text={header.name}
                bg={'#222A3F'}
                border={header.selected ? 'outlined' : ''}
                disabled={header.selected}
                onClick={() => handleClick(index)}/>
      ))}
    </div>
  )
}

export default TableHeaders