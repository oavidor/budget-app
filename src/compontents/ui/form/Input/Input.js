import  React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import  './style/Input.css';
import "../../../../style/style.css"

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Input = ({onChange, currentValue, disabled, className, type }) => {

  const [value, setValue] = useState(currentValue);

  useEffect(() => {
    setValue(currentValue)
  }, [currentValue])

  const handleValueChange = (event) => {
    const newValue = numberWithCommas(event.target.value)
    setValue(newValue)
  }

  const onBlur = () => {
    if(onChange){
      onChange(value)
    }
  }

  const onEnter = (event) => {
    if(event.keyCode === 13 && onChange){
      onChange(value)
    }
  }


  return (
     <input 
        className={clsx('basic-input', className) }
        value={value} 
        onChange={handleValueChange} 
        disabled={disabled}
        onBlur={onBlur}
        onKeyDown={onEnter}
        type={type}
        >
      </input>
  )
} 

export default Input

Input.propTypes = {
 disabled: PropTypes.bool,
 currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
 className: PropTypes.string,
 onChange: PropTypes.func
};

Input.defaultProps = {
  disabled: false,
  currentValue: "",
  className :null,
  onChange: null
};