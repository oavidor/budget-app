import  React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Popover from '../form/Popover/Popover';
import  './Menu.css';
import "../../../style/style.css"
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Icon from '../Icon/Icon';



const Menu = ({children}) => {
  const [open, setOpen] = useState(false);


  const handleOnClick = (event) => {
    event.preventDefault()
    event.stopPropagation()
    setOpen(prev => !prev)
  }

  const handleClickAway = () => {
    setOpen(false);
  };




  return (
    <ClickAwayListener onClickAway={handleClickAway}>
    <div onClick={handleOnClick}  style={{position: "relative"}} >
    <div className='menu-icon-contaier'>
      <Icon alt="menu" name="menu" className='menu'/>
    </div>
      <Popover show={open} className="menu-popover">
      <div>
       {children}
        </div>
      </Popover>
    </div>
    </ClickAwayListener>
  )
}

export default Menu

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};