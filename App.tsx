import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Text>Hello World</Text>
      <StatusBar style="auto" translucent />
    </ThemeProvider>
  );
}
