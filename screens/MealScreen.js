import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import {FoodItem} from '../components/FoodItem';
import {getFood, addFood} from '../db/queries';

export default function MealScreen() {
  const [food, setFood] = useState([]);
  const [name, setName] = useState('');
  const [cal, setCal] = useState(0);
  const type = 0;
  const updateFood = async () => {
    const foodArr = await getFood();
    setFood(foodArr);
  }

  const addUpdate = (name, cal, type) => {
    addFood(name, cal, type);
  }
  console.log(name);
  return (
    <View style={styles.container}>
      <Text>All Food Tabel Entries.</Text>
      <Button
        title="Get all from food from database"
        onPress={() => updateFood()}
      />
      <Button
        title="Add food to database"
        onPress={() =>  {
          addUpdate(name, cal, type);
        }}
      />
      <TextInput
        placeholder="Type the food name here"
        onChange={evt => {
          setName(evt.nativeEvent.text)}}
      />
      <TextInput
        placeholder="Type the calorie count here"
        keyboardType="numeric"
        onChange={num => {
          setCal(+num.nativeEvent.text)}}
      />
      <ScrollView style={styles.mealContainer}>
        {food.map(item => (
          <FoodItem
            style={styles.mealItem}
            key={item.id}
            id={item.id}
            name={item.name}
            calories={item.calories}
            type={item.type}
            date={item.dateUTC}
          />
        ))}
      </ScrollView>
    </View>
  );
}

MealScreen.navigationOptions = {
  title: 'Meals',
};

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
