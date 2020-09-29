import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { TextInput, FAB } from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import {updateSettingsThunk} from '../redux/actions/settingActions';

const FoodForm = props => {
    const {navigation, handleUpdateThunk, breakfast_view, daily_goal, name} = props
    const [cal, setCal] = useState('');
    const [title, setTitle] = useState(name)
    const [breakfast, setBreakfast] = useState(breakfast_view || 1);
    const [showDropDown, setShowDropDown] = useState(false);
    const onFormSubmit = () => {
        handleUpdateThunk({title, breakfast, cal})
        navigation.goBack()
    }

    const options = [
        {label: 'Show Breakfast', value: 1},
        {label: 'Hide Breakfast', value: 0}
    ];

    return (
        <Fragment>
            <View style={styles.container}>
                <TextInput
                    label="Change Name"
                    value={title}
                    mode="outlined"
                    onChangeText={setTitle}
                    style={styles.title}
                />
                <TextInput
                    label="Daily Calorie Goal"
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
                    onPress={() => onFormSubmit()}
                />
                <SafeAreaView>
                  <DropDown 
                    label="Show Breakfast"
                    value={breakfast}
                    setValue={setBreakfast}
                    list={options}
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
        handleUpdateThunk: settings => dispatch(updateSettingsThunk(settings))
    }
}

export default connect(null, mapDispatch)(FoodForm)
