import React from 'react';
import {StyleSheet} from 'react-native';
import {List, FAB} from 'react-native-paper';

// Make const that has edit and delete funtionality //

export const CategoryHeader = props => {
    const { title, navigation, type } = props;
    return (
        <List.Section style={styles.container}>
            <List.Item
                title={title}
                right={props => <FAB style={styles.fab} onPress={() => navigation.navigate('Form', {formType: 'post', mealType: type})}
                small
                icon="plus"
                />}
            />
        </List.Section>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1
    },
    fab: {
        margin: 20,
        right: 0,
        bottom: 0
    }
});
