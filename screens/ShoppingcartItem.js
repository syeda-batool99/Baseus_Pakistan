import React from 'react';
import {connect} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Colors from '../assets/Colors/index';
import {View, Text} from 'react-native';
// import Wallet from '../screens/Wallet';

const ShoppingcartItems = props => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View>
        <FontAwesome.Button
          name="shopping-bag"
          backgroundColor={Colors.Yellow}
          size={25}
          color={'black'}
          onPress={() => props.navigation.navigate('Cart')}
        />
        <Text
          style={{
            color: 'black',
            position: 'absolute',
            // left: 0,
            right: 12,
            top: 0,
            bottom: 0,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          {props.cartItems.length}
        </Text>
      </View>
      {/* {props.user && <Wallet navigation={props.navigation} />} */}
    </View>
  );
};

const mapStateToProps = state => ({
  // user: state.userDetails.user,
  cartItems: state.cart.cart,
  cartTotal: state.cart.total,
  order: state.order,
  user: state.userDetails.user,
  // token: state.userDetails.token,
});

export default connect(mapStateToProps)(ShoppingcartItems);
