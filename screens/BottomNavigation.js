import React from 'react';
import HomeScreen from './Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import ShopScreen from './Shop';
import ContactUs from './ContactUs';
import Account from './Account';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#fff000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default function bottomNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: true,
        style: {
          position: 'absolute',
          elevation: 0,
          border: 4,
          height: 55,
          backgroundColor: '#FFF000',

          // borderColor: '#000000',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,

          // backgroundColor: 'red',
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="home"
              color={focused ? '#000000' : '#FFF000'}
              size={26}
            />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="shopping-cart"
              color={focused ? '#000000' : '#FFF000'}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactUs}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="call"
              color={focused ? '#000000' : '#FFF000'}
              size={27}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome5Icon
              name="users"
              color={focused ? '#000000' : '#FFF000'}
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
