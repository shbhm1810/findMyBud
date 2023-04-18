import {Dimensions, StyleSheet} from 'react-native';
import typography from '../../../../theme/typography';

export const IMAGE_HEIGHT = Dimensions.get('screen').height * 0.13;
const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: 'white',
    marginTop: 20,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
    margin: 4,
  },
  activeTabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    margin: 4,
    borderBottomWidth: 1,
    borderColor: '#4A43EC',
  },
  inactiveTabItem: {
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    borderRadius: 0,
    borderBottomWidth: 0,
  },
  activeText: {
    color: '#4A43EC',
    fontFamily: typography.firesans_regular,
    fontSize: 16,
  },
  inactiveText: {
    color: 'grey',
  },
});

export default styles;
