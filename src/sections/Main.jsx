import './Main.scss'
function Main() {

  return (
    <>
        <div className={'main-container'}>
            <h1 className={'headline1 main-title'}>Data in Your Grasp</h1>
            <p className={'body1 main-paragraph'}>
                A simple website presenting some of the statistics, regrading covid in multiple countries and around the world.
                Made possible thanks to the Covid API, provided by <a href={'https://covid19api.com/'}>covid19api.com</a>.
                Here is the full, open source, code on my github: <a href={'https://github.com/porfinogeneta/covidstats'}>github/porfinogeneta</a>.
            </p>
        </div>
    </>
  )
}

export default Main