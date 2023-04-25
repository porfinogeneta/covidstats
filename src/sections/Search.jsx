import './Search.scss'
import Searchbar from "../components/Searchbar.jsx";
import TheSwitcher from "../components/TheSwitcher.jsx";
function Search() {

  return (
    <>
        <div className={'search-container'}>
            <Searchbar/>
            <TheSwitcher switch2={"Ascending"} switch1={"Descending"}/>
        </div>
    </>
  )
}

export default Search