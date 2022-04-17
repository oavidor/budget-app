import  React, {Children, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ChannelCard from './ChannelCard/ChannelCard';

const ChannelCards = ({channelsList }) => {
   const [activeChannel, setActiveChannel] = useState("");

   const handleChannelClick = (value, active) => {
      if(active){
         setActiveChannel(value)
      }
   }

  return ( 
     <>
      {channelsList.map((channel) => (
           <ChannelCard 
               key={channel?.name} 
               channel={channel}
               active={activeChannel === channel?.name }  
               onCollapseChanged={handleChannelClick}
            />
        ))}
     </>
  )
    
 
}

export default ChannelCards

ChannelCards.propTypes = {
   channelsList: PropTypes.arrayOf(PropTypes.any)
 
};

ChannelCards.defaultProps = {
    channelsList: []
};
