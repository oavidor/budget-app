import  React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import "../RadioButtons.css"
import clsx from 'clsx';
import "../../../../../style/style.css"



const RadioButton = ({ onButtonClick, value, className, selected }) => {

const handleButtonClick = () => {
    onButtonClick(value)
}

  return (
      <div onClick={handleButtonClick} className={clsx("container-center", "basic-radio-button", className, {"selected": selected})}>
        <div>{value}</div>
      </div>
  )
}

export default RadioButton

RadioButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  className: PropTypes.string,
  selected: PropTypes.bool
};

RadioButton.defaultProps = {
  className: null,
  selected: false
};