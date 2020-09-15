import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { TextInput, FAB } from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import {addFoodThunk, updateFoodThunk} from '../redux/actions/foodActions'

const FoodForm = props => {
    const {navigation, handlePostFood, handleUpdateFood} = props
    const {title, calories, mealType, formType, id} = navigation.state.params;
    const [name, setName] = useState('' || title);
    const [cal, setCal] = useState(calories || 0);
    const [type, setType] = useState(mealType);
    const [showDropDown, setShowDropDown] = useState(false);
    const onFormSubmit = () => {
        formType === 'post' ? handlePostFood({name, cal, type}) : handleUpdateFood({id, name, cal, type});
        navigation.goBack()
    }
    const mealList = [
      {label: 'Breakfast', value: 0},
      {label: 'Lunch', value: 1},
      {label: 'Dinner', value: 2},
      {label: 'Snacks', value: 3}
    ];

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
                <SafeAreaView>
                  <DropDown 
                    label="Change Meal"
                    value={type}
                    setValue={setType}
                    list={mealList}
                    visible={showDropDown}
                    showDropDown={() => setShowDropDown(true)}
                    onDismiss={() => setShowDropDown(false)}
                  />
                </SafeAreaView>
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
