import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Colors from '../assets/Colors/index';
import { connect } from 'react-redux';

const UserAccount = (props) => {
    return(
        <View>
            <Text style={{color:'white'}}>User Account</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

const mapStateToProps = state => ({
    // user: state.userDetails.user,
    products: state.appData.Products,
    categories: state.appData.Categories,
    cartItems: state.cart.cart,
    cartTotal: state.cart.total,
    order: state.order,
    // token: state.userDetails.token,
  });
  

  
  export default connect(mapStateToProps)(UserAccount);
  

