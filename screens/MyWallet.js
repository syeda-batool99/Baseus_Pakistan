import React, {useState} from 'react';
import {connect} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Colors from '../assets/Colors/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {CreditCardInput} from 'react-native-credit-card-input';

const MyWallet = props => {
  const [selected, setSelected] = useState(false);
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Available Balance</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginVertical: 30,
          }}>
          <Text>PKR</Text>
          <Text style={styles.price}>100</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            width: '50%',
            padding: 10,
            borderRadius: 8,
            alignSelf: 'center',
          }}
          onPress={() => setSelected(!selected)}>
          <Text style={{color: 'white', textAlign: 'center'}}>
            Top up your wallet
          </Text>
        </TouchableOpacity>
      </View>
      {selected && (
        <View style={styles.cardContainer}>
          <Text style={styles.heading}>Enter Credit/Debit Card Details</Text>
          <CreditCardInput
            // onChange={this._onChange}
            requiresName
            allowScroll
          />
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              width: '50%',
              padding: 10,
              borderRadius: 8,
              alignSelf: 'center',
              marginVertical: 8,
            }}
            // onPress={() => setSelected(!selected)}
          >
            <Text style={{color: 'white', textAlign: 'center'}}>Proceed</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
  },
  subContainer: {
    backgroundColor: Colors.LightYellow,
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  price: {
    fontSize: 40,
    fontWeight: '600',
  },
  cardContainer: {
    borderColor: Colors.VeryDarkGray,
    borderWidth: 1,
    padding: 15,
    borderRadius: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.LightGray,
    borderRadius: 10,
    marginVertical: 5,
  },
});

const mapStateToProps = state => ({
  // user: state.userDetails.user,
  cartItems: state.cart.cart,
  cartTotal: state.cart.total,
  order: state.order,
  // token: state.userDetails.token,
});

export default connect(mapStateToProps)(MyWallet);
