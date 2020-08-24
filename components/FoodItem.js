import React from 'react';
import { View, Text, Button } from 'react-native';
import {deleteFood} from '../db/queries';
const foodType = {
    0: 'Breakfast',
    1: 'Lunch',
    2: 'Dinner',
    3: 'Snacks'
}

export const FoodItem = ({id, name, calories, dateUTC, type}) => {
    return (
        <View>
            <Text>id:{id}</Text>
            <Text>name:{name}</Text>
            <Text>cal:{calories}</Text>
            <Text>type:{foodType[type]}</Text>
            <Text>date:{dateUTC}</Text>
            <Button
                title="Delete Food"
                onPress={() => {
                    deleteFood(id)
                }}
            />
        </View>
    )
};
