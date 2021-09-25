import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DrawerContent from '../screens/DrawerContent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeScreen from '../screens/Home';
import ContactUs from '../screens/ContactUs';
import Account from '../screens/Account';
import * as Colors from '../assets/Colors/index';
import Shop from '../screens/Shop';
import ProductDetail from '../screens/ProductDetail';
import Cart from '../screens/Cart';
import {connect} from 'react-redux';
// import Icon from 'react-native-vector-icons';

const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppStack = props => {
  const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.Yellow,
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={MainBottomTabStack}
        options={{
          title: 'Baseus Pakistan',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Ionicons.Button
              name="menu"
              size={30}
              backgroundColor={Colors.Yellow}
              color={'black'}
              onPress={() => navigation.openDrawer()}></Ionicons.Button>
          ),
          headerRight: () => (
            <View>
              <FontAwesome.Button
                name="shopping-bag"
                backgroundColor={Colors.Yellow}
                size={25}
                color={'black'}
                onPress={() => navigation.navigate('Cart')}
              />
                <Text
                  style={{
                    color: 'black',
                    position: 'absolute',
                    // left: 0,
                    right: 12,
                    top: 0,
                    bottom: 0,
                    fontWeight:'bold',
                    fontSize:15
                  }}>
                  {props.cartItems.length}
                </Text>
            </View>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
  const MainBottomTabStack = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'black',
          activeBackgroundColor: Colors.Yellow,
          inactiveBackgroundColor: Colors.Yellow,
        }}>
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons
                name="home"
                color={focused ? '#000000' : Colors.Olive}
                size={26}
              />
            ),
          }}
          component={HomeStackScreens}
        />
        <Tab.Screen
          name="Shop"
          component={ShopStackScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialIcons
                name="shopping-cart"
                color={focused ? '#000000' : Colors.Olive}
                size={28}
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
                color={focused ? '#000000' : Colors.Olive}
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
              <FontAwesome5
                name="user-alt"
                color={focused ? '#000000' : Colors.Olive}
                size={20}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  
  const ShopStackScreen = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    );
  };
  
  const HomeStackScreens = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    );
  };
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Baseus Pakistan" component={HomeStackScreen} />
    </Drawer.Navigator>
  );
};



const styles = StyleSheet.create({
  shadow: {
    shadowColor: Colors.SoftBlue,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

const mapStateToProps = state => ({
  // user: state.userDetails.user,
  cartItems: state.cart.cart,
  cartTotal: state.cart.total,
  order: state.order,
  // token: state.userDetails.token,
});

export default connect(mapStateToProps)(AppStack);
