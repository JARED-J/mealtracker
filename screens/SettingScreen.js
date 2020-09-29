import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {List, FAB} from 'react-native-paper';

const SettingScreen = props => {
  const {navigation, settings} = props;
  const {name, breakfast_view, daily_goal} = settings;
  return (
    <View style={styles.container}>
      <List.Item
          title={`Name: ${name}`}
        />
        <List.Item
          title={`Breakfast View: ${breakfast_view ? 'Show' : 'Hide'}`}
        />
        <List.Item
          title={`Daily Calorie Goal: ${daily_goal}`}
        />
        <FAB 
            style={styles.fab}
            small
            icon="pencil"
            onPress={() => {
              navigation.navigate('Form', {name, daily_goal, breakfast_view})
        }}/>
    </View>
  );
}

SettingScreen.navigationOptions = {
  title: 'Settings',
};

const mapState = state => ({
  settings: state.settings
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    flexDirection: 'row'
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0
  }
});

export default  connect(mapState, null)(SettingScreen);
