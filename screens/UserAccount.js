import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import * as Colors from '../assets/Colors/index';
import {connect} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Formik} from 'formik';
import * as yup from 'yup';

const UserAccount = props => {
  console.log('props in user account', props);
  return (
    <ScrollView>
      <View style={styles.box}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesome name={'user-circle'} size={30} />
          <Text style={styles.userName}>
            Hello{' '}
            {props.user.username
              ? props.user.username
              : props.user.user_display_name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            margin: 20,
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{textAlign: 'center'}}>0</Text>
            <Text>Orders</Text>
          </View>
          <View>
            <Text style={{textAlign: 'center'}}>0</Text>
            <Text>Returns</Text>
          </View>
          <View>
            <Text style={{textAlign: 'center'}}>0</Text>
            <Text>Cancellations</Text>
          </View>
        </View>
      </View>
      <View style={styles.box1}>
        <Text style={styles.subheading}>Edit Profile</Text>
        <Formik
          initialValues={{password: '', number: ''}}
          onSubmit={(values, {resetForm}) => {
            Alert.alert('Successful', 'Updated.', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
            resetForm({});
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
                  <TextInput
                    style={styles.input}
                    placeholder=" Password"
                    placeholderTextColor={Colors.LightGray}
                    onChangeText={propss.handleChange('password')}
                    value={propss.values.password}
                    onBlur={propss.handleBlur('password')}
                    type="password"
                    secureTextEntry={true}
                    autoCompleteType="password"
                  />
                </View>
                <View style={{marginBottom: 7}}>
                  <TextInput
                    style={styles.input}
                    placeholder=" Phone Number"
                    placeholderTextColor={Colors.LightGray}
                    onChangeText={propss.handleChange('number')}
                    value={propss.values.number}
                    onBlur={propss.handleBlur('number')}
                  />
                </View>
              </View>
              <TouchableOpacity
                onPress={propss.handleSubmit}
                style={styles.btnContainer}>
                <Text style={styles.button}>SAVE CHANGES</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
      <View style={styles.box1}>
        <Text style={styles.subheading}>Manage Address</Text>
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
          }}
          onSubmit={(values, {resetForm}) => {
            Alert.alert('Successful', 'Address updated.', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
            resetForm({});
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
                    keyboardType="numeric"
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
                <Text style={styles.button}>SAVE NEW ADDRESS</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: Colors.LightYellow,
    borderRadius: 8,
    padding: 10,
    margin: 10,
  },
  userName: {
    fontSize: 20,
    marginHorizontal: 20,
  },
  box1: {
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  subheading: {fontSize: 22, marginHorizontal: 20},
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
    backgroundColor: 'transparent',
    borderColor: '#ececec',
    borderWidth: 1,
    borderRadius: 8,
    color: 'black',
  },
});

const mapStateToProps = state => ({
  user: state.userDetails.user,
  // products: state.appData.Products,
  // categories: state.appData.Categories,
  // cartItems: state.cart.cart,
  // cartTotal: state.cart.total,
  // order: state.order,
  // token: state.userDetails.token,
});

export default connect(mapStateToProps)(UserAccount);
