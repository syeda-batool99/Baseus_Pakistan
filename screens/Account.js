import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import * as Colors from '../assets/Colors/index';
import {Formik} from 'formik';
import * as yup from 'yup';
import UserAccount from './UserAccount';
import GuestAccount from './GuestAccount';

const Account = props => {
 
  const [login, setLogin] = useState(false);

  const handleSubmit = () => {
    props.navigation.navigate('Home');
    setLogin(true);
  };

  return (
    <ScrollView style={styles.background}>
      <Text style={styles.heading}>My Account</Text>
      {login ? (
        <View>
          <UserAccount/>
        </View>
      ) : (
        <GuestAccount handleSubmit={handleSubmit}/>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.VeryDarkGray,
    flex: 1,
    paddingHorizontal: 15,
  },
  heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  
});

export default Account;
