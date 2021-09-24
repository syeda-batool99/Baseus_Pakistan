import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {baseProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import {Searchbar} from 'react-native-paper';
import * as Colors from '../assets/Colors/index';

const Shop = props => {
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
        Specification: {
          rows: [
            {id: '1', title: 'Brand', data: 'Baseus'},
            {
              id: '2',
              title: 'Name',
              data: 'Baseus Simple Three-Fold Magentic Leather Case For Pad Pro (2020)',
            },
            {id: '3', title: 'Color', data: 'Black/ Green/ Pink'},
            {id: '4', title: 'Technology', data: 'Hot Pressing'},
            {id: '5', title: 'Material', data: 'PU+Microfiber'},
            {id: '6', title: 'Size', data: '11 inch, 12.9 inch'},
            {id: '7', title: 'Weight', data: '11 inch: 271g, 12.9 inch: 360g'},
          ],
        },
      },
      {
        id: '2',
        name: 'Baseus Mini White Cable USB For iPhone 2.4A 1m White',
        price: 'Rs.899.00',
        category: 'Cables',
        description:
          'One-piece Plastic Injection Molding、TPE Soft Wire、Thickened Cable Body、Built-in Storage Hook and Loop Fastener、Charging and Transmission Two in One',
        image: require('../assets/Images/cables/Baseus_Mini_White_Cable_USB_For_iPhone_2.4A_1m_White/P_Img.png'),
        Specification: {
          rows: [
            {id: '1', title: 'Producent', data: 'Baseus'},
            {
              id: '2',
              title: 'Name',
              data: 'Baseus Mini White Cable USB For iPhone 2.4A 1m White',
            },
            {id: '3', title: 'Product Code', data: '	CAMSW-02'},
            {id: '4', title: 'Material', data: 'TPE'},
            {id: '5', title: 'Color', data: 'White'},
            {id: '6', title: 'Length', data: '1 m'},
            {id: '7', title: 'Connector', data: 'USB to Micro USB'},
            {id: '8', title: 'Charging Current', data: '2.4A'},
            {id: '9', title: 'Transmission Rate', data: '480 Mb/s'},
          ],
        },
      },
      {
        id: '3',
        name: 'Baseus Mini White Cable USB For Type-C 3A 1m White',
        price: 'Rs.899.00',
        category: 'Cables',
        description:
          'One-piece Plastic Injection Molding, TPE Soft Wire, Thickened Cable Body, Built-in Storage Hook and Loop Fastener, Charging and Transmission Two in One.',
        image: require('../assets/Images/cables/Baseus_Mini_White_Cable_USB_For_Type_C_3A_1m_White/P_Img.png'),
        Specification: {
          rows: [
            {id: '1', title: 'Producent', data: 'Baseus'},
            {
              id: '2',
              title: 'Name',
              data: 'Baseus Mini White Cable USB For type C 3A 1m White',
            },
            {id: '3', title: 'Product Code', data: '	CAMSW-02'},
            {id: '4', title: 'Material', data: 'TPE'},
            {id: '5', title: 'Color', data: 'White'},
            {id: '6', title: 'Length', data: '1 m'},
            {id: '7', title: 'Connector', data: 'USB to type C'},
            {id: '8', title: 'Charging Current', data: '3A'},
            {id: '9', title: 'Transmission Rate', data: '480 Mb/s'},
          ],
        },
      },
      {
        id: '4',
        name: 'Baseus 2Pcs Car 360 Degree HD Blind Spot Convex Mirror Auto Rear View Mirror Wide Angle Vehicle',
        price: 'Rs.1499.00',
        category: 'Car Accessories',
        description: '',
        reviews: [
          {
            id: '1',
            username: 'Andrew H.',
            date: '26-July-2021',
            text: 'Quality is amazing',
          },
        ],

        image: require('../assets/Images/car_acc/Baseus_2Pcs_Car_360_Degree_HD_Blind_Spot_Convex_Mirror_Auto_Rear_View_Mirror_Wide_Angle_Vehicle/P_img.png'),
        Specification: {
          rows: [
            {id: '1', title: 'Producent', data: 'Baseus'},
            {
              id: '2',
              title: 'Name',
              data: 'Full-vision Blind-spot Mirror For Car Backing',
            },
            {id: '3', title: 'Material', data: 'Glass'},
            {id: '4', title: 'Technology', data: 'AF ion injection'},
            {id: '5', title: 'Color', data: 'Black'},
            {id: '6', title: 'Install way', data: 'Adsorption'},
            {id: '7', title: 'Fixed Position', data: 'Rear view mirror'},
          ],
        },
      },
      {
        id: '5',
        name: 'Baseus 4 Port 120W USB Car Quick Charger PPS, Multi-Port Fast Charging',
        price: 'Rs.4499.00',
        category: 'Car Accessories',
        description:
          'Extension cord and Extension Ports. (1) Total output of 120W. (2) Three expansion ports. (3) 1.5m extension. (4) Universal for 12V-24V car models.',
        image: require('../assets/Images/car_acc/Baseus_4_Port_120W_USB_Car_Quick_Charger_PPS_Multi_Port_Fast_Charging/P_img.png'),
        Specification: {
          rows: [
            {id: '1', title: 'Producent', data: 'Baseus'},
            {
              id: '2',
              title: 'Name',
              data: 'Baseus Share Together PPS multi-port Fast charging car charger with extension cord 120W',
            },
            {id: '3', title: 'Model', data: 'CCBX-120C2'},
            {id: '4', title: 'Material', data: 'Aluminium+PC'},
            {id: '5', title: 'Input', data: 'DC 12-24V'},
            {
              id: '6',
              title: 'USB1/USB2 Output',
              data: '5V-3A, 9V-2A, 10V-2A, 12V-2.5A, 30W',
            },
            {
              id: '7',
              title: 'Type-C1/Type-C2',
              data: '5V-3A, 9V-2.22A, 12V-2.5A, 15V-2A, 20V-1.5A, 30W',
            },
            {id: '8', title: 'Total Output', data: '30W+30W+30W+30W'},
            {id: '9', title: 'Length', data: '1.5m'},
            {id: '10', title: 'Color', data: 'Gray'},
          ],
        },
      },
      {
        id: '6',
        name: 'Baseus SIMU ANC True Wireless Earphones S1 Pro',
        price: 'Rs.12,499.00',
        category: 'Earphones',
        description:
          'Active Noise Cancellation Mode、Ambient Sound Mode、Wireless V5.1 Technology、Wireless charging、LDS Antennas、ENC during Calls',
        image: require('../assets/Images/earphones/Baseus_SIMU_ANC_True_Wireless_Earphones_S1_Pro/P_img.png'),
        Specification: {
          rows: [
            {id: '1', title: 'Producent', data: 'Baseus'},
            {
              id: '2',
              title: 'Name',
              data: 'Baseus SIMU ANC True Wireless Earphones',
            },
            {id: '3', title: 'Model', data: 'Baseus SIMU S1 Pro'},
            {id: '4', title: 'Material', data: 'ABS+PC'},
            {id: '5', title: 'Color', data: 'Tarnish/Blue'},
            {id: '6', title: 'Version', data: 'V5.1'},
            {id: '7', title: 'Communication distance', data: '10m'},
            {id: '8', title: 'Standby Time', data: 'About 300 hours'},
            {id: '9', title: 'Charging Time', data: 'About 1.5 hours'},
            {id: '10', title: 'Wireless', data: 'About 2 hours'},
            {id: '11', title: 'Charge interface', data: 'Type-C'},
          ],
        },
      },
      {
        id: '7',
        name: 'Baseus Unlimited adjustment lazy phone holder',
        price: 'Rs.3999.00',
        category: 'Accessories',
        description:
          'Aerial aluminium alloy, Widened clamp, Spherical rotation, Stable and firm, Multi-angle adjustment, 360-degree rotating head',
        image: require('../assets/Images/accessories/Baseus_Unlimited_adjustment_lazy_phone_holder/P1.png'),
        Specification: {
          rows: [
            {id: '1', title: 'Producent', data: 'Baseus'},
            {id: '2', title: 'Material', data: 'Aluminum alloy + Plastic'},
            {id: '3', title: 'Color', data: 'White/Blue/Rose gold'},
            {id: '4', title: 'Technology', data: 'Oxidation'},
            {id: '5', title: 'Clip width', data: '64-90mm'},
            {id: '6', title: 'Base clip width', data: '90mm'},
          ],
        },
      },
      {
        id: '8',
        name: 'Baseus Energy Collection Series Solar Energy Human Body Induction Wall Lamp (Triangle Shape)',
        price: 'Rs.2999.00',
        category: 'Home Accessories',
        description:
          'Energy-saving and Environmentally-friendly, Outdoor Lighting in New Technology, Solar Charging, No energy consumption, Intelligent induction of human body turns on and off when people come and go',
        image: require('../assets/Images/home_acc/Baseus_Energy_Collection_Series_Solar_Energy_Human_Body_Induction_Wall_Lamp/P1.png'),
        Specification: {
          rows: [
            {id: '1', title: 'Producent', data: 'Baseus'},
            {id: '2', title: 'Material', data: 'ABS+PC'},
            {id: '3', title: 'Color', data: 'Black'},
            {id: '4', title: 'Power', data: '1.2W'},
            {id: '5', title: 'Light source', data: 'LED'},
            {id: '6', title: 'Induction angle', data: '120'},
            {id: '7', title: 'Installation height', data: '1.8~2.2 meters'},
            {id: '8', title: 'Induction distance', data: '0-8 meters'},
            {id: '9', title: 'Waterproof level', data: 'IPX5'},
          ],
        },
      },
      {
        id: '9',
        name: 'Baseus Silica gel cable USB For Type-C',
        price: 'Rs.1199.00',
        category: 'Cables',
        description:
          'Material: Slicone, Current: 1m/3A 2m/2A, Transmission rate: 480Mbps, Color: Green; Black; Red, Length: 1m ',
        image: require('../assets/Images/cables/Baseus_Silica_gel_cable_USB_For_Type_C/P1.png'),
        Specification: {
          rows: [
            {id: '1', title: 'Producent', data: 'Baseus'},
            {id: '2', title: 'Material', data: 'Silicone'},
            {id: '3', title: 'Current', data: '1m/3A, 2m/2A'},
            {id: '4', title: 'Transmission rate', data: '480 Mbps'},
            {id: '5', title: 'Color', data: 'Green/Black/Red'},
            {id: '6', title: 'Length', data: '1m'},
          ],
        },
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
            props.navigation.navigate('ProductDetail', {
              ...props.route.params,
              item,
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
                marginBottom: 3,
              }}>
              {item.price}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{marginBottom: 15, width: 100}}>
          <Text
            style={{
              backgroundColor: Colors.Yellow,
              textAlign: 'center',
              borderRadius: 8,
              fontStyle: 'italic',
              paddingVertical: 5,
            }}>
            Add to cart{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  let product = products.products.filter(p => {
    return p.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
  });

  const renderSearchbar = () => {
    return (
      <View>
        {props.route.params ? (
          <Text style={styles.heading}>{props.route.params.item.name}</Text>
        ) : (
          <Text style={styles.heading}>All Products</Text>
        )}
        <Searchbar
          style={{marginBottom:20, marginHorizontal: 10}}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        
      </View>
    );
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.background}>
        <View style={styles.container}>
          {props.route.params ? (
            <FlatList
              horizontal={false}
              numColumns={3}
              data={product.filter(
                product => product.category == props.route.params.item.name,
              )}
              renderItem={renderProduct}
              keyExtractor={item => item.id}
              ListHeaderComponent={renderSearchbar}
            />
          ) : (
            <FlatList
              horizontal={false}
              numColumns={3}
              data={product}
              renderItem={renderProduct}
              keyExtractor={item => item.id}
              ListHeaderComponent={renderSearchbar}
            />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.VeryDarkGray,
    flex: 1,
  },
  container: {
    // marginVertical: 0,
    paddingHorizontal: 5,
  },
  heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign:'center',
    marginVertical:10
  },
});

export default Shop;
