import  React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { getIcon } from './helpers';
// import "./Icon.css"


const Icon = ({image, name, alt, className }) => {

  return (
    image ? 
    <img alt={alt} src={image} className={className} /> : 
    <img alt={alt} src={getIcon(name)} className={className} />
  )
}

export default Icon

Icon.propTypes = {
 children: PropTypes.node,
};

Icon.defaultProps = {
    children: null,
};