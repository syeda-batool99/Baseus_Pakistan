import React, {useState, useEffect} from 'react';
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
// import {Searchbar} from 'react-native-paper';
import Searchbar from './Searchbar'
import * as Colors from '../assets/Colors/index';
import {connect} from 'react-redux';
import {addToCart, getProducts, getProductsByCategory} from '../redux/appActions';



const Shop = props => {
  const [ProductsFromApiCall, setProducts] = useState([]);
  const [ProductsByCategory, setProductsByCategory] = useState([]);
  async function temp() {
     setProducts(await props.GetProducts());
     setProductsByCategory(await props.GetProductsByCategory(props.route.params.item.id));
  }

  useEffect(() => {
    temp()
  }, []);
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
          <View style={{width: 100, marginHorizontal:12}}>
            <Image
              source={{ uri: item.images[0].src }}
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
                marginLeft:12,
                // color: 'white',
                fontWeight: 'bold',
                // width: 100,
                textAlign: 'left',
                // textAlignVertical: 'center',
                // height: 100,
              }}
              numberOfLines={2}>
              {item.name}
            </Text>
            <Text
              style={{
                color: Colors.Olive,
                textAlign: 'center',
                fontSize: 12,
                fontWeight: 'bold',
                marginBottom: 3,
              }}>
              Rs. {item.price}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginBottom: 15, width: 100, marginHorizontal:12}}
          onPress={() => props.AddToCart(item)}>
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

  const onChangeSearch = query => {
    setSearchQuery(query);
    let SearchedProduct = props.products.filter(p => {
      return p.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    console.log('query', query, SearchedProduct.length);
    setProducts(SearchedProduct);
  };

  return (
    <ScrollView>
      <View style={styles.background}>
        <View style={styles.container}>
          {props.route.params ? (
            <Text style={styles.heading}>{props.route.params.item.name}</Text>
          ) : (
            <Text style={styles.heading}>All Products</Text>
          )}
          <Searchbar value={searchQuery} onChangeSearch={onChangeSearch}/>
          {props.route.params ? (
            <FlatList
              horizontal={false}
              numColumns={3}
              data={ProductsByCategory}
              renderItem={renderProduct}
              keyExtractor={item => item.id}
              // ListHeaderComponent={renderSearchbar}
            />
          ) : (
            <FlatList
              horizontal={false}
              numColumns={3}
              data={ProductsFromApiCall}
              renderItem={renderProduct}
              keyExtractor={item => item.id}
              // ListHeaderComponent={renderSearchbar}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.White,
    flex: 1,
  },
  container: {
    // marginVertical: 0,
    // paddingHorizontal: 5,
  },
  heading: {
    // color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
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
    GetProducts : () => dispatch(getProducts()),
    GetProductsByCategory: categoryId => dispatch(getProductsByCategory(categoryId))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
