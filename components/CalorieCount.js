import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const CalorieCount = ({props}) => {
    const {food} = props;
    let total = 0;
    food.forEach(i => {
        total += i.calories;
    })
    return (
        <View>
            <Text>Calorie Count: {total}</Text>
        </View>
    )
}
