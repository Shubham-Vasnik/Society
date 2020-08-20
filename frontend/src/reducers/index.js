import { combineReducers } from 'redux';

import societyReducer from './societyReducer';

export default combineReducers({
   societies:societyReducer,
})