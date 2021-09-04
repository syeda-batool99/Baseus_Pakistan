import React, {useEffect} from 'react';
import { Text, View, Image } from "react-native";
import RNBootSplash from 'react-native-bootsplash';
import Home from './screens/Home';

export default function App() {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);
  return <Home />
   
}
