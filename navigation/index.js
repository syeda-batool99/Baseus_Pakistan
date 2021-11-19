import React from 'react';
//import { AuthProvider } from './AuthProvider.android';
import Routes from './Route';
import {Provider} from 'react-redux';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import * as Colors from '../assets/Colors/index';

const Providers = ({store}) => {
  const toastConfig = {
    success: props => (
      <BaseToast
        {...props}
        style={{borderLeftColor: Colors.VeryDarkGray}}
        contentContainerStyle={{
          paddingHorizontal: 15,
          backgroundColor: Colors.LightYellow,
        }}
        text1Style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}
        text2Style={{
          color: Colors.VeryDarkGray,
        }}
      />
    ),
    error: props => (
      <ErrorToast
        {...props}
        style={{borderLeftColor: 'red'}}
        text1Style={{
          fontSize: 17,
        }}
        text2Style={{
          fontSize: 15,
        }}
      />
    ),
  };
  return (
    <Provider store={store}>
      <Routes />
      <Toast topOffset={80} config={toastConfig} />
    </Provider>
  );
};

export default Providers;
