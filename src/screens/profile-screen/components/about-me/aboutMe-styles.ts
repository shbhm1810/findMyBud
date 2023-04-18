import {Dimensions, StyleSheet} from 'react-native';
import typography from '../../../../theme/typography';

export const IMAGE_HEIGHT = Dimensions.get('screen').height * 0.13;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 15,
    fontFamily: typography.firesans_light,
    color: 'black',
    marginTop: 10,
  },
});

export default styles;
