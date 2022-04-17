import  React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import "./Label.css"


const Label = ({text, icon }) => {

  return (
     <div className='label'>
         <span className='label-text'>{text}</span>
         {icon && <span>{icon}</span>}
     </div>
  )
}

export default Label

Label.propTypes = {
 text: PropTypes.string.isRequired,
 icon: PropTypes.node
};

Label.defaultProps = {
  icon: null,
};