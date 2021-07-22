import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenOne from '../../screens/ScreenOne';
import ScreenTwo from '../../screens/ScreenTwo';
import ScreenThree from '../../screens/ScreenThree';

const Tab = createBottomTabNavigator();

export default class TabNav extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeBackgroundColor: 'slateblue',
            pressColor: 'navy',
            labelStyle: {fontSize: 20, color: 'white'},
            style: {backgroundColor: 'darkslateblue'},
          }}>
          <Tab.Screen name="1" component={ScreenOne} />
          <Tab.Screen name="2" component={ScreenTwo} />
          <Tab.Screen name="3" component={ScreenThree} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
