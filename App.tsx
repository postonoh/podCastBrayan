import React from 'react';

import {
  StyleSheet,
} from 'react-native';

import { Box, UtilityThemeProvider } from 'react-native-design-utility';
import { theme } from './src/constants/theme';
import MainNavigation from './src/navigations/MainNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';


declare var global: { HermesInternal: null | {} };

const App = () => {
  return (
    <UtilityThemeProvider theme={theme}>
      <SafeAreaProvider>
        <MainNavigation />
      </SafeAreaProvider>
    </UtilityThemeProvider>

  );
};


export default App;
