import  React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import "./PageTitle.css"

const HelperText = ({text, className }) => {


  return (
      <div className={clsx("helper-text", className)}>{text}</div>
  )
}

export default HelperText

HelperText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

HelperText.defaultProps = {
  className: null,
};
