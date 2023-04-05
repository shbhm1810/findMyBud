import loginUser from '../../api/user-login';
import Toast from 'react-native-root-toast';

const phoneLogin =
  (phoneNumber: string, callback: () => {}) => async dispatch => {
    try {
      dispatch({type: 'LOGIN_LOADING', payload: true});
      const result = await loginUser(phoneNumber);
      if (result.data) {
        dispatch({type: 'LOGIN_SUCCESS', payload: result.data});
        callback();
      } else {
        dispatch({type: 'LOGIN_FAILURE', payload: result.message});
        Toast.show(result.message, {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          backgroundColor: '#455ff8',
        });
      }
    } catch (err) {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: 'Login Failed please contact adminstartor',
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
      dispatch({type: 'LOGIN_LOADING', payload: false});
    }
  };

export default phoneLogin;
