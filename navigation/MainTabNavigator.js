import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import MealScreen from '../screens/MealScreen';
import GoalScreen from '../screens/SettingScreen';
import TrendScreen from '../screens/TrendScreen';
import FoodForm from '../screens/FoodForm';
import SettingForm from '../screens/SettingForm';

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

const SettingStack = createStackNavigator(
  {
    Goal: GoalScreen,
    Form: SettingForm
  },
  config
);

SettingStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

SettingStack.path = '';

const TrendStack = createStackNavigator(
  {
    Settings: TrendScreen,
    Form: SettingForm
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
  TrendStack,
  SettingStack
});

tabNavigator.path = '';

export default tabNavigator;
