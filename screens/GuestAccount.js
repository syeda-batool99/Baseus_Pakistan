import React , {useState} from 'react';
import {StyleSheet, View, Modal, Text, TextInput, TouchableOpacity} from 'react-native';
import * as Colors from '../assets/Colors/index';
import {Formik} from 'formik';
import * as yup from 'yup';

const GuestAccount = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <View>
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
            <Text style={{color: 'white', fontSize: 22, marginHorizontal: 20}}>
              Login
            </Text>
            <View style={{margin: 15}}>
              <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={(values, actions) => {
                  console.log(values);
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
                          placeholder=" Email"
                          placeholderTextColor={Colors.LightGray}
                          onChangeText={propss.handleChange('email')}
                          value={propss.values.email}
                          onBlur={propss.handleBlur('email')}
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
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 10,
                      }}>
                      <TouchableOpacity
                        onPress={props.handleSubmit}
                        style={styles.btnContainer}>
                        <Text style={styles.button}>LOG IN</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Text style={styles.forgotText}>Forgot Password?</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </Formik>
            </View>
          </View>
          <View style={styles.box}>
            <Text style={{color: 'white', fontSize: 22, marginHorizontal: 20}}>
              Register
            </Text>
            <View style={{margin: 15}}>
              <Formik
                initialValues={{email: '', password: '', number: ''}}
                onSubmit={(values, actions) => {
                  console.log(values);
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
                          placeholder=" Email"
                          placeholderTextColor={Colors.LightGray}
                          onChangeText={propss.handleChange('email')}
                          value={propss.values.email}
                          onBlur={propss.handleBlur('email')}
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
                    <View style={{marginTop: 10}}>
                      <TouchableOpacity
                        onPress={props.handleSubmit}
                        style={styles.btnContainer}>
                        <Text style={styles.button}>REGISTER</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </Formik>
            </View>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'transparent',
        borderColor: '#ececec',
        borderWidth: 1,
        borderRadius: 8,
        color: 'white',
      },
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
      forgotText: {
        color: Colors.Yellow,
        padding: 10,
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

})

export default GuestAccount;