import {Dimensions, StyleSheet} from 'react-native';
import typography from '../../theme/typography';

export const IMAGE_HEIGHT = Dimensions.get('screen').height * 0.13;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5A68F6',
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  subContainer: {
    marginTop: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  nameText: {
    fontSize: 20,
    fontFamily: typography.firesans_medium,
    color: 'white',
    marginLeft: 10,
  },
  titleText: {
    fontSize: 20,
    fontFamily: typography.firesans_regular,
    color: 'white',
    marginLeft: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
