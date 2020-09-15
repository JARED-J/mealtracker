import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {ScrollView, StyleSheet, View, Button, Text} from 'react-native';
import {FoodItem, CategoryHeader, CalorieCount} from '../components';
import {getFoodByDate, deleteThunk} from '../redux/actions/foodActions';

const listByType = (type, food, props) => {
  let filtered = food.filter(item => {
    return item.type === type;
  });
  return filtered.map(item => (
    <FoodItem
      style={styles.mealItem}
      key={item.id}
      id={item.id}
      name={item.name}
      calories={item.calories}
      type={item.type}
      dateUTC={item.dateUTC}
      deleteFood={props.handleDeleteFood}
      navigation={props.navigation}
    />
    )
  )
}

const MealScreen = props => {
  // Pass date parameter from getCurrentDate
  useEffect(() => {
    props.handleGetFood()
  }, [])
  const {food, navigation} = props;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.mealContainer}>
        <CategoryHeader title="Breakfast" type={0} navigation={navigation} />
          {listByType(0, food, props)}
        <CategoryHeader title="Lunch" type={1} navigation={navigation} />
          {listByType(1, food, props)}
        <CategoryHeader title="Dinner" type={2} navigation={navigation} />
          {listByType(2, food, props)}
        <CategoryHeader title="Snacks" type={3} navigation={navigation} />
          {listByType(3, food, props)}
        <CalorieCount props={props} />
      </ScrollView>
    </View>
  );
}


MealScreen.navigationOptions = {
  title: 'Meals',
};

const mapState = state => ({
    food: state.food
})

const mapDispatch = dispatch => {
  return {
    handleGetFood: date => dispatch(getFoodByDate(date)),
    handleDeleteFood: (id) => dispatch(deleteThunk(id))
  }
}

export default connect(mapState, mapDispatch)(MealScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mealContainer: {
    flex: 1,
  },
  mealCategory: {
    alignItems: 'flex-start',
  },
  mealItem: {
    flex: 1,
  }
});
