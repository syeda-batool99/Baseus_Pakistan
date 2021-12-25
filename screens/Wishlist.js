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
  removefromWishlist,
  emptyWishlist,
  addToCart,
} from '../redux/appActions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Wishlist = props => {
  const [refreshPage, setRefreshPage] = useState('');
  const cartItemsRender = ({item}) => {
    const index = props.wishlist.indexOf(item);
    // console.log('index', index)
    return (
      <View style={styles.cartItemsContainer}>
        <View style={styles.ItemContainer2}>
          <Text style={styles.subheading}>Product: </Text>
          <Text style={styles.value}> {item.name}</Text>
        </View>
        <View style={styles.ItemContainer2}>
          <Text style={styles.subheading}>Price: </Text>
          <Text style={styles.value}> Rs. {item.price}</Text>
        </View>
        <View style={styles.ItemContainer2}>
          <Text style={styles.subheading}>Available: </Text>
          <Text style={styles.value}>
            {' '}
            {item.in_stock ? 'In Stock' : 'Out of Stock'}
          </Text>
        </View>

        {item.in_stock && (
          <TouchableOpacity
            // style={{marginBottom: 15}}
            onPress={() => props.AddToCart(item)}>
            <Text style={styles.addToCartBtn}>Add to cart </Text>
          </TouchableOpacity>
        )}
        {/* <View style={styles.ItemContainer2}>
          <Text style={styles.subheading}>Subtotal: </Text>
          <Text style={styles.value}> Rs. {item.total}</Text>
        </View> */}
      </View>
    );
  };
  function temp() {
    props.EmptyWishlist();
  }
  return (
    <ScrollView style={styles.background}>
      <Text style={styles.heading}>Wishlist</Text>

      <Text style={styles.subheading}>
        Your Wishlist has {props.wishlist.length} items
      </Text>
      {props.wishlist.length != 0 && (
        <TouchableOpacity style={styles.emptyCartBtn} onPress={temp}>
          <Text style={styles.emptyCartText}>Empty Wishlist</Text>
        </TouchableOpacity>
      )}

      <FlatList
        data={props.wishlist}
        renderItem={cartItemsRender}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.White,
    flex: 1,
  },
  addToCartBtn: {
    backgroundColor: Colors.Yellow,
    textAlign: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    paddingVertical: 10,
    width: '60%',
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
});

const mapStateToProps = state => ({
  // user: state.userDetails.user,
  products: state.appData.Products,
  categories: state.appData.Categories,
  cartItems: state.cart.cart,
  cartTotal: state.cart.total,
  order: state.order,
  wishlist: state.wishlist.wishlist,
  // token: state.userDetails.token,
});

const mapDispatchToProps = dispatch => {
  return {
    RemoveItem: (body, id) => dispatch(removefromWishlist(body, id)),
    EmptyWishlist: () => dispatch(emptyWishlist()),
    AddToCart: body => dispatch(addToCart(body)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
