import {StyleSheet} from 'react-native';

import typography from '../../../../theme/typography';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4A43EC',
    // height: 100,

    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 100,
  },
  filterText: {
    fontFamily: typography.firesans_medium,
    color: 'white',
    marginLeft: 3,
  },
  filterContainer: {
    flexDirection: 'row',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    justifyContent: 'space-between',
  },
  listContainer: {
    position: 'absolute',
    bottom: -15,
  },
});

export default styles;
