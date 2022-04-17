import  React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Popover from '../Popover/Popover';
import  './Select.css';
import "../../../../style/style.css"
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Icon from '../../Icon/Icon';



const Select = ({options, onChange, currentValue }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(currentValue);

  useEffect(() => {
    setValue(currentValue)
  }, [currentValue])

  const handleOnClick = () => {
    setOpen(prev => !prev)
  }

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleOnOptionClick = (selctedValue) => {
    setValue(selctedValue)
    onChange(selctedValue)
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
    <div onClick={handleOnClick} style={{position: "relative"}} >
      <div className="basic-select">
         <div className='selected-value'>{value}</div>
         <div><Icon alt="arrow" name="arrow" className={open ? "arrow-up" : "arrow-down"} /></div>
      </div>
      <Popover show={open}>
        <div>
          {
            options.map(option => (
              <div key={option} className={clsx('option-item', {"option-selected": value === option} )} onClick={() => handleOnOptionClick(option)}>
                <div className='option-item-text'>
                  {option}
                </div>
              </div>
            ))
          }
        </div>
      </Popover>
    </div>
    </ClickAwayListener>
  )
}

export default Select

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string), 
  onChange: PropTypes.func.isRequired, 
  currentValue: PropTypes.string.isRequired
};

Select.defaultProps = {
  options: [],
};