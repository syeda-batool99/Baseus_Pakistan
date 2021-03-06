import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, Image, Linking} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  Switch,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
// import {logout} from '../../redux/authActions';
// import {connect} from 'react-redux';
import * as Colors from '../assets/Colors/index';
import {connect} from 'react-redux';
import {logout} from '../redux/appActions';
import AboutUs from '../screens/AboutUs';

const DrawerContent = props => {
  return (
    <View style={{flex: 1}}>
      {/* {console.log('Props in drawer', props)} */}
      <DrawerContentScrollView>
        {/* {console.log('Props in drawer2', props)} */}
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{marginTop: 70}}>
              <Image
                source={require('../assets/Images/base_us_logo.png')}
                style={{
                  width: 140,
                  height: 130,
                  borderRadius: 58,
                  borderWidth: 5,
                  marginBottom: 10,
                  backgroundColor: 'black',
                }}
              />
              {props.loggedIn ? (
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  Welcome{' '}
                  {props.user.username
                    ? props.user.username
                    : props.user.user_display_name}
                </Text>
              ) : (
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  Baseus Pakistan
                </Text>
              )}
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color}) => (
                <MaterialCommunityIcons name="home" color={color} size={35} />
              )}
              label="Home"
              labelStyle={{fontSize: 17, fontWeight: 'bold'}}
              onPress={() =>
                props.navigation.navigate('Home', {
                  // ...props.route.params,
                })
              }
            />

            <DrawerItem
              icon={({color}) => (
                <MaterialCommunityIcons name="cart" color={color} size={31} />
              )}
              label="Shop"
              labelStyle={{fontSize: 17, fontWeight: 'bold'}}
              onPress={() =>
                props.navigation.navigate('Shop', {
                  // ...props.route.params,
                })
              }
            />
            <DrawerItem
              icon={({color}) => (
                <FontAwesome name="shopping-bag" color={color} size={30} />
              )}
              label="Cart"
              labelStyle={{fontSize: 17, fontWeight: 'bold'}}
              onPress={() =>
                props.navigation.navigate('Cart', {
                  // ...props.route.params,
                })
              }
            />
            <DrawerItem
              icon={({color}) => (
                <FontAwesome5 name="info-circle" color={color} size={32} />
              )}
              label="About Us"
              labelStyle={{fontSize: 17, fontWeight: 'bold'}}
              onPress={() => {
                props.navigation.navigate('AboutUs');
              }}
            />
            <DrawerItem
              icon={({color}) => (
                <MaterialIcons name="call" color={color} size={33} />
              )}
              label="Contact Us"
              labelStyle={{fontSize: 17, fontWeight: 'bold'}}
              onPress={() =>
                props.navigation.navigate('Contact', {
                  // ...props.route.params,
                })
              }
            />
            {props.user ? (
              <DrawerItem
                icon={({color}) => (
                  <MaterialCommunityIcons
                    name="account"
                    color={color}
                    size={33}
                  />
                )}
                label="Logout"
                labelStyle={{fontSize: 17, fontWeight: 'bold'}}
                onPress={() => props.signout()}
              />
            ) : (
              <DrawerItem
                icon={({color}) => (
                  <MaterialCommunityIcons
                    name="account"
                    color={color}
                    size={33}
                  />
                )}
                label="Signin/Signup"
                labelStyle={{fontSize: 17, fontWeight: 'bold'}}
                onPress={() =>
                  props.navigation.navigate('Account', {
                    // ...props.route.params,
                  })
                }
              />
            )}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    fontWeight: '700',
  },
  userInfoSection: {
    alignItems: 'center',
  },
  logout: {
    marginTop: 100,
    // justifyContent:'flex-end'
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    // lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 25,
    fontWeight: 'bold',
    paddingLeft: 15,
  },
  bottomDrawerSection: {
    borderWidth: 0,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  buyer: {
    textAlign: 'center',
    paddingTop: 15,
    fontSize: 25,
    fontWeight: '700',
    paddingBottom: 40,
  },
});

const mapStateToProps = state => ({
  user: state.userDetails.user,
  loggedIn: state.userDetails.isloggedIn,
});

const mapDispatchToProps = dispatch => {
  return {
    signout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
