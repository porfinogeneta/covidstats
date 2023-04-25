import PropTypes from 'prop-types';
function Button({bg, text, border, height, disabled, onClick, type}) {

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button onClick={handleClick}
            type={type} style={{backgroundColor: bg, height}}
            disabled={disabled}
            className={`button button-text ${border}`}>
      {text}
    </button>
  )
}

Button.propTypes = {
  bg: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  border: PropTypes.string,
  height: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
  type: PropTypes.string
};

export default Button