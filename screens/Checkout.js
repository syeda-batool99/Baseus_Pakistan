import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as Colors from '../assets/Colors/index';
import {connect} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Formik} from 'formik';
import * as yup from 'yup';

const Checkout = () => {
  return (
    <ScrollView style={styles.background}>
      <Text style={styles.heading}>Checkout</Text>
      <View style={styles.box1}>
        <Text style={styles.subheading}>Details</Text>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            country: '',
            address: '',
            city: '',
            state: '',
            phone: '',
            email: '',
            notes: '',
            PaymentMethod: 'cod',
            PaymentMethodTitle:'Cash on Delivery', 
            lineItems:[]
          }}
          onSubmit={(values, actions) => {
            console.log(values);
          }}>
          {propss => (
            <View>
              <View
                style={{
                  flexDirection: 'column',
                  alignContent: 'space-around',
                  marginVertical: 10,
                }}>
                <View style={{marginBottom: 7}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <TextInput
                      style={[styles.input, {width: '48%'}]}
                      placeholder=" First Name"
                      placeholderTextColor={Colors.LightGray}
                      onChangeText={propss.handleChange('firstName')}
                      value={propss.values.firstName}
                      onBlur={propss.handleBlur('firstName')}
                    />
                    <TextInput
                      style={[styles.input, {width: '48%'}]}
                      placeholder=" Last Name"
                      placeholderTextColor={Colors.LightGray}
                      onChangeText={propss.handleChange('lastName')}
                      value={propss.values.lastName}
                      onBlur={propss.handleBlur('lastName')}
                    />
                  </View>
                </View>
                <View style={{marginBottom: 7}}>
                  <TextInput
                    style={[styles.input]}
                    placeholder=" Country"
                    placeholderTextColor={Colors.LightGray}
                    onChangeText={propss.handleChange('country')}
                    value={propss.values.country}
                    onBlur={propss.handleBlur('country')}
                  />
                </View>
                <View style={{marginBottom: 7}}>
                  <TextInput
                    multiline
                    style={[styles.input, {height: 80}]}
                    placeholder=" House number, Apartment, street name"
                    placeholderTextColor={Colors.LightGray}
                    onChangeText={propss.handleChange('address')}
                    value={propss.values.address}
                    onBlur={propss.handleBlur('address')}
                  />
                </View>
                <View style={{marginBottom: 7}}>
                  <TextInput
                    style={[styles.input]}
                    placeholder=" City"
                    placeholderTextColor={Colors.LightGray}
                    onChangeText={propss.handleChange('city')}
                    value={propss.values.city}
                    onBlur={propss.handleBlur('city')}
                  />
                </View>
                <View style={{marginBottom: 7}}>
                  <TextInput
                    style={[styles.input]}
                    placeholder=" State"
                    placeholderTextColor={Colors.LightGray}
                    onChangeText={propss.handleChange('state')}
                    value={propss.values.state}
                    onBlur={propss.handleBlur('state')}
                  />
                </View>
                <View style={{marginBottom: 7}}>
                  <TextInput
                    style={[styles.input]}
                    placeholder=" Phone"
                    placeholderTextColor={Colors.LightGray}
                    onChangeText={propss.handleChange('phone')}
                    value={propss.values.phone}
                    onBlur={propss.handleBlur('phone')}
                  />
                </View>
                <View style={{marginBottom: 7}}>
                  <TextInput
                    style={[styles.input]}
                    placeholder=" Email Address"
                    placeholderTextColor={Colors.LightGray}
                    onChangeText={propss.handleChange('email')}
                    value={propss.values.email}
                    onBlur={propss.handleBlur('email')}
                  />
                </View>
                <View style={{marginBottom: 7}}>
                  <TextInput
                    multiline
                    style={[styles.input, {height: 65}]}
                    placeholder=" Order Notes (optional)"
                    placeholderTextColor={Colors.LightGray}
                    onChangeText={propss.handleChange('notes')}
                    value={propss.values.notes}
                    onBlur={propss.handleBlur('notes')}
                  />
                </View>
              </View>
              <TouchableOpacity
                onPress={propss.handleSubmit}
                style={styles.btnContainer}>
                <Text style={styles.button}>PLACE ORDER</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.White,
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical:10
  },
  heading: {
    // color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  box1: {
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  subheading: {fontSize: 22},
  button: {
    backgroundColor: Colors.Yellow,
    textAlign: 'center',
    borderRadius: 12,
    fontStyle: 'italic',
    padding: 10,
  },
  btnContainer: {
    width: '50%',
  },
  input: {
    // backgroundColor: 'transparent',
    borderColor: '#ececec',
    borderWidth: 1,
    borderRadius: 8,
    color: 'black',
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

export default connect(mapStateToProps)(Checkout);
