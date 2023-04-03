import {StyleSheet} from 'react-native';

import typography from '../../theme/typography';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  textInput: {
    height: 45,
    fontFamily: typography.firesans_semibold,
    borderBottomWidth: 0.5,
    flexGrow: 1,
    color: 'grey',
  },
  prefixText: {
    fontFamily: typography.firesans_semibold,
    lineHeight: 40,
    alignSelf: 'center',
    marginRight: 5,
    color: 'grey',
  },
});

export default styles;
