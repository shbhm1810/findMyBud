import React from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';

import LocationIcon from '../../assets/icons/Location';

import styles from './eventCard-styles';

const EventCard = () => {
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        source={require('../../assets/images/eventImage.png')}
        //   source={{
        //     uri: require('../../assets/images/invite-banner.png'),
        //     priority: FastImage.priority.normal,
        //   }}
        resizeMode={FastImage.resizeMode.cover}
      />

      <View style={styles.rightContainer}>
        <Text style={styles.dateText}>1st May-Sat-2:00 PM</Text>
        <Text style={styles.titleText} numberOfLines={2}>
          International kids safe parents night out
        </Text>
        <View style={styles.locationContainer}>
          <LocationIcon />
          <Text style={styles.locationText}>Delhi,India</Text>
        </View>
      </View>
    </View>
  );
};

export default EventCard;
