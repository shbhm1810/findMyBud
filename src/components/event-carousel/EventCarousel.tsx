import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';

import SeeAllIcon from '../../assets/icons/triangle';
import LocationIcon from '../../assets/icons/Location';

import styles from './eventCarousel-styles';

const eventCard = [
  {
    eventName: 'Badminton',
    date: '10 June',
    address: 'Mansarover Park Shahdara',
    peopleJoined: 20,
  },
  {
    eventName: 'Football',
    date: '12 June',
    address: 'Dilshad Garden',
    peopleJoined: 20,
  },
  {
    eventName: 'Music',
    date: '15 June',
    address: 'Mansarover Park Shahdara',
    peopleJoined: 20,
  },
];

const EventCarousel = (props: {sectionTitle: string; containerStyle?: any}) => {
  const {sectionTitle, containerStyle} = props;
  const renderItem = ({item}) => {
    console.log(item);
    return (
      <View style={[styles.cardContainer, containerStyle]}>
        <Image source={require('../../assets/images/eventImage.png')} />
        <View style={styles.bottomContainer}>
          <Text style={styles.titleHeading}>{item.eventName}</Text>
          <Text style={styles.eventJoinedTxt}>{`+${item.peopleJoined}`}</Text>
          <View style={styles.locationContainer}>
            <LocationIcon />
            <Text style={styles.locationTxt}>{item.address}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>{sectionTitle}</Text>
        <View style={styles.rightHeader}>
          <Text style={styles.lightHeading}>See All</Text>
          <SeeAllIcon />
        </View>
      </View>
      <FlatList
        horizontal={true}
        data={eventCard}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.eventName}
      />
    </View>
  );
};

export default EventCarousel;
