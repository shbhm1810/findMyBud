import loginUser from '../../api/user-login';

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
      }
    } catch (err) {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: 'Login Failed please contact adminstartor',
      });
    } finally {
      dispatch({type: 'LOGIN_LOADING', payload: false});
    }
  };

export default phoneLogin;
