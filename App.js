import React, {useEffect} from 'react';
import { Text, View, Image } from "react-native";
import RNBootSplash from 'react-native-bootsplash';

export default function App() {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);
  return (
  <View style={{backgroundColor:'#030303', flex: 1}}>
    <Image 
      style={{paddingVertical: 20, width: 200, height: 100}}
      source={require('./assests/logo.png')}
    />
    <Text style={{color:'#FFFFFF', textAlign:'center', fontSize:30, padding: 15}}>Welcome to Baseus Pakistan</Text>
    <Text style={{color:'#FFFFFF', textAlign:'center', fontSize:20, paddingVertical: 150}}>Please wait while we are getting this app ready for you.</Text>
  </View>) 
}
