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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {getProducts} from '../shared/Products';
import {connect} from 'react-redux';
import {
  addToCart,
  getProducts,
  getCategories,
  addToWishlist,
} from '../redux/appActions';
import WhatsApp from './Whatsapp';

const Home = props => {
  const [ProductsFromApiCall, setProducts] = useState([]);
  const [Categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  async function temp() {
    setProducts(await props.GetProducts(page));
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
    // setInterval(() => {
    //   temp();
    // }, 2000);
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

  // const renderFooter = () => {
  //   return (

  //   );
  // };

  const renderProduct = item => <Product item={item.item} />;

  const Product = ({item}) => {
    const discountedPrice = item.regular_price - item.sale_price;
    const number = discountedPrice / item.regular_price;
    const percentage = Math.round(number * 100);
    var shortenedName = item.name.split(' ');
    // console.log('product', item.image);
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('ProductDetail', {
            ...props.route.params,
            item,
          });
        }}
        style={{
          width: '33.33%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Image
            source={{uri: item.images[0].src}}
            style={styles.productImage}
          />
          {item.on_sale && (
            <View
              style={{
                position: 'absolute',
                right: 5,
                top: 5,
                backgroundColor: Colors.Yellow,
                borderRadius: 35 / 2,
                paddingHorizontal: 3,
                width: 35,
                height: 35,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 12, fontWeight: 'bold'}}>
                -{percentage}%{' '}
              </Text>
            </View>
          )}

          <Text
            // adjustsFontSizeToFit= {true}
            // ellipsizeMode={'tail'}
            style={styles.productName}
            numberOfLines={2}>
            {item.name.substring(0, 15)}
          </Text>
          <Text style={styles.productPrice}>Rs. {item.price}</Text>
          <View style={styles.addToCartBtn}>
            <TouchableOpacity
              // style={{marginBottom: 15}}
              onPress={() => props.AddToCart(item)}>
              {/* <Text style={styles.addToCartBtn}>Add to cart </Text> */}
              <FontAwesome
                name={'cart-plus'}
                size={30}
                color={Colors.VeryDarkGray}
              />
            </TouchableOpacity>
            <TouchableOpacity
              // style={{marginBottom: 15}}
              onPress={() => props.AddToWishlist(item)}>
              {/* <Text >Add to Wishlist </Text> */}
              <MaterialCommunityIcons
                name={'heart-plus'}
                size={30}
                color={Colors.VeryDarkGray}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
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
          numColumns={3}
          data={ProductsFromApiCall}
          renderItem={renderProduct}
          keyExtractor={item => item.id}
          // ListFooterComponent={renderFooter}
        />
      </SafeAreaView>
      {/* <View>
        <TouchableOpacity
          onPress={(() => setPage(page + 1), temp())}
          style={styles.button}>
          <Text
            style={{color: 'black', textAlign: 'center', fontWeight: '700'}}>
            Load More
          </Text>
        </TouchableOpacity>
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.White,
    flex: 1,
    paddingHorizontal: 10,
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
    // width: '30%',
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
    // textAlign: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    backgroundColor: Colors.LightYellow,
    marginBottom: 20,
    padding: 10,
    width: '60%',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
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
    GetProducts: page => dispatch(getProducts(page)),
    GetCategories: () => dispatch(getCategories()),
    AddToWishlist: body => dispatch(addToWishlist(body)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
