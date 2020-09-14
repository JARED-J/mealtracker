import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List, FAB } from 'react-native-paper';

const EditDelete = ({props}) => {
    const {navigation, id, type, deleteFood, calories, name} = props;
    return (
        <View>
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
            style={styles.flex}
            title={`${props.name}  ${props.calories}`}
            right={() => <EditDelete props={props} />}
        />
    )
};

const styles = StyleSheet.create({
    flex: {
        display: 'flex'
    },
    fab: {
        margin: 20,
        right: 0,
        bottom: 0
    }
})
