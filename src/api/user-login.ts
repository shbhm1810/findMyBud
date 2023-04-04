import auth from '@react-native-firebase/auth';

const loginUser = async phoneNumber => {
  let result = {};
  try {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    result = {
      data: confirmation,
      status: 200,
      message: '',
    };
  } catch (e) {
    result = {
      data: null,
      status: 400,
      message: 'Unable to send OTP',
    };
  }
  return result;
};

export default loginUser;
