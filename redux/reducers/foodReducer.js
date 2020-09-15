import {
    ADD_FOOD,
    FOOD_UPDATED,
    FOOD_DELETED,
    FOOD_BY_DAY
} from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FOOD_BY_DAY:
            return action.payload;
        case ADD_FOOD:
            return [...state, action.payload];
        case FOOD_UPDATED:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload;
                } else {
                    return item
                }
            });
        case FOOD_DELETED:
            return state.filter(item => {
                return item.id !== action.payload;
            });
        default:
            return state;
    }
}
