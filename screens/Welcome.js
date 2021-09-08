import React from "react";
import {View, Text, Image} from 'react-native';

const Welcome = () => {
    return(
        <View style={{backgroundColor:'#000000', flex: 1, flexDirection:'column', padding: 20}}>
      <View style={{ flex: 1}}>
          <Image style={{width: 200, height: 100}} source={require('../assets/logo.png')}/>
      </View>
      <View style={{ flex: 2}}>
          <Text style={{textAlign:'center', color:'white', fontSize:40, position:'absolute', bottom:0}}>Welcome to Baseus Pakistan</Text> 
      </View>
      <View style={{ flex: 3,alignItems:'center'}}>
          <Text style={{color:'white', position:'absolute', bottom:0, fontSize: 20}}>This app is under construction</Text>
      </View>
    </View>
    )
}

export default Welcome;