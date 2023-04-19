import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import {Dimensions} from 'react-native';

import Sidebar from '../components/sidebar/Sidebar';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      // screenOptions={{headerShown: false}}
      screenOptions={{headerShown: false}}
      drawerStyle={{
        backgroundColor: '#c6cbef',
        width: Dimensions.get('screen').width * 0.8,
      }}
      drawerContent={() => <Sidebar />}>
      <Drawer.Screen name="Homescreen" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
