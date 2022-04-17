import React from 'react';
// import ChannelCards from '../ChannelCards/ChannelCards';
import channels from "../../../../data/channels.json" //get the data from the parent and update in the parent?
import ChannelCards from '../ChannelCards/ChannelCards';

const Tab1 = () => {

  return ( 
    <ChannelCards channelsList={channels} />
  );

}

export default Tab1