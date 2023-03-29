import React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function SignIn() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>SignIn</Text>
    </View>
  );
}
function SignOut() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>SignOut</Text>
    </View>
  );
}
function OnBoardingNavigator(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignOut"
        component={SignOut}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default OnBoardingNavigator;
