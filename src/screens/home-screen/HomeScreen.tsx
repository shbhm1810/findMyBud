import React from 'react';
import {ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';

import BannerCarousel from '../../components/banner-carousel/BannerCarousel';
import EventCarousel from '../../components/event-carousel/EventCarousel';

import HomeHeader from './components/home-header/HomeHeader';

import styles from './homeScreen-styles';

const HomeScreen = () => {
  const renderCarouselItem = ({item}) => {
    return (
      <View style={styles.carouselContainer}>
        <FastImage
          style={styles.image}
          source={item.imgUrl}
          //   source={{
          //     uri: require('../../assets/images/invite-banner.png'),
          //     priority: FastImage.priority.normal,
          //   }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
    );
  };

  return (
    <SafeAreaView edges={['right', 'left', 'top']} style={styles.container}>
      <HomeHeader />
      <ScrollView style={styles.subContainer}>
        <EventCarousel sectionTitle="Upcoming Events" />
        <BannerCarousel
          renderChildComponent={renderCarouselItem}
          caraouselData={[
            {imgUrl: require('../../assets/images/promo-banner.png')},
            {imgUrl: require('../../assets/images/invite-banner.png')},
          ]}
        />
        <EventCarousel sectionTitle="Nearby Events" />
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
