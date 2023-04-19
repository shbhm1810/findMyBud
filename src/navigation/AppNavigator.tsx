import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

function AppNavigator(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
