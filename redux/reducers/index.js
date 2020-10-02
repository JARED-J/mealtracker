import { combineReducers } from 'redux';
import food from './foodReducer';
import settings from './settingReducer';
import trends from './trendReducer';

export default combineReducers({
    food,
    settings,
    trends
});
