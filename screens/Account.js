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
import Signin from './Signin';
import {connect} from 'react-redux';
import {logout} from '../redux/appActions';

const Account = props => {
  return (
    <ScrollView style={styles.background}>
      {props.user ? (
        <View>
          <UserAccount user={props.user} />
        </View>
      ) : (
        <View style={{marginVertical: 10}}>
          <Text style={styles.heading}>Welcome to Baseus Pakistan</Text>
          <Signin MainProps={props} />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.White,
    flex: 1,
    paddingHorizontal: 15,
  },
  heading: {
    // color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 30,
  },
});

const mapStateToProps = state => ({
  user: state.userDetails.user,
});

const mapDispatchToProps = dispatch => {
  return {
    signout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
