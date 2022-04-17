import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import "./TabContent.css"


const TabContent = ({ children, selected }) => {
    return (
        <div className={clsx("content", "hide", {"show": selected})}>
            {children}
        </div>
    );
  }
  
  export default TabContent

  TabContent.propTypes = {
    children: PropTypes.node,
    selected: PropTypes.bool,
  };
  
  TabContent.defaultProps = {
    children: null,
    selected: false
  };
  