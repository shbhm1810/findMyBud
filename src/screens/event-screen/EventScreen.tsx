import React, {useState} from 'react';
import {
  View,
  useWindowDimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

import styles from './eventScreen-styles';

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const EventScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {key: 'first', title: 'Upcoming Events'},
    {key: 'second', title: 'Past Events'},
  ]);

  const renderBar = props => {
    const {navigationState} = props;
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? 1 : 0.5,
            ),
          });

          return (
            <TouchableOpacity
              style={[
                styles.activeTabItem,
                navigationState.index !== i && styles.inactiveTabItem,
              ]}
              onPress={() => setIndex(i)}>
              <Animated.Text
                style={[
                  {opacity},
                  styles.activeText,
                  navigationState.index !== i && styles.inactiveText,
                ]}>
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <TabView
      navigationState={{index, routes}}
      style={styles.tabContainer}
      renderScene={renderScene}
      renderTabBar={renderBar}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default EventScreen;
