import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/login-screen/LoginScreen';
import VerifyOtpScreen from '../screens/verify-top-screen/VerifyOtpScreen';
import AppNavigator from '../navigation/AppNavigator';

const Stack = createNativeStackNavigator();

function OnBoardingNavigator(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerifyOtp"
        component={VerifyOtpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AppNavigator"
        component={AppNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default OnBoardingNavigator;
