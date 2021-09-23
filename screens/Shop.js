import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback, ScrollView, FlatList, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import {Searchbar} from 'react-native-paper';
import * as Colors from '../assets/Colors/index'



const Shop = (props) => {
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
          'One-piece Plastic Injection Molding, TPE Soft Wire, Thickened Cable Body, Built-in Storage Hook and Loop Fastener, Charging and Transmission Two in One.',
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
      {
        id: '7',
        name: 'Baseus Unlimited adjustment lazy phone holder',
        price: 'Rs.3999.00',
        category: 'Accessories',
        description:
          'Aerial aluminium alloy, Widened clamp, Spherical rotation, Stable and firm, Multi-angle adjustment, 360-degree rotating head',
        image: require('../assets/Images/accessories/Baseus_Unlimited_adjustment_lazy_phone_holder/P1.png'),
      },
      {
        id: '8',
        name: 'Baseus Energy Collection Series Solar Energy Human Body Induction Wall Lamp (Triangle Shape)',
        price: 'Rs.2999.00',
        category: 'Home Accessories',
        description:
          'Energy-saving and Environmentally-friendly, Outdoor Lighting in New Technology, Solar Charging, No energy consumption, Intelligent induction of human body turns on and off when people come and go',
        image: require('../assets/Images/home_acc/Baseus_Energy_Collection_Series_Solar_Energy_Human_Body_Induction_Wall_Lamp/P1.png'),
      },
      {
        id: '9',
        name: 'Baseus Silica gel cable USB For Type-C',
        price: 'Rs.1199.00',
        category: 'Cables',
        description:
          'Material: Slicone, Current: 1m/3A 2m/2A, Transmission rate: 480Mbps, Color: Green; Black; Red, Length: 1m ',
        image: require('../assets/Images/cables/Baseus_Silica_gel_cable_USB_For_Type_C/P1.png'),
      },
    ],
  };

const renderProduct = item => <Product item={item.item} />;

const Product = ({item}) => {
  // console.log('product', item.image);
  return (
      <View>
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
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={{marginBottom: 15, width: 100,}}>
    <Text style={{backgroundColor:Colors.Yellow, textAlign:"center", borderRadius: 8, fontStyle:'italic',paddingVertical:5}}>Add to cart </Text>
  </TouchableOpacity>
  </View>
  );
};
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    let product = products.products.filter((p) => {
        return p.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
      });

      const renderSearchbar = () => {
        return(
          <Searchbar
      style={{marginVertical: 10, marginHorizontal: 10}}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
        )
      }
    return(
        <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.background}>
      
        <View style={styles.container}>
          <FlatList
            horizontal={false}
            numColumns={3}
            data={product}
            renderItem={renderProduct}
            keyExtractor={item => item.id}
            ListHeaderComponent={renderSearchbar}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    background: {
      backgroundColor: Colors.VeryDarkGray,
      flex: 1,
    },
    container: {
      marginVertical: 0,
      paddingHorizontal: 5,
    },
  });

export default Shop;