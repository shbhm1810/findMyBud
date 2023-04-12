import React from 'react';
import {ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import EventCarousel from '../../components/event-carousel/EventCarousel';

import HomeHeader from './components/home-header/HomeHeader';

import styles from './homeScreen-styles';

const HomeScreen = () => {
  return (
    <SafeAreaView edges={['right', 'left', 'top']} style={styles.container}>
      <HomeHeader />
      <ScrollView style={styles.subContainer}>
        <EventCarousel sectionTitle="Upcoming Events" />
        <EventCarousel sectionTitle="Nearby Events" />
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
