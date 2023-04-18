import {Dimensions, StyleSheet} from 'react-native';
import typography from '../../theme/typography';

export const IMAGE_HEIGHT = Dimensions.get('screen').height * 0.13;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  nameText: {
    fontSize: 20,
    fontFamily: typography.firesans_medium,
    color: 'black',
    marginTop: 10,
  },
  headerContainer: {alignItems: 'center'},
  button: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    borderColor: '#4A43EC',
  },
  editText: {
    color: '#4A43EC',
    fontSize: 15,
    fontFamily: typography.firesans_light,
    marginLeft: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 50,
  },
  buttonContainer: {flexDirection: 'row', padding: 13},
});

export default styles;
