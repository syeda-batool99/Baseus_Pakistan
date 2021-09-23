import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  FlatList,
  ImageBackground,
  ScrollView,
  Button
} from 'react-native';
import Header from '../shared/Header';
import {SliderBox} from 'react-native-image-slider-box';
import * as Colors from '../assets/Colors/index';



const Home = (props) => {
  const images = {
    images: [
      require('../assets/Images/image_1.jpeg'),
      require('../assets/Images/image_2.jpeg'),
      require('../assets/Images/image_3.jpeg'),
      require('../assets/Images/image_4.jpeg'),
    ],
  };
  
  const products = {
    products: [
      {
        id: '1',
        name: 'Baseus Simplism Y-Type Leather Case (12.9)',
        price: 'Rs.4299.00',
        category: 'Accessories',
        description:
          'Two bracket ways;Full-protection;Flip to wake up the screen/Close to screen dormancy;High-quality and durable(PU leather outer+Micro fabric lining);Skin-friendly and soft',
        image: require('../assets/Images/accessories/Baseus_Simplism_Y_Type_Leather_Case_(12.9)/P_img.png'),
      },
      {
        id: '2',
        name: 'Baseus Mini White Cable USB For iPhone 2.4A 1m White',
        price: 'Rs.899.00',
        category: 'Cables',
        description:
          'One-piece Plastic Injection Molding、TPE Soft Wire、Thickened Cable Body、Built-in Storage Hook and Loop Fastener、Charging and Transmission Two in One',
        image: require('../assets/Images/cables/Baseus_Mini_White_Cable_USB_For_iPhone_2.4A_1m_White/P_Img.png'),
      },
      {
        id: '3',
        name: 'Baseus Mini White Cable USB For Type-C 3A 1m White',
        price: 'Rs.899.00',
        category: 'Cables',
        description:
          'One-piece Plastic Injection Molding、TPE Soft Wire、Thickened Cable Body、Built-in Storage Hook and Loop Fastener、Charging and Transmission Two in One',
        image: require('../assets/Images/cables/Baseus_Mini_White_Cable_USB_For_Type_C_3A_1m_White/P_Img.png'),
      },
      {
        id: '4',
        name: 'Baseus 2Pcs Car 360 Degree HD Blind Spot Convex Mirror Auto Rear View Mirror Wide Angle Vehicle',
        price: 'Rs.1499.00',
        category: 'Car Accessories',
        description: '',
        image: require('../assets/Images/car_acc/Baseus_2Pcs_Car_360_Degree_HD_Blind_Spot_Convex_Mirror_Auto_Rear_View_Mirror_Wide_Angle_Vehicle/P_img.png'),
      },
      {
        id: '5',
        name: 'Baseus 4 Port 120W USB Car Quick Charger PPS, Multi-Port Fast Charging',
        price: 'Rs.4499.00',
        category: 'Car Accessories',
        description:
          'Extension cord and Extension Ports. (1) Total output of 120W. (2) Three expansion ports. (3) 1.5m extension. (4) Universal for 12V-24V car models.',
        image: require('../assets/Images/car_acc/Baseus_4_Port_120W_USB_Car_Quick_Charger_PPS_Multi_Port_Fast_Charging/P_img.png'),
      },
      {
        id: '6',
        name: 'Baseus SIMU ANC True Wireless Earphones S1 Pro',
        price: 'Rs.12,499.00',
        category: 'Earphones',
        description:
          'Active Noise Cancellation Mode、Ambient Sound Mode、Wireless V5.1 Technology、Wireless charging、LDS Antennas、ENC during Calls',
        image: require('../assets/Images/earphones/Baseus_SIMU_ANC_True_Wireless_Earphones_S1_Pro/P_img.png'),
      },
    ],
  };
  
  const categories = {
    category: [
      {id: '1', name: 'Cables', image: require('../assets/Images/cables/cable_1.png')},
      {
        id: '2',
        name: 'Chargers',
        image: require('../assets/Images/chargers/charger_1.png'),
      },
      {
        id: '3',
        name: 'Earphones',
        image: require('../assets/Images/earphones/earphones_1.png'),
      },
      {
        id: '4',
        name: 'Powerbanks',
        image: require('../assets/Images/powerbank/powerbank_1.png'),
      },
      {
        id: '5',
        name: 'Car Accessories',
        image: require('../assets/Images/car_acc/car_acc1.png'),
      },
      {
        id: '6',
        name: 'Home Appliances',
        image: require('../assets/Images/home_acc/home_acc1.png'),
      },
      {
        id: '7',
        name: 'Accessories',
        image: require('../assets/Images/accessories/acc_1.png'),
      },
    ],
  };
  
  const renderItem = item => <Item item={item.item} />;
  
  const Item = ({item}) => {
    // console.log('item', item.image);
    return (
      <TouchableOpacity
      // onPress={() => {
      //   OnPressService(item._id, item.name);
      // }}
      >
        <Image
          source={item.image}
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
            marginHorizontal: 5,
            // overflow: 'hidden',
            // backgroundColor: 'white',
            // opacity: 0.8,
          }}
        />
        <Text
          // adjustsFontSizeToFit= {true}
          // ellipsizeMode={'tail'}
          style={{
            fontSize: 13,
            marginTop: 5,
            color: 'white',
            fontWeight: 'bold',
            width: 100,
            textAlign: 'center',
            // textAlignVertical: 'center',
            // height: 100,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  
  const renderProduct = item => <Product item={item.item} />;
  
  const Product = ({item}) => {
    // console.log('product', item.image);
    return (
      <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("ProductDetail", {
          ...props.route.params, item
        });
      }}>
        <View style={{width: 100, marginRight: 35}}>
          <Image
            source={item.image}
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              marginHorizontal: 5,
              // overflow: 'hidden',
              backgroundColor: 'white',
              // opacity: 0.8,
            }}
          />
          <Text
            // adjustsFontSizeToFit= {true}
            // ellipsizeMode={'tail'}
            style={{
              fontSize: 13,
              marginTop: 5,
              color: 'white',
              fontWeight: 'bold',
              // width: 100,
              textAlign: 'center',
              // textAlignVertical: 'center',
              // height: 100,
            }}
            numberOfLines={2}>
            {item.name}
          </Text>
          <Text
            style={{
              color: Colors.Yellow,
              textAlign: 'center',
              fontSize: 12,
              fontWeight: 'bold',
              marginBottom: 3
            }}>
            {item.price}
          </Text>
          <TouchableOpacity style={{marginBottom: 15}}>
            <Text style={{backgroundColor:Colors.Yellow, textAlign:'center', borderRadius: 20, fontStyle:'italic'}}>Add to cart </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <ScrollView style={styles.background}>
        {/* <Header /> */}
        <View>
          <SliderBox images={images.images} />
        </View>
        <View
          style={{
            marginTop: 8,
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: Colors.Yellow,
            }}>
            Categories
          </Text>
          <TouchableOpacity
          // onPress={seeAllServicesPressHandler}
          >
            <Text
              style={{
                fontSize: 16,
                color: '#FFFFFF',
              }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView style={styles.container}>
          <FlatList
            horizontal
            data={categories.category}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
        <View
          style={{
            paddingTop: 8,
            paddingHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: Colors.Yellow,
            }}>
            Products
          </Text>
          <TouchableOpacity
          // onPress={seeAllServicesPressHandler}
          >
            <Text
              style={{
                fontSize: 16,
                color: '#FFFFFF',
              }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView style={styles.container}>
          <FlatList
            horizontal={false}
            numColumns={3}
            data={products.products}
            renderItem={renderProduct}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.VeryDarkGray,
    flex: 1,
  },
  container: {
    borderRadius: 20,
    marginVertical: 10,
    paddingHorizontal: 5,
  },
});

export default Home;
