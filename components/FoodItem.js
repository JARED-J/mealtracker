import React from 'react';
import {List} from 'react-native-paper';
import EditDelete from './EditDelete';

export const FoodItem = (props) => {
    return (
        <List.Item
            title={`${props.name}  ${props.calories}`}
            right={() => <EditDelete props={props} />}
        />
    )
};
