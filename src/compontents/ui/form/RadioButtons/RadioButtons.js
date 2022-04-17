import  React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import RadioButton from './RadioButton/RadioButton';



const RadioButtons = ({options, onChange, currentValue }) => {
  const [value, setValue] = useState(currentValue);

  useEffect(() => {
    setValue(currentValue)
  }, [currentValue])

  const handleOnButtonClick = (selectedValue) => {
    setValue(selectedValue)
    onChange(selectedValue)
  }

  return (
    <div className='radio-buttons-container'>
    {options.map((item, index) => (
       <RadioButton 
        key={item} value={item} 
        onButtonClick={()=> handleOnButtonClick(item)} 
        selected={item === value} 
        className={clsx("", {"first": index === 0, "last": index === options?.length - 1 })}
         />
    ))}
  </div>
  )
}

export default RadioButtons

RadioButtons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string), 
  onChange: PropTypes.func.isRequired, 
  currentValue: PropTypes.string.isRequired
};

RadioButtons.defaultProps = {
  options: [],
};