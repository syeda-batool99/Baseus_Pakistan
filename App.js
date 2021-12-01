import React, {useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import Home from './screens/Home';
import {Provider} from 'react-redux';
import store from './redux/configureStore';
import Providers from './navigation';

import AppStack from './navigation/AppStack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from './screens/Welcome';
import AboutUs from './screens/AboutUs';

export default function App() {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);
  return (
    <Providers store={store} />
    // <AboutUs />
    // <NavigationContainer>
    //   <AppStack />
    // </NavigationContainer>
    // <Home />
    // <Welcome />
  );
}
