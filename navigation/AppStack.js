import React from 'react';
import {StyleSheet, View} from 'react-native';
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
import ShopScreen  from '../screens/Shop';
import ContactUs from '../screens/ContactUs';
import Account from '../screens/Account';
// import Icon from 'react-native-vector-icons';

const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const AppStack = (myProps) => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Baseus Pakistan" component={HomeStackScreen} />
    </Drawer.Navigator>
  );
};

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fff000',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={MainBottomTabStack}
      options={{
        title: 'Baseus Pakistan',
        headerTitleAlign:'center',
        headerLeft: () => (
          <Ionicons.Button
            name="menu"
            size={30}
            backgroundColor="#fff000"
            color={'black'}
            onPress={() => navigation.openDrawer()}></Ionicons.Button>
        ),
        headerRight: () => (
          <FontAwesome.Button 
                    name='shopping-bag'
                    backgroundColor="#fff000"
                    size={25}
                    color={'black'}
                />
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
        activeBackgroundColor: '#FFF000',
        inactiveBackgroundColor: '#FFF000',
       }}
      >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="home"
              color={focused ? '#000000' : '#52551C'}
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
            <MaterialIcons
              name="shopping-cart"
              color={focused ? '#000000' : '#52551C'}
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
              color={focused ? '#000000' : '#52551C'}
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
              color={focused ? '#000000' : '#52551C'}
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// const HomeStackScreen = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="AllServices" component={AllServices} />
//       <Stack.Screen name="ServiceSeller" component={ServiceSeller} />
//       <Stack.Screen name="Availablejobs" component={Availablejobs} />
//       <Stack.Screen name="ViewJobDetails" component={ViewJobDetails} />
//       <Stack.Screen name="SendBid" component={SendBid} />
//       <Stack.Screen name="ServiceJobs" component={ServiceJobs} />
//     </Stack.Navigator>
//   );
// };
// const ChatStackScreen = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <Stack.Screen name="Messaging" component={Messaging} />
//     </Stack.Navigator>
//   );
// };
// const AvailableJobsStackScreen = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <Stack.Screen name="Availablejobs" component={Availablejobs} />
//       <Stack.Screen name="JobDetails" component={JobDetails} />
//       <Stack.Screen name="SendBid" component={SendBid} />
//     </Stack.Navigator>
//   );
// };
// const SellerOffers = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <Stack.Screen name="Offers" component={Offers} />
//       <Stack.Screen name="ViewOfferDetails" component={ViewOfferDetails} />
//     </Stack.Navigator>
//   );
// };
// const ProfileStackScreen = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Jobs" component={Jobs} />
//       <Stack.Screen name="JobDetails" component={JobDetails} />
//       <Stack.Screen name="AllBids" component={AllBids} />
//     </Stack.Navigator>
//   );
// };

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5Df0',
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