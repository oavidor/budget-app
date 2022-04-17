import  React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import "./PageTitle.css"

const SubTitle = ({text, className }) => {


  return (
      <div className={clsx("sub-title", className)}>{text}</div>
  )
}

export default SubTitle

SubTitle.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

SubTitle.defaultProps = {
  className: null,
};
