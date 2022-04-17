import  React, { useState} from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab/Tab';
import "./Tabs.css"
import clsx from 'clsx';

const Tabs = ({tabs, onTabChange, children, className }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabClick = (value) => {
    setSelectedTabIndex(value)
    onTabChange(tabs[value])
  }

  return (
    <div>
      <div className={clsx("tabs", className)}>
        {tabs?.map((tab, index) => (
           <Tab label={tab} key={tab} value={index} onTabClick={handleTabClick} selected={index === selectedTabIndex}  />
        ))}
      </div>
      <div>
        {children}
      </div>
      </div>
  )
}

export default Tabs

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  onTabChange: PropTypes.func.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

Tabs.defaultProps = {
  children: null,
  className: null
};
