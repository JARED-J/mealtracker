import {
    FOOD_CREATED,
    FOOD_UPDATED,
    FOOD_DELETED,
    GET_FOOD
} from '../actions/types';

const INITIAL_STATE = {
    food: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_FOOD:
            return {...state, food:{...action.food}}
        case FOOD_CREATED:
            return {...state, food:{...action.food, food}};
        case FOOD_DELETED:
            const deletedFood = state.food.filter(food => {
                return food.id !== action.food;
            });
            return { ...state, food: deletedFood };
        default:
            return state;
    }
}