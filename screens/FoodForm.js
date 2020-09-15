/* eslint-disable react/jsx-pascal-case */
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { TextInput, FAB } from 'react-native-paper';
import {addFoodThunk, updateFoodThunk} from '../redux/actions/foodActions'

// Add update thunk functionality
const FoodForm = props => {
    const {navigation, handlePostFood, handleUpdateFood} = props
    const {title, calories, mealType, formType, id} = navigation.state.params;
    const [name, setName] = useState('' || title);
    const [cal, setCal] = useState(0 || calories);
    const [type, setType] = useState(mealType);
    const onFormSubmit = () => {
        formType === 'post' ? handlePostFood({name, cal, type}) : handleUpdateFood({id, name, cal, type});
        navigation.goBack()
    }

    return (
        <Fragment>
            <View style={styles.container}>
                <TextInput
                    label="Food name"
                    value={name}
                    mode="outlined"
                    onChangeText={setName}
                    style={styles.title}
                />
                <TextInput
                    label="Calorie count"
                    value={cal + ''}
                    onChangeText={setCal}
                    mode="flat"
                    style={styles.text}
                    returnKeyType="done"
                    blurOnSubmit={true}
                />
                <FAB
                    style={styles.fab}
                    small
                    icon="check"
                    disabled={name === '' ? true : false}
                    onPress={() => onFormSubmit()}
                />
            {/*
                Add dropdown box to update type of food
                onChange={evt => setType(evt.target.option?)}
            */}
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingVertical: 20
    },
    iconButton: {
      backgroundColor: 'rgba(46, 113, 102, 0.8)',
      position: 'absolute',
      right: 0,
      top: 40,
      margin: 10
    },
    title: {
      fontSize: 24,
      marginBottom: 20
    },
    text: {
      height: 100,
      fontSize: 20
    },
    fab: {
      position: 'absolute',
      margin: 20,
      right: 0,
      bottom: 0
    }
  })

const mapDispatch = dispatch => {
    return {
        handlePostFood: food => dispatch(addFoodThunk(food)),
        handleUpdateFood: food => dispatch(updateFoodThunk(food))
    }
}

export default connect(null, mapDispatch)(FoodForm)
