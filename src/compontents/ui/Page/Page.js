import  React from 'react';
import PropTypes from 'prop-types';
import "./Page.css"


const Page = ({children }) => {
  return (
      <div className='page'>
        {children}
      </div>
 
  )
}

export default Page

Page.propTypes = {
  children: PropTypes.node,
};

Page.defaultProps = {
  children: null,
};