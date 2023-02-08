import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { PackagePointProvider } from './src/hooks/packagePointsContext';

import { Routes } from './src/routes';
import { theme } from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent />
      <PackagePointProvider>
        <Routes />
      </PackagePointProvider>
    </ThemeProvider>
  );
}
