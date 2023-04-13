import {Dimensions, StyleSheet} from 'react-native';

export const IMAGE_HEIGHT = Dimensions.get('screen').height * 0.13;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {zIndex: -10},
  carouselContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  image: {
    height: IMAGE_HEIGHT,
    borderRadius: 10,
  },
});

export default styles;
