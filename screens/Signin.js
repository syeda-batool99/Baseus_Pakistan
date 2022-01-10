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

const Signin = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState({responseCode: 200, message: ''});
  const reviewSchema = yup.object({
    email: yup
      .string()
      .required('Email is a required field')
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Invalid Email',
      ),
  });

  // const sendCode = async email => {
  //   console.log('email', email);
  //   const url = 'https://baseus.com.pk/wp-json/bdpwr/v1/reset-password';
  //   try {
  //     let response = await axios.post(url, {email});
  //     console.log('response in sendCode', response.data.message);
  //     Toast.show({
  //       type: 'success',
  //       text1: 'Successful',
  //       text2: 'A Code has been sent to your email',
  //       position: 'top',
  //     });
  //     return response;
  //   } catch (error) {
  //     console.log('error sendCode', error.message);
  //   }
  // };

  return (
    <ScrollView>
      {/* <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Lost your password? Please enter your email address. You will
              receive a link to create a new password via email.
            </Text>
            <Formik
              initialValues={{email: ''}}
              validationSchema={reviewSchema}
              onSubmit={(values, actions) => {
                sendCode(values.email);
                setModalVisible(!modalVisible);
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
                          error.responseCode == 404 ||
                          (propss.errors.email && propss.touched.email)
                            ? styles.errorInput
                            : styles.input
                        }
                        onChangeText={propss.handleChange('email')}
                        value={propss.values.email}
                        onBlur={propss.handleBlur('email')}
                      />
                      <View>
                        <Text style={{color: 'red'}}>
                          {error.responseCode == 404
                            ? 'Email not found'
                            : propss.errors.email && propss.touched.email
                            ? propss.errors.email
                            : ''}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={propss.handleSubmit}>
                    <Text style={styles.textStyle}>RESET PASSWORD</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>

            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Back to Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
      <View style={styles.box}>
        <Text style={{fontSize: 22, marginHorizontal: 20}}>Login</Text>
        <View style={{margin: 15}}>
          <Formik
            initialValues={{username: '', password: ''}}
            onSubmit={(values, actions) => {
              console.log('in handleSubmit', values);
              props.SignIn({
                username: values.username,
                password: values.password,
              });
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
                      style={styles.input}
                      onChangeText={propss.handleChange('username')}
                      value={propss.values.username}
                      onBlur={propss.handleBlur('username')}
                    />
                  </View>
                  <View style={{marginBottom: 7}}>
                    <TextInput
                      style={styles.input}
                      value={propss.values.password}
                      onBlur={propss.handleBlur('password')}
                      type="password"
                      secureTextEntry={true}
                      autoCompleteType="password"
                    />
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={propss.handleSubmit}
                    style={styles.btnContainer}>
                    <Text style={styles.button}>LOGIN</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    marginTop: 20,
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      props.MainProps.navigation.navigate('Register')
                    }>
                    <Text style={styles.forgotText}>Create Account</Text>
                  </TouchableOpacity>
                  <Text style={{paddingHorizontal: 10}}> | </Text>
                  <TouchableOpacity
                    onPress={() =>
                      props.MainProps.navigation.navigate('ForgotPassword')
                    }>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
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
    paddingVertical: 250,
    alignItems: 'center',
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
    width: 300,
    color: 'black',
    borderRadius: 12,
    borderColor: 'black',
    borderWidth: 1,
  },
});

const mapStateToProps = state => ({
  user: state.userDetails.user,
});
const mapDispatchToProps = dispatch => {
  return {
    SignIn: body => dispatch(signin(body)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signin);
