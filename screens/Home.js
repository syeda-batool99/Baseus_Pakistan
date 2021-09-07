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
} from 'react-native';
import Header from '../shared/Header';
import {SliderBox} from 'react-native-image-slider-box';

const images = {
  images: [
    require('../assets/image_1.jpeg'),
    require('../assets/image_2.jpeg'),
    require('../assets/image_3.jpeg'),
    require('../assets/image_4.jpeg'),
  ],
};

const products = {
  products: [
    {id:'1', name:'Baseus Mini White Cable USB For iPhone 2.4A 1m White', price:'Rs.899', category:'Cables', description:'', image:''},
    {id:'2', name:'', price:'', category:'', description:'', image:''},
    {id:'3', name:'', price:'', category:'', description:'', image:''},
    {id:'4', name:'', price:'', category:'', description:'', image:''},
    {id:'5', name:'', price:'', category:'', description:'', image:''},
    {id:'6', name:'', price:'', category:'', description:'', image:''},
  ]
}

const categories = {
  category: [
    {id: '1', name: 'Cables', image: require('../assets/cables/cable_1.png')},
    {
      id: '2',
      name: 'Chargers',
      image: require('../assets/chargers/charger_1.png'),
    },
    {
      id: '3',
      name: 'Earphones',
      image: require('../assets/earphones/earphones_1.png'),
    },
    {
      id: '4',
      name: 'Powerbanks',
      image: require('../assets/powerbank/powerbank_1.png'),
    },
    {
      id: '5',
      name: 'Car Accessories',
      image: require('../assets/car_acc/car_acc1.png'),
    },
    {
      id: '6',
      name: 'Home Appliances',
      image: require('../assets/home_acc/home_acc1.png'),
    },
  ],
};

const renderItem = item => <Item item={item.item} />;

const Item = ({item}) => {
  console.log('item', item.image);
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
          // width: 100,
          textAlign: 'center',
          // textAlignVertical: 'center',
          // height: 100,
        }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

const Home = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.background}>
        {/* <Header /> */}
        <View>
          <SliderBox images={images.images} />
        </View>
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
              color: '#FFF000',
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
              color: '#FFF000',
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
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#030303',
    flex: 1,
  },
  container: {
    borderRadius: 20,
    marginVertical: 10,
  },
});

export default Home;
