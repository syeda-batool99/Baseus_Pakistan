import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from '../shared/Header';

const Home = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
          <View style={styles.background}>
            <Header />
          </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor:'#030303', flex: 1
    }
})

export default Home;
