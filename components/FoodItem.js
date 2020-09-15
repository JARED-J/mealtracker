import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List, FAB } from 'react-native-paper';

const EditDelete = ({props}) => {
    const {navigation, id, type, deleteFood, calories, name} = props;
    return (
        <View style={styles.flex}>
            <FAB 
                style={styles.fab}
                small
                icon="pencil"
                onPress={() => navigation.navigate('Form', {formType: 'edit', mealType: type, id, calories, title:name})}/>
            <FAB style={styles.fab} small icon='close' onPress={() => deleteFood(id)} />
        </View>
    )
}

export const FoodItem = (props) => {
    return (
        <List.Item
            title={`${props.name}  ${props.calories}`}
            right={() => <EditDelete props={props} />}
        />
    )
};

const styles = StyleSheet.create({
    flex: {
        flexDirection: 'row'

    },
    fab: {
        margin: 5,
        right: 0,
        bottom: 0
    }
})
