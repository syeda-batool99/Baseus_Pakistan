/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';
// import {Searchbar} from 'react-native-paper';
import * as Colors from '../assets/Colors/index';
import {connect} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  addToCart,
  getProducts,
  getProductsByCategory,
  getProductsBySearch,
  addToWishlist,
} from '../redux/appActions';

const Shop = props => {
  const [ProductsFromApiCall, setProducts] = useState([]);
  const [ProductsByCategory, setProductsByCategory] = useState([]);
  // const [searchedProducts, setSearchedProducts] = useState([]);
  async function temp() {
    setProducts(await props.GetProducts());
    setProductsByCategory(
      await props.GetProductsByCategory(props.route.params.item.id),
    );
  }

  useEffect(() => {
    temp();
  }, []);
  const renderProduct = item => <Product item={item.item} />;

  const Product = ({item}) => {
    const discountedPrice = item.regular_price - item.sale_price;
    const number = discountedPrice / item.regular_price;
    const percentage = Math.round(number * 100);
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
            style={styles.productName}>
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
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => {
    setSearchQuery(query);
    props.GetProductsBySearch(searchQuery);
    // let SearchedProduct = props.GetProductsBySearch(searchQuery);
    // let SearchedProduct = props.products.filter(p => {
    //   return p.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    // });
    // setSearchedProducts(props.GetProductsBySearch(searchQuery));
    console.log('query', query, props.SearchedProducts.length);
  };

  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        {props.route.params ? (
          <Text style={styles.heading}>{props.route.params.item.name}</Text>
        ) : (
          <Text style={styles.heading}>All Products</Text>
        )}
        {/* <Searchbar value={searchQuery} onChangeSearch={onChangeSearch} /> */}
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'space-between',
            marginHorizontal: 15,
            // marginBottom: 10,
            alignItems: 'center',
            padding: 10,
          }}>
          <TextInput
            style={styles.input}
            placeholder="  Search for Products"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
          <TouchableOpacity
            style={{
              backgroundColor: Colors.Yellow,
              textAlign: 'center',
              borderRadius: 8,
              // fontStyle: 'italic',
              padding: 10,
              left: 10,
            }}
            onPress={() => onChangeSearch(searchQuery)}>
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
        {searchQuery ? (
          <SafeAreaView>
            {/* <Text style={styles.subheading}>Searched Results</Text> */}
            <FlatList
              numColumns={3}
              data={props.SearchedProducts}
              renderItem={renderProduct}
              keyExtractor={item => item.id}
              // ListHeaderComponent={renderSearchbar}
            />
          </SafeAreaView>
        ) : props.route.params ? (
          <SafeAreaView>
            <FlatList
              numColumns={3}
              data={ProductsByCategory}
              renderItem={renderProduct}
              keyExtractor={item => item.id}
              // ListHeaderComponent={renderSearchbar}
            />
          </SafeAreaView>
        ) : (
          <SafeAreaView>
            <FlatList
              numColumns={3}
              data={ProductsFromApiCall}
              renderItem={renderProduct}
              keyExtractor={item => item.id}
              // ListHeaderComponent={renderSearchbar}
            />
          </SafeAreaView>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.White,
    flex: 1,
    padding: 10,
  },
  container: {
    borderRadius: 20,
    marginVertical: 10,
    // paddingHorizontal: 5,
  },
  heading: {
    // color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  subheading: {
    // color: 'white',
    // fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    // backgroundColor: 'transparent',
    borderColor: '#ececec',
    borderWidth: 1,
    borderRadius: 8,
    color: 'black',
    width: '80%',
    height: '82%',
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
    // textAlign: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});

const mapStateToProps = state => ({
  // user: state.userDetails.user,
  products: state.appData.Products,
  categories: state.appData.Categories,
  SearchedProducts: state.appData.searchedProducts,
  // token: state.userDetails.token,
});
const mapDispatchToProps = dispatch => {
  return {
    AddToCart: body => dispatch(addToCart(body)),
    GetProducts: () => dispatch(getProducts()),
    GetProductsByCategory: categoryId =>
      dispatch(getProductsByCategory(categoryId)),
    GetProductsBySearch: searchString =>
      dispatch(getProductsBySearch(searchString)),
    AddToWishlist: body => dispatch(addToWishlist(body)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
