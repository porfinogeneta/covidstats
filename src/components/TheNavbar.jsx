import './TheNavbar.scss'
import Searchbar from "./Searchbar.jsx";
import Button from "./Button.jsx";
function TheNavbar() {

    const handleClick = () => {
        window.open("https://documenter.getpostman.com/view/10808728/SzS8rjbc#00030720-fae3-4c72-8aea-ad01ba17adf8", '_blank')
    }

  return (
    <>
        <nav className={'nav-container'}>
            <h1 className={'headline3 nav-title'}>Covidstats</h1>
            <div className={'nav-search'}>
                <Searchbar/>
                <Button onClick={handleClick} bg={'#133050'} text={"API"} height={'3rem'} border={'outlined'}/>
            </div>
        </nav>
    </>
  )
}

export default TheNavbar