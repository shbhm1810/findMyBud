import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

import DetailSection from './components/detail-section/DetailSection';
import EditIcon from '../../assets/icons/edit';

import styles from './profileScreen-styles';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <FastImage
          style={styles.image}
          source={require('../../assets/images/profilepic.png')}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Text style={styles.nameText}>Shubham Sharma</Text>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContainer}>
            <EditIcon />
            <Text style={styles.editText}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
      <DetailSection />
    </View>
  );
};

export default ProfileScreen;
