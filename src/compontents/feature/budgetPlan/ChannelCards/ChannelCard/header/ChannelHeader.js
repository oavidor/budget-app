import  React from 'react';
import PropTypes from 'prop-types';
import "./style/ChannelHeader.css"
import clsx from 'clsx';
import Icon from '../../../../../ui/Icon/Icon';
import Menu from "../../../../../ui/Menu/Menu"
import MenuItem from "../../../../../ui/Menu/MenuItem/MenuItem"

const ChannelHeader = ({channel }) => {

  const onEdit = () => {
    console.log("edit")
  }

  const onRemove = () => {
    console.log("remove")
  }
  return (
    <div className={clsx("container", "space-evenly")}>
      <div className={clsx("container", "title")}>
        <Icon name={"paidReviewsIcon"} className='icon' alt="paidReviewsIcon" />
        <div className='name'>{channel?.name}</div>
      </div>
      <div>
        <Menu >
        <MenuItem text='Edit' onClick={onEdit} />
        <MenuItem text='Remove' onClick={onRemove} />
        </Menu> 
      </div>
    </div>
  )
}

export default ChannelHeader