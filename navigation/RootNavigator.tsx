import React, {  useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthStack } from './AuthStack';
import { AppStack } from './AppStack';
import { AuthenticatedUserContext } from '../providers';

export const RootNavigator = () => {
  const { session, setSession } = useContext<any>(AuthenticatedUserContext);
  // const [isLoading, setIsLoading] = useState(true);
 
  // if (isLoading) {
  //   // return <LoadingIndicator />;
  // }

  return (
    <NavigationContainer>
      {session?.user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
