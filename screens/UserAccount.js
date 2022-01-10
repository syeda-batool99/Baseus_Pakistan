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
import Toast from 'react-native-toast-message';

const UserAccount = props => {
  console.log('props in user account', props);

  const reviewSchema = yup.object({
    number: yup.string().min(11, 'Phone number must be 11 characters'),
    password: yup.string().min(8, 'Password must be atleast 8 characters'),
  });

  const reviewSchema1 = yup.object({
    firstName: yup.string().required('Name is a required field'),
    lastName: yup.string().required('Name is a required field'),
    country: yup.string().required('Country is a required field'),
    address: yup.string().required('Address is a required field'),
    city: yup.string().required('City is a required field'),
    state: yup.string().required('State is a required field'),
    phone: yup
      .string()
      .required('Phone Number is a required field')
      .min(11, 'Phone number must be 11 characters'),
    email: yup
      .string()
      .required('Email is a required field')
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Invalid Email',
      ),
  });

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
          validationSchema={reviewSchema}
          onSubmit={(values, {resetForm}) => {
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
                    style={
                      propss.errors.password && propss.touched.password
                        ? [styles.errorInput]
                        : [styles.input]
                    }
                    onChangeText={propss.handleChange('password')}
                    value={propss.values.password}
                    onBlur={propss.handleBlur('password')}
                    type="password"
                    secureTextEntry={true}
                    autoCompleteType="password"
                  />
                  <View>
                    <Text style={{color: 'red'}}>
                      {propss.errors.password && propss.touched.password
                        ? propss.errors.password
                        : ''}
                    </Text>
                  </View>
                </View>
                <View style={{marginBottom: 7}}>
                  <TextInput
                    style={
                      propss.errors.number && propss.touched.number
                        ? [styles.errorInput]
                        : [styles.input]
                    }
                    onChangeText={propss.handleChange('number')}
                    value={propss.values.number}
                    onBlur={propss.handleBlur('number')}
                  />
                  <View>
                    <Text style={{color: 'red'}}>
                      {propss.errors.number && propss.touched.number
                        ? propss.errors.number
                        : ''}
                    </Text>
                  </View>
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
          }}
          validationSchema={reviewSchema1}
          onSubmit={(values, {resetForm}) => {
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
                      style={
                        propss.errors.firstName && propss.touched.firstName
                          ? [styles.errorInput, {width: '48%'}]
                          : [styles.input, {width: '48%'}]
                      }
                      onChangeText={propss.handleChange('firstName')}
                      value={propss.values.firstName}
                      onBlur={propss.handleBlur('firstName')}
                    />
                    <TextInput
                      style={
                        propss.errors.lastName && propss.touched.lastName
                          ? [styles.errorInput, {width: '48%'}]
                          : [styles.input, {width: '48%'}]
                      }
                      onChangeText={propss.handleChange('lastName')}
                      value={propss.values.lastName}
                      onBlur={propss.handleBlur('lastName')}
                    />
                  </View>
                  <View>
                    <Text style={{color: 'red'}}>
                      {(propss.errors.firstName && propss.touched.firstName) ||
                      (propss.errors.lastName && propss.touched.lastName)
                        ? propss.errors.firstName
                        : ''}
                    </Text>
                  </View>
                </View>
                <View style={{marginBottom: 7}}>
                  <TextInput
                    style={
                      propss.errors.country && propss.touched.country
                        ? styles.errorInput
                        : styles.input
                    }
                    onChangeText={propss.handleChange('country')}
                    value={propss.values.country}
                    onBlur={propss.handleBlur('country')}
                  />
                  <View>
                    <Text style={{color: 'red'}}>
                      {propss.errors.country && propss.touched.country
                        ? propss.errors.country
                        : ''}
                    </Text>
                  </View>
                </View>
                <View style={{marginBottom: 7}}>
                  <TextInput
                    multiline
                    style={
                      propss.errors.country && propss.touched.country
                        ? [styles.errorInput, {height: 80}]
                        : [styles.input, {height: 80}]
                    }
                    onChangeText={propss.handleChange('address')}
                    value={propss.values.address}
                    onBlur={propss.handleBlur('address')}
                  />
                  <View>
                    <Text style={{color: 'red'}}>
                      {propss.errors.address && propss.touched.address
                        ? propss.errors.address
                        : ''}
                    </Text>
                  </View>
                </View>
                <View style={{marginBottom: 7}}>
                  <TextInput
                    style={
                      propss.errors.city && propss.touched.city
                        ? styles.errorInput
                        : styles.input
                    }
                    onChangeText={propss.handleChange('city')}
                    value={propss.values.city}
                    onBlur={propss.handleBlur('city')}
                  />
                  <View>
                    <Text style={{color: 'red'}}>
                      {propss.errors.city && propss.touched.city
                        ? propss.errors.city
                        : ''}
                    </Text>
                  </View>
                </View>
                <View style={{marginBottom: 7}}>
                  <TextInput
                    style={
                      propss.errors.state && propss.touched.state
                        ? styles.errorInput
                        : styles.input
                    }
                    onChangeText={propss.handleChange('state')}
                    value={propss.values.state}
                    onBlur={propss.handleBlur('state')}
                  />
                  <View>
                    <Text style={{color: 'red'}}>
                      {propss.errors.state && propss.touched.state
                        ? propss.errors.state
                        : ''}
                    </Text>
                  </View>
                </View>
                <View style={{marginBottom: 7}}>
                  <TextInput
                    style={
                      propss.errors.phone && propss.touched.phone
                        ? styles.errorInput
                        : styles.input
                    }
                    onChangeText={propss.handleChange('phone')}
                    value={propss.values.phone}
                    onBlur={propss.handleBlur('phone')}
                    keyboardType="numeric"
                  />
                  <View>
                    <Text style={{color: 'red'}}>
                      {propss.errors.phone && propss.touched.phone
                        ? propss.errors.phone
                        : ''}
                    </Text>
                  </View>
                </View>
                <View style={{marginBottom: 7}}>
                  <TextInput
                    style={
                      propss.errors.email && propss.touched.email
                        ? styles.errorInput
                        : styles.input
                    }
                    onChangeText={propss.handleChange('email')}
                    value={propss.values.email}
                    onBlur={propss.handleBlur('email')}
                  />
                  <View>
                    <Text style={{color: 'red'}}>
                      {propss.errors.email && propss.touched.email
                        ? propss.errors.email
                        : ''}
                    </Text>
                  </View>
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
  box: {
    backgroundColor: Colors.LightYellow,
    borderRadius: 8,
    padding: 10,
    margin: 10,
  },
  errorInput: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    // marginBottom: 35,
    backgroundColor: '#FEF8FF',
    // width: 302,
    padding: 10,
    color: 'black',
    // paddingVertical: 0,
    fontSize: 16,
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
