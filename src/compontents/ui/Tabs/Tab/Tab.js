import  React from 'react';
import PropTypes from 'prop-types';
import "./Tab.css"
import clsx from 'clsx';


const Tab = ({label, onTabClick, value, className, selected }) => {

const handleTabClick = () => {
    onTabClick(value)
}

  return (
      <div onClick={handleTabClick}>
        <div className={clsx("tab-header", className, {"selected": selected})}>{label}</div>
      </div>
  )
}

export default Tab

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  className: PropTypes.string,
  selected: PropTypes.bool
};

Tab.defaultProps = {
  className: null,
  selected: false
};
