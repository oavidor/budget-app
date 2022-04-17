import  React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Label from '../Label/Label';


const Field = ({label, icon, children, className }) => {

  return (
     <div className={className}>
        {label && <Label text={label} icon={icon} />}
         <div>
             {children}
         </div>
     </div>
  )
}

export default Field

Field.propTypes = {
 children: PropTypes.node,
 label: PropTypes.string,
 icon: PropTypes.node,
 className: PropTypes.string
};

Field.defaultProps = {
    children: null,
    label: null,
    icon: null,
    className: ""
};