import  React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import "../CollapsableCard.css"
import Icon from '../../Icon/Icon';

const CardHeader = ({children, onClick, open }) => {


  return (
    <div
    onClick={onClick}
    className={"card-header"}
    >
    <div>
    <Icon name={"arrow"} alt={"arrow"} className={open ? "arrow-down" : "arrow-up"} />
    </div>
    <div className='card-header-content'>
    {children}
    </div>
  </div>
  )
}

export default CardHeader

CardHeader.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

CardHeader.defaultProps = {
  children: null,
};
