import {combineReducers} from 'redux';
import {userLoginReducer} from './user-login-reducer';
import {eventsReducer} from './events-reducer';

export const rootReducer = combineReducers({
  authStore: userLoginReducer,
  eventsStore: eventsReducer,
});
export type RootStateType = ReturnType<typeof rootReducer>;
