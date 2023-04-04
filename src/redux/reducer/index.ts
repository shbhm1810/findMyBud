import {combineReducers} from 'redux';
import {userLoginReducer} from './user-login-reducer';

export const rootReducer = combineReducers({
  authStore: userLoginReducer,
});
export type RootStateType = ReturnType<typeof rootReducer>;
