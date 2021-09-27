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
// import {Searchbar} from 'react-native-paper';
import Searchbar from './Searchbar'
import * as Colors from '../assets/Colors/index';
import {connect} from 'react-redux';
import {addToCart} from '../redux/appActions';



const Shop = props => {
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
              Rs. {item.price}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginBottom: 15, width: 100}}
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
  const [showProducts, setShowProducts] = useState(props.products);

  const onChangeSearch = query => {
    setSearchQuery(query);
    let SearchedProduct = props.products.filter(p => {
      return p.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    console.log('query', query, SearchedProduct.length);
    setShowProducts(SearchedProduct);
  };

  return (
    <TouchableWithoutFeedback>
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
              data={showProducts.filter(
                product => product.category == props.route.params.item.name,
              )}
              renderItem={renderProduct}
              keyExtractor={item => item.id}
              // ListHeaderComponent={renderSearchbar}
            />
          ) : (
            <FlatList
              horizontal={false}
              numColumns={3}
              data={showProducts}
              renderItem={renderProduct}
              keyExtractor={item => item.id}
              // ListHeaderComponent={renderSearchbar}
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
