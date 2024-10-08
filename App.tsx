import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, Platform} from 'react-native';
import RootNavigator from './src/routes';

const App = ({children, edges}: any) => {
  return (
<RootNavigator/>
  );
};

export default App;
