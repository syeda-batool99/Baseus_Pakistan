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
import {signup} from '../redux/appActions';

const Register = props => {
  const handleSubmit = values => {
    signupFunction(
      Object.assign({isActivated: true}, values, props.route.params),
    );
  };

  const signupFunction = async body => {
    try {
      // await props.setLoading(true);
      //   setButtonLoading(true);
      const result = await props.signup(body);
      //   setButtonLoading(false);
      if (result.error) {
        console.log('result.error', result.error);
      }
    } catch (error) {
      console.log('error d: ', error);
    }
  };

  const reviewSchema = yup.object({
    email: yup
      .string()
      .required('Email is a required field')
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Invalid Email',
      ),
    password: yup
      .string()
      .required('Password is a required field')
      .min(8, 'Password must be atleast 8 characters'),
    passwordConfirmation: yup
      .string()
      .required('Confirm password is a required field')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });
  return (
    <ScrollView style={{paddingHorizontal: 15}}>
      <Text style={styles.heading}>Welcome to Baseus Pakistan</Text>
      <View style={styles.box}>
        <Text style={{fontSize: 22, marginHorizontal: 20}}>Register</Text>
        <View style={{margin: 15}}>
          <Formik
            initialValues={{email: '', password: '', passwordConfirmation: ''}}
            validationSchema={reviewSchema}
            onSubmit={(values, actions) => {
              handleSubmit({
                email: values.email.toLowerCase(),
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
                      style={
                        propss.errors.email && propss.touched.email
                          ? styles.errorInput
                          : styles.input
                      }
                      placeholder=" Email"
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
                      style={
                        propss.errors.password && propss.touched.password
                          ? styles.errorInput
                          : styles.input
                      }
                      placeholder=" Password"
                      placeholderTextColor={Colors.LightGray}
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
                  <View style={{marginBottom: 7}}>
                    <View>
                      <TextInput
                        style={
                          propss.errors.passwordConfirmation &&
                          propss.touched.passwordConfirmation
                            ? styles.errorInput
                            : styles.input
                        }
                        secureTextEntry={true}
                        placeholder=" Confirm Password"
                        autoCompleteType="password"
                        onChangeText={propss.handleChange(
                          'passwordConfirmation',
                        )}
                        value={propss.values.passwordConfirmation}
                        onBlur={propss.handleBlur('passwordConfirmation')}
                      />
                      {/* {propss.errors.passwordConfirmation &&
                        propss.touched.passwordConfirmation ? ( */}
                      <View>
                        <Text
                          style={{
                            color: 'red',
                          }}>
                          {propss.errors.passwordConfirmation &&
                          propss.touched.passwordConfirmation
                            ? propss.errors.passwordConfirmation
                            : ''}
                        </Text>
                        {/* ) : null} */}
                      </View>
                    </View>
                  </View>
                </View>
                <View>
                  <Text style={styles.notice}>
                    Disclamer: Your personal data will be used to support your
                    experience throughout this website.
                  </Text>
                  <TouchableOpacity
                    onPress={propss.handleSubmit}
                    style={styles.btnContainer}>
                    <Text style={styles.button}>REGISTER</Text>
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
    // marginBottom: 35,
    backgroundColor: '#FEF8FF',
    // width: 302,
    padding: 10,
    color: 'black',
    // paddingVertical: 0,
    fontSize: 16,
  },
  notice: {
    color: Colors.LightGray,
    letterSpacing: 1,
    marginVertical: 10,
  },
  heading: {
    // color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 30,
  },
  button: {
    backgroundColor: Colors.Yellow,
    textAlign: 'center',
    borderRadius: 12,
    fontStyle: 'italic',
    padding: 10,
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
    signup: body => dispatch(signup(body)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
