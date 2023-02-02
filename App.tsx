import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Dashboard } from './src/screens/Dashboard';
import { theme } from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent />
      <Dashboard />
    </ThemeProvider>
  );
}
