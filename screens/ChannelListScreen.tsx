import React from 'react'
import { View } from 'react-native'
import {
   
    ChannelList,
  } from 'stream-chat-react-native'; // Or stream-chat-expo
import { chatUserId } from '../hooks/chat/useChatClient';
import { useChatContext } from '../context/ChatContext';
  const filters = {
    members: {
      '$in': [chatUserId]
    },
  };
  
  const sort = {
    last_message_at: -1,
  } as any;
  
const ChannelListScreen = (props ) => {
    const { setChannel } = useChatContext();
  return (
        <ChannelList
        filters={filters}
        sort={sort}
        onSelect={(channel) => {
            const { navigation } = props;
            setChannel(channel);
            navigation.navigate('ChannelScreen');
          }}
      />
  )
}

export default ChannelListScreen

 

  