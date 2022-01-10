import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as Colors from '../assets/Colors/index';
import {Formik} from 'formik';
import * as yup from 'yup';
import {connect} from 'react-redux';
import axios from 'axios';
import {signin, signinValidate} from '../redux/appActions';
import Toast from 'react-native-toast-message';

const ForgotPassword = props => {
  const [state, setState] = useState(true);

  const reviewSchema = yup.object({
    email: yup
      .string()
      .required('Email is a required field')
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Invalid Email',
      ),
  });

  const reviewSchema1 = yup.object({
    email: yup
      .string()
      .required('Email is a required field')
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Invalid Email',
      ),
    code: yup
      .string()
      .required('Code is required')
      .min(4, 'Only 4 digit code is allowed')
      .max(4, 'Only 4 digit code is allowed'),
    password: yup
      .string()
      .required('Password is a required field')
      .min(8, 'Password must be atleast 8 characters'),
  });

  const sendCode = async email => {
    console.log('email', email);
    const url = 'https://baseus.com.pk/wp-json/bdpwr/v1/reset-password';
    try {
      let response = await axios.post(url, {email});
      console.log('response in sendCode', response.data.message);
      Toast.show({
        type: 'success',
        text1: 'Successful',
        text2: response.data.message,
        position: 'top',
      });
      setState(false);
      return response;
    } catch (error) {
      console.log('error sendCode', error.response.data.message);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error.response.data.message,
        position: 'top',
      });
    }
  };

  const resetPassword = async (email, code, password) => {
    console.log('email', email, code, password);
    const url = 'https://baseus.com.pk/wp-json/bdpwr/v1/set-password';
    try {
      let response = await axios.post(url, {email, code, password});
      console.log('response in sendCode', response.data.message);
      Toast.show({
        type: 'success',
        text1: 'Successful',
        text2: response.data.message,
        position: 'top',
      });
      props.navigation.navigate('Home');
      return response;
    } catch (error) {
      console.log('error sendCode', error.response.data.message);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error.response.data.message,
        position: 'top',
      });
    }
  };

  return (
    <ScrollView>
      {state ? (
        <View>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Lost your password? Please enter your email address. You will
              receive a code on your email.
            </Text>
            <Formik
              initialValues={{email: ''}}
              validationSchema={reviewSchema}
              onSubmit={(values, actions) => {
                sendCode(values.email);
              }}>
              {propss => (
                <View>
                  <View
                    style={{
                      flexDirection: 'column',
                      alignContent: 'space-around',
                    }}>
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
                    style={styles.button}
                    onPress={propss.handleSubmit}>
                    <Text style={styles.textStyle}>SEND CODE</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>

            <TouchableOpacity
              style={styles.button}
              onPress={() => props.navigation.goBack()}>
              <Text style={styles.textStyle}>Back to Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Please enter the 4 digit code that you have recieved on your email
              with the new password.
            </Text>
            <Formik
              initialValues={{email: '', code: '', password: ''}}
              validationSchema={reviewSchema1}
              onSubmit={(values, actions) => {
                resetPassword(values.email, values.code, values.password);
              }}>
              {propss => (
                <View>
                  <View
                    style={{
                      flexDirection: 'column',
                      alignContent: 'space-around',
                    }}>
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
                    <View style={{marginBottom: 7}}>
                      <TextInput
                        style={
                          propss.errors.code && propss.touched.code
                            ? styles.errorInput
                            : styles.input
                        }
                        onChangeText={propss.handleChange('code')}
                        value={propss.values.code}
                        onBlur={propss.handleBlur('code')}
                        keyboardType="numeric"
                      />
                      <View>
                        <Text style={{color: 'red'}}>
                          {propss.errors.code && propss.touched.code
                            ? propss.errors.code
                            : ''}
                        </Text>
                      </View>
                    </View>
                    <View style={{marginBottom: 7}}>
                      <TextInput
                        style={
                          propss.errors.password && propss.touched.password
                            ? styles.errorInput
                            : styles.input
                        }
                        onChangeText={propss.handleChange('password')}
                        value={propss.values.password}
                        onBlur={propss.handleBlur('password')}
                        type="password"
                        secureTextEntry={true}
                        autoCompleteType="password"
                      />
                      <View>
                        <Text
                          style={{
                            color: 'red',
                          }}>
                          {propss.errors.password && propss.touched.password
                            ? propss.errors.password
                            : ''}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={propss.handleSubmit}>
                    <Text style={styles.textStyle}>Update Password</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>

            <TouchableOpacity
              style={styles.button}
              onPress={() => props.navigation.goBack()}>
              <Text style={styles.textStyle}>Back to Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'transparent',
    borderColor: '#ececec',
    borderWidth: 1,
    borderRadius: 8,
    color: 'black',
  },
  errorInput: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FEF8FF',
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: Colors.Yellow,
    textAlign: 'center',
    borderRadius: 12,
    fontStyle: 'italic',
    padding: 10,
    marginVertical: 10,
  },
  btnContainer: {
    width: '100%',
  },
  forgotText: {
    color: Colors.Olive,
    letterSpacing: 1,
  },
  box: {
    borderWidth: 1,
    borderColor: '#ececec',
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
  },

  modalView: {
    // flex:1,
    padding: 35,
    // paddingVertical: 250,
    // alignItems: 'center',
  },
  // button: {
  //   borderRadius: 20,
  //   padding: 10,
  //   elevation: 2
  // },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    // color: "white",
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize: 25,
    textAlign: 'center',
  },
  Modalinput: {
    // width: 300,
    color: 'black',
    borderRadius: 12,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default ForgotPassword;
