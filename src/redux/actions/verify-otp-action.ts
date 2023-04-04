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
  } finally {
    dispatch({type: 'VERITY_OTP_LOADING', payload: false});
  }
};

export default verifyOtp;
