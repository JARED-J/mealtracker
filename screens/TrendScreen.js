import React from 'react';
import { View, Text } from 'react-native';

export default function TrendScreen() {
  return (
    <View style={styles.container}>
      <Text> This is the Trends Screen</Text>
    </View>
  );
}

TrendScreen.navigationOptions = {
  title: 'Trends',
};
