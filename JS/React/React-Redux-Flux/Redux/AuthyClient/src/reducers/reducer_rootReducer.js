/**
 *
 *  @summary : Combine all independent reducers in single reducer
 * 
 */

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducer_authReducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer
});

export default rootReducer;
