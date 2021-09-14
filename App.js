import React, {useEffect} from 'react';
import { Text, View, Image } from "react-native";
import RNBootSplash from 'react-native-bootsplash';
import Home from './screens/Home';
import AppStack from './navigation/AppStack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from './screens/Welcome';

export default function App() {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
    // <Home />
    // <Welcome />
  )
}
