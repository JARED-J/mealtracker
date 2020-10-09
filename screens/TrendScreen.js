import React from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import {connect} from 'react-redux';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const TrendScreen = props => {
  const {trends} = props;
  const labels = trends.map(trend => {
    return trend.date;
  })
  const data = trends.map(trend => {
    return trend.calories
  })

  const renderChart = (
    <LineChart
      data={{
        labels,
        datasets: [{data}]
      }}
      width={windowWidth}
      height={windowHeight * 0.8}
      chartConfig={chartConfig}
    />
  )

  const noData = (
    <View style={styles.center}>
      <Text style={styles.text}>No Data For Trend Chart</Text>
    </View>
  )

  return (
    <View>
      {trends[0] ? renderChart : noData}
    </View>
  );
}

const mapState = state => ({
  trends: state.trends
})

const chartConfig = {
  backgroundGradientFrom: "#111",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#fff",
  backgroundGradientToOpacity: 0.7,
  color: () => `teal`,
  barPercentage: 0.5,
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default connect(mapState, null)(TrendScreen);
