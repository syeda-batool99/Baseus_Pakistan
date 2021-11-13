import React from 'react';
import {connect} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Colors from '../assets/Colors/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text} from 'react-native';

const Wallet = props => {
  return (
    <View>
      <MaterialCommunityIcons.Button
        name="wallet"
        backgroundColor={Colors.Yellow}
        size={25}
        color={'black'}
        onPress={() => props.navigation.navigate('MyWallet')}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  // user: state.userDetails.user,
  cartItems: state.cart.cart,
  cartTotal: state.cart.total,
  order: state.order,
  // token: state.userDetails.token,
});

export default connect(mapStateToProps)(Wallet);
