import { combineReducers } from 'redux';
import food from './foodReducer';
import settings from './settingReducer';

export default combineReducers({
    food,
    settings
});

// export { foodReducer } from './foodReducer';