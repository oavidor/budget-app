import  React from 'react';
import PropTypes from 'prop-types';

const VerticalSpace = ({padding, value }) => {

  return (
      <div style={{[padding]: value}}> </div>
  )
}

export default VerticalSpace

VerticalSpace.propTypes = {
  padding: PropTypes.string,
  value: PropTypes.string,
};

VerticalSpace.defaultProps = {
  padding: "",
  value: "",
};
