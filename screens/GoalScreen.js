import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as SQLite from 'expo-sqlite';

// TODO: should db be stored in some variable instead of opened each time?
const db = SQLite.openDatabase('misc', '1');

export default function GoalScreen() {
  
  const [count, setCount] = useState(0);

  db.transaction((txn)=>{
    txn.executeSql('SELECT COUNT(*) AS c FROM `Misc`', [], function (tx, res) {
        setCount(res.rows.item(0)['c']);
    });
  });
  return (
    <View style={styles.container}>
      <Text> This is the Goals Screen.</Text>
      <Text> This app has been opened {count} times.</Text>
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
