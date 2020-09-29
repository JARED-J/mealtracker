import React, {useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import {ScrollView, StyleSheet, View} from 'react-native';
import {FoodItem, CategoryHeader, CalorieCount} from '../components';
import {getFoodByDate, deleteThunk} from '../redux/actions/foodActions';
import {getSettingsThunk} from '../redux/actions/settingActions';

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

const breakfastView = props => {
  const {food, settings, navigation} = props
  if (settings.breakfast_view) {
    return (
      <Fragment>
        <CategoryHeader title="Breakfast" type={0} navigation={navigation} />
        {listByType(0, food, props)}
      </Fragment>
    )
  }
}

const MealScreen = props => {
  useEffect(() => {
    props.handleGetFood();
    props.handleSettings();
  }, [])
  const {food, navigation, settings} = props;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.mealContainer}>
        {breakfastView(props)}
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
    food: state.food,
    settings: state.settings,
    state
})

const mapDispatch = dispatch => {
  return {
    handleGetFood: date => dispatch(getFoodByDate(date)),
    handleDeleteFood: (id) => dispatch(deleteThunk(id)),
    handleSettings: () => dispatch(getSettingsThunk())
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
