import React from 'react';
import {View, FlatList} from 'react-native';
import EventCard from '../../components/event-card/EventCard';

import styles from './upcomingScreen-styles';

const UpcomingEventsScreen = () => {
  const renderEventCard = ({item}) => {
    return (
      <View style={styles.cardContainer}>
        <EventCard />
      </View>
    );
  };

  return (
    <FlatList data={[{a: 1}, {a: 2}, {a: 4}]} renderItem={renderEventCard} />
  );
};

export default UpcomingEventsScreen;
