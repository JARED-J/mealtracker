import React from 'react';
import {List} from 'react-native-paper';

export const CalorieCount = ({props}) => {
    const {food} = props;
    let total = 0;
    food.forEach(i => {
        total += i.calories;
    })
    return (
        <List.Item
            title={`Today's Calories: ${total}`}
        />
    )
}
