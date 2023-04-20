import getEvents from '../../api/get-events';
import Toast from 'react-native-root-toast';

const getAllEvents = () => async dispatch => {
  try {
    dispatch({type: 'GET_EVENTS_LOADING', payload: true});
    const result = await getEvents();
    if (result.data) {
      dispatch({type: 'GET_EVENTS_SUCCESS', payload: result.data});
    } else {
      console.log('herere');
      dispatch({type: 'GET_EVENTS_FAILURE', payload: result.message});
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
      type: 'GET_EVENTS_FAILURE',
      payload: 'Failed to load events',
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
    dispatch({type: 'GET_EVENTS_LOADING', payload: false});
  }
};

export default getAllEvents;
