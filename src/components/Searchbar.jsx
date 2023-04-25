import './Searchbar.scss'
import Button from "./Button.jsx";
import useGlobalState from "../hooks/useGlobalState.js";
import {useState} from "react";

function Searchbar() {

    const [globalState, setGlobalState] = useGlobalState()
    const [searchInput, setSearchInput] = useState("");

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
      };

  const handleSubmit = (event) => {
      event.preventDefault();
      setGlobalState({
          ...globalState,
          searchQuery: searchInput
      })
      setSearchInput("")
    }

  return (
    <form onSubmit={handleSubmit} className={'searchbar-container'}>
        <input className={`input-search body1`} value={searchInput} placeholder={"Search..."} onChange={handleInputChange}/>
        <Button bg={'#833998'} type={"submit"} onClick={handleSubmit} text={"Search"} height={'3rem'}/>
    </form>
  )
}


export default Searchbar