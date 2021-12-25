/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
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
import {emptyCart} from '../redux/appActions';
import {Formik} from 'formik';
import Toast from 'react-native-toast-message';
import * as yup from 'yup';
import RNSmtpMailer from 'react-native-smtp-mailer';

const Checkout = props => {
  // const handleSubmit = values => {
  //   signupFunction(
  //     Object.assign({isActivated: true}, values, props.route.params),
  //   );
  // };
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Order Completed',
      text2: 'Thankyou for your order',
      position: 'top',
    });
  };

  const sendMailToUser = (firstName, lastName, email) => {
    RNSmtpMailer.sendMail({
      mailhost: 'smtp.gmail.com',
      port: '465',
      ssl: true, // optional. if false, then TLS is enabled. Its true by default in android. In iOS TLS/SSL is determined automatically, and this field doesn't affect anything
      username: 'baseusorders@gmail.com',
      password: 'b@seus123',
      // fromName: 'Baseus Pakistan', // optional
      recipients: email,
      subject: 'Order Received',
      htmlBody: `<h1>Hello ${firstName} ${lastName}, </h1> <h2> Thankyou for your order </h2>`,
      attachmentNames: [
        'image.jpg',
        'firstFile.txt',
        'secondFile.csv',
        'pdfFile.pdf',
        'zipExample.zip',
        'pngImage.png',
      ], // required in android, these are renames of original files. in ios filenames will be same as specified in path. In a ios-only application, no need to define it
    })
      .then(success => console.log(success))
      .catch(err => console.log('Error in sendmail', err));
  };

  const sendMailToAdmin = (
    firstName,
    lastName,
    address,
    city,
    country,
    phone,
    state,
  ) => {
    RNSmtpMailer.sendMail({
      mailhost: 'smtp.gmail.com',
      port: '465',
      ssl: true, // optional. if false, then TLS is enabled. Its true by default in android. In iOS TLS/SSL is determined automatically, and this field doesn't affect anything
      username: 'baseusorders@gmail.com',
      password: 'b@seus123',
      // fromName: 'Baseus Pakistan', // optional
      recipients: 'orders@baseus.com.pk',
      subject: 'New customer Order',
      htmlBody: `<h1>You have received an order from ${firstName} ${lastName} </h1> <p> Address is: ${address}, ${city}, ${state}, ${country}. </p> <p> Contact Number: ${phone} </p>`,
      attachmentNames: [
        'image.jpg',
        'firstFile.txt',
        'secondFile.csv',
        'pdfFile.pdf',
        'zipExample.zip',
        'pngImage.png',
      ], // required in android, these are renames of original files. in ios filenames will be same as specified in path. In a ios-only application, no need to define it
    })
      .then(success => console.log(success))
      .catch(err => console.log('Error in sendmail', err));
  };
  const reviewSchema = yup.object({
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
            PaymentMethodTitle: 'Cash on Delivery',
            lineItems: [],
          }}
          validationSchema={reviewSchema}
          onSubmit={(values, {resetForm}) => {
            props.EmptyCart();
            showToast();
            resetForm({});
            sendMailToUser(values.firstName, values.lastName, values.email);
            sendMailToAdmin(
              values.firstName,
              values.lastName,
              values.address,
              values.city,
              values.country,
              values.phone,
              values.state,
            );
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
                      placeholder=" First Name"
                      placeholderTextColor={Colors.LightGray}
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
                      placeholder=" Last Name"
                      placeholderTextColor={Colors.LightGray}
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
                    placeholder=" Country"
                    placeholderTextColor={Colors.LightGray}
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
                    placeholder=" House number, Apartment, street name"
                    placeholderTextColor={Colors.LightGray}
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
                    placeholder=" City"
                    placeholderTextColor={Colors.LightGray}
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
                    placeholder=" State"
                    placeholderTextColor={Colors.LightGray}
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
                    placeholder=" Phone"
                    placeholderTextColor={Colors.LightGray}
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
                    placeholder=" Email Address"
                    placeholderTextColor={Colors.LightGray}
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
    paddingVertical: 10,
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

const mapDispatchToProps = dispatch => {
  return {
    EmptyCart: () => dispatch(emptyCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
