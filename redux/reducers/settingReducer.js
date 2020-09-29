import {
    GET_SETTINGS,
    UPDATE_SETTINGS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SETTINGS:
            return action.payload;
        case UPDATE_SETTINGS:
            return action.payload;
        default:
            return state;
    }
}
