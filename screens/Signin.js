import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import * as Colors from '../assets/Colors/index';
import {Formik} from 'formik';
import * as yup from 'yup';
import {connect} from 'react-redux';
import axios from 'axios';
import {signin, signinValidate} from '../redux/appActions';

const Signin = props => {
  const [modalVisible, setModalVisible] = useState(false);
  // const login = body => {
  //   console.log('in login');
  //   const url = 'https://baseus.com.pk/wp-json/jwt-auth/v1/token';
  //   axios
  //     .post(url, body)
  //     .then(response => {
  //       console.log('in signin got response', response.data);
  //       // let token = response?.data?.data?.token;
  //       // console.log('token', token);
  //       // props.GetUser(response.data.id);
  //     })
  //     .catch(error => {
  //       Alert.alert('Signin Error', error.response.data.message);
  //     });
  // };
  return (
    <ScrollView>
      <Modal
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
              onSubmit={(values, actions) => {
                // console.log(values);
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
                        style={styles.Modalinput}
                        placeholder=" Email"
                        placeholderTextColor={'black'}
                        onChangeText={propss.handleChange('email')}
                        value={propss.values.email}
                        onBlur={propss.handleBlur('email')}
                      />
                    </View>
                  </View>
                </View>
              )}
            </Formik>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>RESET PASSWORD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
                      placeholder=" Email/Username"
                      placeholderTextColor={Colors.LightGray}
                      onChangeText={propss.handleChange('username')}
                      value={propss.values.username}
                      onBlur={propss.handleBlur('username')}
                    />
                  </View>
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
                </View>
                <View>
                  <TouchableOpacity
                    onPress={propss.handleSubmit}
                    style={styles.btnContainer}>
                    <Text style={styles.button}>LOG IN</Text>
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
                  <TouchableOpacity onPress={() => setModalVisible(true)}>
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
    SignIn: body => dispatch(signin(body)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signin);
