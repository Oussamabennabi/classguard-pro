import * as React from 'react';
import { BottomNavigation, Text, useTheme } from 'react-native-paper';
import { HomeScreen } from '../screens';
import { GroupChat } from '../screens/ChannelScreen';

const HomeRoute = () => <HomeScreen/>;


const CoursesRoute = () => <Text>Courses</Text>;


// const GroupChatRoute = () => <GroupChat/>;

const ProfileRoute = () => <Text>Profile</Text>;


const AppNavigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Favorites', focusedIcon: 'home-variant-outline'},
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    // { key: 'recents', title: 'Recents', focusedIcon: 'chat-processing-outline' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: HomeRoute,
    albums: CoursesRoute,
    // recents: GroupChatRoute,
    notifications: ProfileRoute,
  });
  const theme = useTheme()

  return (
    <BottomNavigation
    barStyle={{backgroundColor:"black"}}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      keyboardHidesNavigationBar
      compact
      shifting
      activeColor={theme.colors.primary}
      inactiveColor='white'
      renderScene={renderScene}
    />
  );
};

export default AppNavigation