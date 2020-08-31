import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import {FoodItem} from '../components/FoodItem';
import {
  getFoodByDate,
  addFoodThunk,
  deleteThunk
} from '../redux/actions/foodActions'

const MealScreen = props => {
  const {food} = props;
  const [name, setText] = useState('');
  const [cal, setCal] = useState(0);
  const type = 0;
  return (
    <View style={styles.container}>
      <Button
        title="Get all from food from database"
        onPress={() => {
          props.handleGetFood();
          setCal(0);
          setText('');
        }}
      />
      <Button
        title="Add food to database"
        onPress={() =>  {
          props.handlePostFood({name, cal, type})
          setCal(0)
          setText('')
        }}
      />
      <TextInput
        placeholder="Type the food name here"
        onChange={evt => setText(evt.nativeEvent.text)}
      />
      <TextInput
        placeholder="Type the calorie count here"
        keyboardType="numeric"
        onChange={num => setCal(num.nativeEvent.text * 1)}
      />
      <ScrollView style={styles.mealContainer}>
        {food.map(item => (
          <FoodItem
            style={styles.mealItem}
            key={item.id}
            id={item.id}
            name={item.name}
            calories={item.calories || item.cal}
            type={item.type}
            dateUTC={item.dateUTC}
            deleteFood={props.handleDeleteFood}
          />))
        }
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
    handleGetFood: () => dispatch(getFoodByDate(2)),
    handlePostFood: (food) => dispatch(addFoodThunk(food)),
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
