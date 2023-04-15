import {Dimensions, StyleSheet} from 'react-native';
import typography from '../../theme/typography';

export const IMAGE_HEIGHT = Dimensions.get('screen').height * 0.13;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    backgroundColor: 'white',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#F7F7F7',
    marginHorizontal: 40,
    borderRadius: 30,
    overflow: 'hidden',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
    borderRadius: 15,
    borderWidth: 1,
    margin: 4,
  },
  activeTabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    margin: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  inactiveTabItem: {
    backgroundColor: '#F7F7F7',
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    borderRadius: 0,
  },
  activeText: {
    color: '#4A43EC',
    fontFamily: typography.firesans_light,
  },
  inactiveText: {
    color: 'grey',
  },
});

export default styles;
