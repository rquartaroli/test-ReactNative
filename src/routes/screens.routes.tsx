import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Dashboard } from '../screens/Dashboard';
import { StatusPackage } from '../screens/StatusPackage';

const { Navigator, Screen } = createStackNavigator()

export const ScreensRoutes = () => {
  return (
    <Navigator 
      initialRouteName="dashboard"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="dashboard" component={Dashboard} />
      <Screen name="statusPackage" component={StatusPackage} />
    </Navigator>
  )
}