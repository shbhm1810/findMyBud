import {StyleSheet} from 'react-native';
import typography from '../../theme/typography';

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20, paddingRight: 20},
  cell: {
    width: 50,
    height: 60,
    lineHeight: 55,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    borderRadius: 15,
    fontFamily: typography.firesans_semibold,
    color: 'black',
  },
  focusCell: {
    borderColor: '#000',
  },
});
export default styles;
