import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppStack from './AppStack';

import {connect} from 'react-redux';

const Routes = (props) => {
  console.log('props.user in routes', props);


  const [initializing, setInitializing] = useState(true);
  // console.log('loading in routes', props.loading);
  const onAuthStateChanged = (user) => {
    console.log('user is', user);
    // setUser(user);
    if (initializing) setInitializing(false);
  };

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // if (initializing) return null;

  return (
    <NavigationContainer>
        <AppStack user={props.user} />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

const mapStateToProps = (state) => ({
  user: state.userDetails.user,
  loading: state.userDetails.loading,
  isloggedIn: state.userDetails.isloggedIn,
});

export default connect(mapStateToProps)(Routes);
