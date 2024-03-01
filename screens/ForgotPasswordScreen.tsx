import React, { useState } from 'react';
import {  Text, View } from 'react-native';

export const ForgotPasswordScreen = ({ navigation }:{navigation:any}) => {
  const [errorState, setErrorState] = useState('');


  return (
    <View 
    >
      <View 
      >
        <Text 
        >Reset your password</Text>
      </View>
      {/* Button to navigate to Login screen */}
     
    </View>
  );
};

