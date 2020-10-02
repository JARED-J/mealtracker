import {GET_TRENDS} from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TRENDS:
            return action.payload;
        default:
            return state;
    }
}
