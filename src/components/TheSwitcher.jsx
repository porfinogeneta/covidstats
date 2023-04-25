import '../assets/variables.scss'
import PropTypes from 'prop-types';
import Button from "./Button.jsx";
import {useState} from "react";
import useGlobalState from "../hooks/useGlobalState.js";
function TheSwitcher({switch1, switch2}) {

    const [globalState, setGlobalState] = useGlobalState()
    const [selected, setSelected] = useState(false)

    const handleToggle = (switchx) => {
        setSelected(!selected);
        if (switchx === switch1){
            setGlobalState({
              ...globalState,
              order: false
          }) // descending
        }else {
            setGlobalState({
              ...globalState,
              order: true
          }) // ascending
        }
  };

  return (
        <div className={'switch-container'}>
            <Button onClick={() => handleToggle(switch1)}
                    bg={'#222A3F'}
                    text={switch1}
                    disabled={selected}
                    border={selected ? 'outlined' : ''}
            />
            <Button onClick={() => handleToggle(switch2)} bg={'#222A3F'} text={switch2} disabled={!selected} border={!selected ? 'outlined' : ''}/>
        </div>

  )
}

TheSwitcher.propTypes = {
    switch1: PropTypes.string.isRequired,
    switch2: PropTypes.string.isRequired
}


export default TheSwitcher