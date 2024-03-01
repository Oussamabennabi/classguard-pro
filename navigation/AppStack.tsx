import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AppNavigation from './AppNavigation';
import CourseScreen from '../screens/CourseScreen';
import VideoScreen from '../screens/VideoScreen';
import { ChannelScreen } from '../screens/ChannelScreen';
import { Chat,  OverlayProvider } from 'stream-chat-react-native';
import { chatClient, useChatClient } from '../hooks/chat/useChatClient';
import ChannelListScreen from '../screens/ChannelListScreen';
import { Text } from 'react-native-paper';

const Stack = createStackNavigator();

export const AppStack = () => {
  const { clientIsReady } = useChatClient();

  if (!clientIsReady) {
    return <Text>Loading chat ...</Text>
  }
  return (
    <OverlayProvider>
    <Chat client={chatClient}>

    <Stack.Navigator
    screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='MainApp' component={AppNavigation} />
      <Stack.Screen name='CourseScreen' component={CourseScreen} />
      <Stack.Screen name='VideoScreen' component={VideoScreen} />
      <Stack.Screen name="ChannelScreen" component={ChannelScreen} />
      <Stack.Screen name='ChannelListScreen' component={ChannelListScreen} />
    </Stack.Navigator>

    </Chat>

    </OverlayProvider>
  );
};
