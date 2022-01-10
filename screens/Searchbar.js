/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Searchbar} from 'react-native-paper';

const RenderSearchbar = props => {
  return (
    <Searchbar
      style={{marginBottom: 20, marginHorizontal: 10}}
      onChangeText={props.onChangeSearch}
      value={props.value}
    />
  );
};

export default RenderSearchbar;
