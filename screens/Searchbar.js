import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Searchbar} from 'react-native-paper';

const RenderSearchbar = (props) => {
    return (
        <Searchbar
          style={{marginBottom: 20, marginHorizontal: 10}}
          placeholder="Search"
          onChangeText={props.onChangeSearch}
          value={props.value}
        />
    );
  };

  export default RenderSearchbar;