import  React from 'react';
import PropTypes from 'prop-types';
import "./BasicBox.css"


const Box = ({children }) => {

  return (
     <div className='box'>
      {children}
     </div>
  )
}

export default Box

Box.propTypes = {
 children: PropTypes.node,
};

Box.defaultProps = {
    children: null,
};