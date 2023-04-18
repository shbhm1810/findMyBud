import {StyleSheet} from 'react-native';
import typography from '../../theme/typography';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
    margin: 5,
  },
  rightContainer: {
    justifyContent: 'center',
    maxWidth: 250,
  },
  dateText: {
    color: '#4A43EC',
    fontFamily: typography.firesans_medium,
  },
  titleText: {
    color: 'black',
    fontFamily: typography.firesans_medium,
    fontSize: 15,
  },
  locationContainer: {flexDirection: 'row', marginTop: 2},
  locationText: {
    marginLeft: 3,
    fontFamily: typography.firesans_light,
    color: 'grey',
  },
});

export default styles;
