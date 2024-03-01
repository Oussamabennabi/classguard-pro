import React from 'react';

import {
  // ...
  Channel,
  MessageList,
  MessageInput,
} from 'stream-chat-react-native'; // Or stream-chat-expo
import { useChatContext } from '../context/ChatContext';

export function ChannelScreen() {
    const  {channel} = useChatContext()

   
  return (
    <Channel channel={channel as any}>
    <MessageList />
    <MessageInput />
  </Channel>
   
  );
}
