import {
    ADD_FOOD,
    FOOD_UPDATED,
    FOOD_DELETED,
    FOOD_BY_DAY
} from './types';
import {
    getFood,
    postFood,
    deleteFoodDB
} from '../../db/queries';

// Action Creators
const foodByDateA = food => ({
    type: FOOD_BY_DAY, payload: food
})

const addFoodA = food => ({
    type: ADD_FOOD, payload: food
});

const updateFoodA = food => ({
    type: FOOD_UPDATED, payload: food
})

const deleteFoodA = id => ({
    type: FOOD_DELETED, payload: id
})

//Thunk DB Calls with actions
export const getFoodByDate = date => dispatch => {
        getFood(date)
            .then(food => dispatch(foodByDateA(food)))
            .catch(err => console.log(err));
}

export const addFoodThunk = food => dispatch => {
    postFood(food)
        .then(dbFood => dispatch(addFoodA(dbFood)))
        .catch(err => console.log(err))
}

export const deleteThunk = id => dispatch => {
    deleteFoodDB(id)
        .then(() => dispatch(deleteFoodA(id)))
        .catch(err => console.log(err))
}
