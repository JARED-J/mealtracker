import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default function GoalScreen() {
  return (
    <View style={styles.container}>
      <Text> This is the Goals Screen</Text>
    </View>
  );
}

GoalScreen.navigationOptions = {
  title: 'Goals',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
