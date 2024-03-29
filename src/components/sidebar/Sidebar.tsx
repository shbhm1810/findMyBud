import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SignOutIcon from '../../assets/icons/signout';

import styles from './sidebar-styles';

const sidebarOptions = [
  {
    title: 'Logout',
    Icon: SignOutIcon,
  },
];

const Sidebar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FastImage
          style={styles.image}
          source={require('../../assets/images/profilepic.png')}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Text style={styles.nameText}>Shubham Sharma</Text>
      </View>
      <ScrollView style={styles.subContainer}>
        {sidebarOptions.map(item => {
          const {title, Icon} = item;
          return (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                AsyncStorage.removeItem('uid');
              }}>
              <Icon width={30} height={30} />
              <Text style={styles.titleText}>{title}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Sidebar;
