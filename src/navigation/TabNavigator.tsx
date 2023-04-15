/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home-screen/HomeScreen';
import CalenderSVG from '../assets/icons/Calendar.svg';
import ActiveCalendarSVG from '../assets/icons/ActiveCalendar';
import ProfileSVG from '../assets/icons/profile.svg';
import LocationSVG from '../assets/icons/Location.svg';
import ActiveProfileSVG from '../assets/icons/ActiveProfile.svg';
import ActiveLocationSVG from '../assets/icons/ActiveLocation';
import typography from '../theme/typography';

function MyEvents() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>My Events</Text>
    </View>
  );
}
function Profile() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="MyEvents"
        component={MyEvents}
        options={{
          title: 'My Events',
          tabBarLabelStyle: styles.tabTitle,
          tabBarActiveTintColor: '#4A43EC',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <ActiveCalendarSVG />
            ) : (
              <CalenderSVG fill="blue" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: styles.tabTitle,
          tabBarActiveTintColor: '#4A43EC',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <ActiveLocationSVG />
            ) : (
              <LocationSVG fill="blue" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarActiveTintColor: '#4A43EC',
          tabBarLabelStyle: styles.tabTitle,
          tabBarIcon: ({focused}) => {
            return focused ? <ActiveProfileSVG /> : <ProfileSVG />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabTitle: {
    fontFamily: typography.firesans_medium,
    fontSize: 12,
  },
});

export default TabNavigator;
