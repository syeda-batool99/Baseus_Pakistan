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
  Button,
} from 'react-native';
import Header from '../shared/Header';
import {SliderBox} from 'react-native-image-slider-box';
import * as Colors from '../assets/Colors/index';
// import {getProducts} from '../shared/Products';
import {connect} from 'react-redux';
import {addToCart, getProducts, getCategories} from '../redux/appActions';

const Home = props => {
  const [ProductsFromApiCall, setProducts] = useState([]);
  const [Categories, setCategories] = useState([]);
  async function temp() {
    setProducts(await props.GetProducts());
    setCategories(await props.GetCategories());
  }
  const images = {
    images: [
      require('../assets/Images/image_1.jpeg'),
      require('../assets/Images/image_2.jpeg'),
      require('../assets/Images/image_3.jpeg'),
      require('../assets/Images/image_4.jpeg'),
    ],
  };

  useEffect(() => {
    temp();
  }, []);

  const renderItem = item => <Item item={item.item} />;

  const Item = ({item}) => {
    // console.log('item', item.image);
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Shop', {
            ...props.route.params,
            item,
          });
        }}>
        <Image source={{uri: item.image.src}} style={styles.categoryImage} />
        <Text style={styles.categoryTitle}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderProduct = item => <Product item={item.item} />;

  const Product = ({item}) => {
    // console.log('product', item.image);
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('ProductDetail', {
            ...props.route.params,
            item,
          });
        }}>
        <View style={{width: 100, marginHorizontal: 8}}>
          <Image
            source={{uri: item.images[0].src}}
            style={styles.productImage}
          />
          <Text
            // adjustsFontSizeToFit= {true}
            // ellipsizeMode={'tail'}
            style={styles.productName}
            numberOfLines={2}>
            {item.name}
          </Text>
          <Text style={styles.productPrice}>Rs. {item.price}</Text>
          <TouchableOpacity
            style={{marginBottom: 15}}
            onPress={() => props.AddToCart(item)}>
            <Text style={styles.addToCartBtn}>Add to cart </Text>
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
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Categories</Text>
        </View>
        <SafeAreaView style={styles.container}>
          <FlatList
            horizontal
            data={Categories}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Products</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Shop')}>
            <Text
              style={{
                fontSize: 16,
                // color: '#FFFFFF',
              }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView style={styles.container}>
          <FlatList
            horizontal={false}
            numColumns={3}
            data={ProductsFromApiCall.slice(0, 6)}
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
    backgroundColor: Colors.White,
    flex: 1,
  },
  container: {
    borderRadius: 20,
    marginVertical: 10,
    // paddingHorizontal: 5,
  },
  subtitleContainer: {
    marginTop: 8,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.VeryDarkGray,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  categoryTitle: {
    fontSize: 13,
    marginTop: 5,
    // color: 'white',
    fontWeight: 'bold',
    width: 80,
    textAlign: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginHorizontal: 5,
    // overflow: 'hidden',
    backgroundColor: 'white',
    // opacity: 0.8,
  },
  productName: {
    fontSize: 13,
    marginTop: 5,
    marginLeft: 12,
    // color: 'white',
    fontWeight: 'bold',
    // width: 100,
    textAlign: 'left',
    // height: 100,
  },
  productPrice: {
    color: Colors.Olive,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  addToCartBtn: {
    backgroundColor: Colors.Yellow,
    textAlign: 'center',
    borderRadius: 20,
  },
});

const mapStateToProps = state => ({
  // user: state.userDetails.user,
  products: state.appData.Products,
  categories: state.appData.Categories,
  // token: state.userDetails.token,
});
const mapDispatchToProps = dispatch => {
  return {
    AddToCart: body => dispatch(addToCart(body)),
    GetProducts: () => dispatch(getProducts()),
    GetCategories: () => dispatch(getCategories()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
