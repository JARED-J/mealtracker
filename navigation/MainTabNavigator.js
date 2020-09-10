import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import MealScreen from '../screens/MealScreen';
import GoalScreen from '../screens/GoalScreen';
import TrendScreen from '../screens/TrendScreen';
import FoodForm from '../screens/FoodForm';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const MealStack = createStackNavigator(
  {
    Home: MealScreen,
    Form: FoodForm
  },
  config
);

MealStack.navigationOptions = {
  tabBarLabel: 'Meals',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

MealStack.path = '';

const GoalStack = createStackNavigator(
  {
    Goal: GoalScreen,
  },
  config
);

GoalStack.navigationOptions = {
  tabBarLabel: 'Goals',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

GoalStack.path = '';

const TrendStack = createStackNavigator(
  {
    Settings: TrendScreen,
  },
  config
);

TrendStack.navigationOptions = {
  tabBarLabel: 'Trends',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

TrendStack.path = '';

const tabNavigator = createBottomTabNavigator({
  MealStack,
  GoalStack,
  TrendStack,
});

tabNavigator.path = '';

export default tabNavigator;
