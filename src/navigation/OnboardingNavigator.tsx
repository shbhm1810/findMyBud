import React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/login-screen/LoginScreen';

const Stack = createNativeStackNavigator();

function OnBoardingNavigator(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="SignOut"
        component={SignOut}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}

export default OnBoardingNavigator;
