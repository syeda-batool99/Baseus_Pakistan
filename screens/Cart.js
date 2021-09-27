import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import * as Colors from '../assets/Colors/index';
import {removeItem,emptyCart} from '../redux/appActions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NumericInput from 'react-native-numeric-input';

const Cart = props => {

  const cartItemsRender = ({item}) => {
    const index = props.cartItems.indexOf(item);
    // console.log('index', index)
    return (
      <View style={styles.cartItemsContainer}>
        <View style={styles.ItemContainer}>
          <TouchableOpacity onPress={()=>props.RemoveItem(item, index)}>
            <MaterialIcons name={'cancel'} color={'white'} size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.ItemContainer2}>
          <Text style={styles.subheading}>Product: </Text>
          <Text style={styles.value}> {item.name}</Text>
        </View>
        <View style={styles.ItemContainer2}>
          <Text style={styles.subheading}>Price: </Text>
          <Text style={styles.value}> Rs. {item.price}</Text>
        </View>
        <View style={styles.ItemContainer2}>
          <Text style={styles.subheading}>Quantity: </Text>
          <NumericInput
            onChange={value => console.log(value)}
            totalWidth={100}
            totalHeight={35}
            valueType="real"
            minValue={0}
            textColor="white"
            separatorWidth={0}
            iconStyle={{color: 'white'}}
            rightButtonBackgroundColor={Colors.Olive}
            leftButtonBackgroundColor={Colors.Olive}
          />
        </View>
        {/* <View style={styles.ItemContainer2}>
          <Text style={styles.subheading}>Subtotal: </Text>
          <Text style={styles.value}> Rs. {item.total}</Text>
        </View> */}
      </View>
    );
  };
  function temp (){
    props.EmptyCart()
  }
  return (
    <ScrollView style={styles.background}>
      <Text style={styles.heading}>Cart</Text>
      
      <Text style={styles.subheading}>
        Your Cart has {props.cartItems.length} items
      </Text>
      {props.cartItems.length !=0 && <TouchableOpacity style={styles.emptyCartBtn} onPress={temp}><Text style={styles.emptyCartText}>Empty Cart</Text></TouchableOpacity>}
      
      <FlatList
        data={props.cartItems}
        renderItem={cartItemsRender}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity>
          <Text>Proceed to Checkout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.VeryDarkGray,
    flex: 1,
  },
  heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  subheading: {
    color: Colors.LightYellow,
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
    marginVertical: 10,
  },
  value: {
    color: 'white',
    marginVertical: 12,
    width: '80%',
  },
  cartItemsContainer: {
    borderColor: Colors.Yellow,
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
  emptyCartBtn:{
      backgroundColor:Colors.Yellow,
      padding:8,
      borderRadius:12,
      width:'50%',
      alignItems:'center',
      alignSelf:'center',
      marginBottom:8
  },
  emptyCartText:{
      color:Colors.VeryDarkGray,
      fontSize:15,
      fontWeight:'500'
  }
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

const mapDispatchToProps = (dispatch) => {
    return {
      RemoveItem: (body,id) => dispatch(removeItem(body,id)),
      EmptyCart: () => dispatch(emptyCart())
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
