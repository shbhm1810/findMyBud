import Toast from 'react-native-root-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createUser from '../../api/create-user';

const verifyOtp = (confirmation, otp, callback: () => {}) => async dispatch => {
  try {
    dispatch({type: 'VERITY_OTP_LOADING', payload: true});
    const result = await confirmation?.confirm(otp);

    const {isNewUser} = result.additionalUserInfo;

    const {uid, phoneNumber} = result.user._user;
    await AsyncStorage.setItem('uid', uid);
    dispatch({type: 'VERITY_OTP_SUCCESS', payload: uid});
    if (isNewUser) {
      await createUser({
        phoneNumber,
        uid,
      });
    }

    callback();
  } catch (err) {
    dispatch({
      type: 'VERITY_OTP_FAILURE',
      payload: 'Invalid OTP',
    });
    Toast.show(err.message, {
      duration: Toast.durations.LONG,
      position: Toast.positions.TOP,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      backgroundColor: '#455ff8',
    });
  } finally {
    dispatch({type: 'VERITY_OTP_LOADING', payload: false});
  }
};

export default verifyOtp;
