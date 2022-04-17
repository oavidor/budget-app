import  React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import "./Popover.css"
import clsx from 'clsx';


const Popover = ({children, show, className }) => {

  return (
    show && 
     <div className={clsx('popover-container', className)}>
      {children}
     </div>
  )
}

export default Popover

Popover.propTypes = {
 children: PropTypes.node,
 show: PropTypes.bool,
 className: PropTypes.string
};

Popover.defaultProps = {
    children: null,
    show: false,
    className: null
};