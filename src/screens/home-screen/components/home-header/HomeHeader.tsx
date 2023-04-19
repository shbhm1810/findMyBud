import React from 'react';
import {FlatList, Pressable, TouchableOpacity, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import HambergerIcon from '../../../../assets/icons/hamburger1';
import NotificationBellIcon from '../../../../assets/icons/notification';
import SportIcon from '../../../../assets/icons/sport';
import ArtIcon from '../../../../assets/icons/art';
import FoodIcon from '../../../../assets/icons/food';
import MusicIcon from '../../../../assets/icons/music.svg';

import styles from './homeHeader-styles';

const sortFilters = [
  {
    title: 'Sports',
    component: <SportIcon />,
    color: '#F0635A',
  },
  {
    title: 'Music',
    component: <MusicIcon />,
    color: '#F59762',
  },
  {
    title: 'Food Walk',
    component: <FoodIcon />,
    color: '#29D697',
  },
  {
    title: 'Art',
    component: <ArtIcon />,
    color: '#46CDFB',
  },
];

const HomeHeader = () => {
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <View style={[styles.filterContainer, {backgroundColor: item.color}]}>
        {item.component}
        <Text style={styles.filterText}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Pressable
          onPress={() => {
            // navigation.navigate(DrawerActions.openDrawer());
            navigation.openDrawer();
          }}>
          <HambergerIcon />
        </Pressable>
        <Pressable>
          <NotificationBellIcon />
        </Pressable>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          horizontal={true}
          data={sortFilters}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.title}
        />
      </View>
    </View>
  );
};
export default HomeHeader;
