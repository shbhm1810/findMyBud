import Toast from 'react-native-root-toast';

const verifyOtp = (confirmation, otp, callback: () => {}) => async dispatch => {
  try {
    dispatch({type: 'VERITY_OTP_LOADING', payload: true});
    await confirmation?.confirm(otp);
    dispatch({type: 'VERITY_OTP_SUCCESS', payload: 'success'});
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
