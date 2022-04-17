import  React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import "./Button.css"
import Icon from "../../Icon/Icon"


const Button = ({label, onClick, className, icon}) => {

  return (
     <div className={clsx("button", className)} onClick={onClick} >
        <div className='button-icon'>
            {icon && <Icon name={icon} className='add' alt="add" /> }
         </div>
         <div>
             {label}
         </div>
        
     </div>
  )
}

export default Button

Button.propTypes = {
 label: PropTypes.string.isRequired,
 onClick: PropTypes.func.isRequired,
 className: PropTypes.string,
 icon: PropTypes.string
};

Button.defaultProps = {
 className: null,
 icon: ""
};