import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import * as Colors from '../assets/Colors/index';
import {
  removeItem,
  emptyCart,
  addToCart,
  updateCart,
} from '../redux/appActions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InputSpinner from 'react-native-input-spinner';
import Toast from 'react-native-toast-message';

const Cart = props => {
  // const [quantity, setQuantity] = useState(1);
  // const IncreaseQuantity = item => {
  //   if (quantity == 10) {
  //     Toast.show({
  //       type: 'error',
  //       text1: 'Error',
  //       text2: 'Maximum quantity limit is 10',
  //       position: 'top',
  //     });
  //   } else {
  //     setQuantity(quantity + 1);
  //     props.UpdateCart(item, quantity, (operation = 'add'));
  //   }
  // };
  // const DecreaseQuantity = item => {
  //   if (quantity == 1) {
  //     Toast.show({
  //       type: 'error',
  //       text1: 'Error',
  //       text2: 'Minimum quantity limit is 1',
  //       position: 'top',
  //     });
  //   } else {
  //     setQuantity(quantity - 1);
  //     props.UpdateCart(item, quantity, (operation = 'subtract'));
  //   }
  // };
  const cartItemsRender = ({item}) => {
    const index = props.cartItems.indexOf(item);
    // console.log('cartOteems', item);
    return (
      <View style={styles.cartItemsContainer}>
        <View style={styles.ItemContainer}>
          <TouchableOpacity onPress={() => props.RemoveItem(item, index)}>
            <MaterialIcons name={'cancel'} color={'black'} size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.ItemContainer2}>
          <Text style={styles.subheading}>Product: </Text>
          <Text style={styles.value}>{item.name}</Text>
        </View>
        <View style={styles.ItemContainer2}>
          <Text style={styles.subheading}>Price: </Text>
          <Text style={styles.value}>Rs. {item.price}</Text>
        </View>
        <View style={styles.ItemContainer2}>
          <Text style={styles.subheading}>Quantity: </Text>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <TouchableOpacity onPress={() => props.UpdateCart(item, false)}>
              <AntDesign name={'minuscircle'} size={25} />
            </TouchableOpacity>
            <Text style={{marginHorizontal: 10}}>{item.qty}</Text>
            <TouchableOpacity onPress={() => props.UpdateCart(item, true)}>
              <AntDesign name={'pluscircle'} size={25} />
            </TouchableOpacity>
          </View>
          {/* <InputSpinner
            max={10}
            min={1}
            step={1}
            initialValue={'1'}
            buttonStyle={{
              backgroundColor: Colors.LightYellow,
              borderRadius: 50,
            }}
            height={40}
            // buttonTextStyle={{textAlign: 'top'}}
            buttonTextColor={'black'}
            // colorMax={'#f04048'}
            // colorMin={'#40c5f4'}
            // value={this.state.number}
            onChange={num => {
              // quantity = num;
              console.log('Num', num);
              props.UpdateCart(item, num);
              // console.log('quantity', quantity);
            }}
          /> */}
        </View>
        {/* <View style={styles.ItemContainer2}>
          <Text style={styles.subheading}>Product total: </Text>
          <Text style={styles.value}> Rs. {item.cartTotal}</Text>
        </View> */}
      </View>
    );
  };
  function temp() {
    props.EmptyCart();
  }
  return (
    <ScrollView style={styles.background}>
      <Text style={styles.heading}>Cart</Text>

      <Text style={styles.subheading}>
        Your Cart has {props.cartItems.length} items
      </Text>
      {props.cartItems.length != 0 && (
        <TouchableOpacity style={styles.emptyCartBtn} onPress={temp}>
          <Text style={styles.emptyCartText}>Empty Cart</Text>
        </TouchableOpacity>
      )}

      <FlatList
        data={props.cartItems}
        renderItem={cartItemsRender}
        keyExtractor={item => item.id}
      />
      {props.cartItems.length > 0 && (
        <View>
          <Text style={styles.subheading}>Cart Total</Text>
          <View style={styles.cartItemsContainer}>
            <View
              style={[
                styles.ItemContainer2,
                {justifyContent: 'space-between'},
              ]}>
              <Text style={styles.subheading}>Subtotal: </Text>
              <Text style={[styles.valueTotal, {right: 10}]}>
                {' '}
                Rs. {props.cartTotal}
              </Text>
            </View>
            <View
              style={[
                styles.ItemContainer2,
                {justifyContent: 'space-between'},
              ]}>
              <Text style={styles.subheading}>Shipping: </Text>
              <Text
                style={[
                  styles.valueTotal,
                  {right: 10, fontWeight: 'normal', fontSize: 14},
                ]}>
                {' '}
                Rs. 200
              </Text>
            </View>
            <View
              style={[
                styles.ItemContainer2,
                {justifyContent: 'space-between'},
              ]}>
              <Text style={[styles.subheading, {fontWeight: '500'}]}>
                Coupon code:{' '}
              </Text>
              <TextInput style={styles.input} />
              <TouchableOpacity
                style={{alignSelf: 'center'}}
                // onPress={() => props.navigation.navigate('Checkout')}
              >
                <Text style={styles.button}>Update</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.ItemContainer2,
                {justifyContent: 'space-between'},
              ]}>
              <Text style={styles.subheading}>Cart Total: </Text>
              <Text style={[styles.valueTotal, {right: 10}]}>
                {' '}
                Rs. {props.cartTotal + 200}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => props.navigation.navigate('Checkout')}>
            <Text style={styles.button}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.White,
    flex: 1,
  },
  heading: {
    // color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  subheading: {
    color: Colors.VeryDarkGray,
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
    marginVertical: 10,
  },
  value: {
    color: Colors.VeryDarkGray,
    marginVertical: 12,
    width: '80%',
  },
  cartItemsContainer: {
    borderColor: Colors.VeryDarkGray,
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 5,
    padding: 10,
  },
  ItemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderBottomColor: Colors.Olive,
    borderBottomWidth: 1,
    padding: 5,
  },
  ItemContainer2: {
    flexDirection: 'row',
    borderBottomColor: Colors.Olive,
    borderBottomWidth: 1,
    padding: 3,
  },
  QuantityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: Colors.Olive,
    borderBottomWidth: 1,
    padding: 3,
  },
  emptyCartBtn: {
    backgroundColor: Colors.Yellow,
    padding: 8,
    borderRadius: 12,
    width: '50%',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 8,
  },
  emptyCartText: {
    color: Colors.VeryDarkGray,
    fontSize: 15,
    fontWeight: '500',
  },
  valueTotal: {
    color: Colors.VeryDarkGray,
    marginVertical: 12,
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: Colors.Yellow,
    textAlign: 'center',
    borderRadius: 12,
    // fontStyle: 'italic',
    fontWeight: '600',
    padding: 10,
    color: 'black',
  },
  btnContainer: {
    width: '50%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  input: {
    backgroundColor: 'transparent',
    borderColor: Colors.LightGray,
    borderWidth: 1,
    borderRadius: 8,
    width: '30%',
    height: '80%',
    color: 'black',
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
});

const mapStateToProps = state => ({
  // user: state.userDetails.user,
  products: state.appData.Products,
  categories: state.appData.Categories,
  cartItems: state.cart.cart,
  cartTotal: state.cart.total,
  order: state.order,
  // token: state.userDetails.token,
});

const mapDispatchToProps = dispatch => {
  return {
    RemoveItem: (body, id) => dispatch(removeItem(body, id)),
    EmptyCart: () => dispatch(emptyCart()),
    AddToCart: body => dispatch(addToCart(body)),
    UpdateCart: (body, num, operation) =>
      dispatch(updateCart(body, num, operation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
