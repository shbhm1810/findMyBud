import {StyleSheet, Dimensions} from 'react-native';

import typography from '../../theme/typography';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    paddingHorizontal: 20,
    height: Dimensions.get('screen').height,
  },
  heading: {
    fontFamily: typography.firesans_semibold,
    color: 'black',
    fontSize: 27,
  },
  subContainer: {
    marginTop: 20,
  },
  subHeading: {
    fontFamily: typography.firesans_light,
    color: 'black',
    fontSize: 18,
  },
  buttonContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#455ff8',
    marginTop: 55,
    marginHorizontal: 25,
    paddingVertical: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
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
  resendText: {
    textAlign: 'center',
    fontFamily: typography.firesans_semibold,
    color: 'black',
    marginTop: 20,
  },
  secondsText: {
    fontFamily: typography.firesans_semibold,
    color: '#455ff8',
  },
});

export default styles;
