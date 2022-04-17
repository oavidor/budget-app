import  React from 'react';
import PropTypes from 'prop-types';
import CollapsableCard from '../../../../ui/CollapsableCard/CollapsableCard';
import ChannelHeader from './header/ChannelHeader';
import ChannelForm from './content/ChannelForm';

const ChannelCard = ({channel, active, onCollapseChanged }) => {

    const header = (
       <ChannelHeader channel={channel} />
    )

  return (
    <CollapsableCard 
        value={channel?.name} 
        header={header} 
        collapse={active} 
        onCollapseChanged={onCollapseChanged}  
    >
        <div>
           <ChannelForm channel={channel} />
        </div>
    </CollapsableCard>
  )
}

export default ChannelCard

ChannelCard.propTypes = {
  channel: PropTypes.any.isRequired,
  active: PropTypes.bool,
  onCollapseChanged: PropTypes.func.isRequired
};

ChannelCard.defaultProps = {
  active: false
};
