import {StyleSheet, Dimensions} from 'react-native';

import typography from '../../theme/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    paddingHorizontal: 20,
    height: Dimensions.get('screen').height,
  },
  subContainer: {
    flex: 2,
  },
  heading: {fontSize: 22, fontFamily: typography.firesans_bold, color: 'black'},
  subHeading: {
    fontSize: 15,
    fontFamily: typography.firesans_light,
    color: 'grey',
    fontWeight: '700',
  },
  boldSubHeading: {
    fontSize: 15,
    fontFamily: typography.firesans_light,
    color: 'black',
    fontWeight: '700',
  },
  buttonContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#455ff8',
    marginTop: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    paddingVertical: 15,
    fontFamily: typography.firesans_bold,
    fontSize: 22,
    color: 'white',
  },
  btnImageContainer: {
    position: 'absolute',
    right: 10,
    bottom: 0,
    top: 0,
    justifyContent: 'center',
  },
  errorTxt: {
    fontFamily: typography.firesans_semibold,
    color: 'red',
    fontSize: 10,
    marginLeft: 5,
  },
});

export default styles;
