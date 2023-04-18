import {StyleSheet} from 'react-native';
import typography from '../../theme/typography';

const styles = StyleSheet.create({
  container: {paddingRight: 20, marginTop: 20},
  header: {flexDirection: 'row', justifyContent: 'space-between'},
  heading: {
    fontFamily: typography.firesans_medium,
    fontSize: 25,
    color: 'black',
    marginLeft: 20,
  },
  lightHeading: {
    color: 'grey',
  },
  rightHeader: {flexDirection: 'row', alignItems: 'center'},
  titleHeading: {
    fontFamily: typography.firesans_medium,
    fontSize: 20,
    color: 'black',
  },
  cardContainer: {
    marginRight: 20,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    // backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    marginLeft: 10,
    marginBottom: 5,
  },
  eventJoinedTxt: {
    color: 'blue',
  },
  locationTxt: {
    color: '#716E90',
    marginLeft: 4,
  },
  locationContainer: {flexDirection: 'row', alignItems: 'center'},
  bottomContainer: {marginLeft: 10, marginTop: 15},
});

export default styles;
