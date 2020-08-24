import {
    FOOD_CREATED,
    FOOD_UPDATED,
    FOOD_DELETED,
    GET_FOOD_BY_DAY
} from '../actions/types';

const INITIAL_STATE = {
    food: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_FOOD_BY_DAY:
            return {...state, food:{...action.payload}}
        case FOOD_CREATED:
            return {...state, food:{...action.food, food}};
        case FOOD_DELETED:
            const deletedFood = state.food.filter(item => {
                return item.id !== action.payload.id;
            });
            return { ...state, food: deletedFood };
        default:
            return state;
    }
}