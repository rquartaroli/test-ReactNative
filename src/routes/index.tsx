import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { ScreensRoutes } from './screens.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <ScreensRoutes />
    </NavigationContainer>
  )
}