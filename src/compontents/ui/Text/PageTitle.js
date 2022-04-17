import  React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import "./PageTitle.css"

const PageTitle = ({text, className }) => {


  return (
      <div className={clsx("page-title", className)}>{text}</div>
  )
}

export default PageTitle

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

PageTitle.defaultProps = {
  className: null,
};
