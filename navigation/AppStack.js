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
import ShoppingcartItem from '../screens/ShoppingcartItem';
import Checkout from '../screens/Checkout';
import Register from '../screens/Register';
import Signin from '../screens/Signin';
import UserAccount from '../screens/UserAccount';
import WhatsApp from '../screens/Whatsapp';
// import Icon from 'react-native-vector-icons';
import {Linking} from 'react-native';
// import Wallet from '../screens/Wallet';
// import MyWallet from '../screens/MyWallet';
import Wishlist from '../screens/Wishlist';
import AboutUs from '../screens/AboutUs';

const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const openWhatsApp = () => {
  let url = 'whatsapp://send?text=&phone=923207862032';
  Linking.openURL(url)
    .then(data => {
      console.log('WhatsApp Opened successfully ' + data);
    })
    .catch(() => {
      alert('Make sure WhatsApp installed on your device');
    });
};

const AppStack = props => {
  console.log('props in appStack', props);

  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Baseus Pakistan" component={HomeStackScreen} />
    </Drawer.Navigator>
  );
};

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
        headerRight: () => <ShoppingcartItem navigation={navigation} />,
      }}
    />
  </HomeStack.Navigator>
);
const MainBottomTabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        tabBarActiveBackgroundColor: '#fff000',
        tabBarInactiveBackgroundColor: '#fff000',
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
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
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="heart"
              color={focused ? '#000000' : Colors.Olive}
              size={27}
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
        component={AccountStack}
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
      <Tab.Screen
        name="Whatsapp"
        component={WhatsApp}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome5
              name="whatsapp-square"
              color={focused ? '#25D366' : '#25D366'}
              size={30}
              onPress={openWhatsApp}
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
      <Stack.Screen name="Checkout" component={Checkout} />
      {/* <Stack.Screen name="MyWallet" component={MyWallet} /> */}
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
    </Stack.Navigator>
  );
};

const AccountStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="UserAccount" component={UserAccount} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
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
      <Stack.Screen name="Checkout" component={Checkout} />
      {/* <Stack.Screen name="MyWallet" component={MyWallet} /> */}
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
    </Stack.Navigator>
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

export default AppStack;
