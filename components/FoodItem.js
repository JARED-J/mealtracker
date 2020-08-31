import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

const foodType = {
    0: 'Breakfast',
    1: 'Lunch',
    2: 'Dinner',
    3: 'Snacks'
}

export const FoodItem = ({id, name, calories, type, deleteFood}) => {
    return (
        <View>
            <Text>id:{id}</Text>
            <Text>name:{name}</Text>
            <Text>cal:{calories}</Text>
            <Text>type:{foodType[type]}</Text>
            <Button
                title="Delete Food"
                onPress={() => deleteFood(id)}
            />
        </View>
    )
};

