import  React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import "./CollapsableCard.css"
import CardHeader from './CardHeader/CardHeader';

const CollapsableCard = ({header, children, onCollapseChanged, collapse, value }) => {

const [open, setOpen] = useState(collapse);

useEffect(()=>{
  setOpen(collapse)
},[collapse])

  const handleChange = () => {
    setOpen(prev => !prev)
    onCollapseChanged(value, !open)
  }

  return (
    <div className='card'>
      <CardHeader 
          onClick={handleChange}
          open={open}
      >
          {header}
      </CardHeader>
      <div className={open ? "show" : "hide"}>
      <div className='card-content'>
          {children}
          </div>
      </div>
    </div>
  )
}

export default CollapsableCard

CollapsableCard.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  onCollapseChanged: PropTypes.func.isRequired,
  collapse: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

CollapsableCard.defaultProps = {
  header: null,
  children: null,
  className: null,
  collapse: false
};