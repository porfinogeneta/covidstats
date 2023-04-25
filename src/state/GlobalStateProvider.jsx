import { useState } from 'react';
import GlobalStateContext from './GlobalStateContext.jsx';
import PropTypes from 'prop-types';
import Button from "../components/Button.jsx";

function GlobalStateProvider({children}) {
  const [globalState, setGlobalState] = useState({
    searchQuery:  "",
    order: true, //true means ascending false descending
    sortBy: "TotalConfirmed" // what is the key in sorting
  });

  return (
    <GlobalStateContext.Provider value={[globalState, setGlobalState]}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export default GlobalStateProvider;

Button.propTypes = {
    children: PropTypes.any
}