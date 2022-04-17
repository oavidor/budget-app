import  React from 'react';
import PropTypes from 'prop-types';
import  '../Menu.css';



const MenuItem = ({text, onClick}) => {


  return (
    <div className="menu-item" onClick={onClick}>
        <div className='menu-item-text'>
            {text}
        </div>
    </div>
  )
}

export default MenuItem

MenuItem.propTypes = {
    text: PropTypes.string.isRequired, 
    onClick: PropTypes.func.isRequired, 
};
