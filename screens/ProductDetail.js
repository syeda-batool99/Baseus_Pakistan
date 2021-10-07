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
import {Button} from 'react-native-paper';
import * as Colors from '../assets/Colors/index';
import NumericInput from 'react-native-numeric-input';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {connect} from 'react-redux';
import {
  addToCart,
  getProductById,
  getReviewsOfProduct,
} from '../redux/appActions';

const ProductDetail = props => {
  const item = props.route.params.item;
  const [Reviews, setReviews] = useState([]);

  async function temp() {
    setReviews(await props.GetReviews(item.id));
  }
  useEffect(() => {
    temp();
  }, []);

  let stars = [];
  for (var i = 1; i <= 5; i++) {
    let path = require('../assets/star_filled.png');
    if (i > item.average_rating) {
      path = require('../assets/star_unfilled.png');
    }
    stars.push(<Image style={styles.image} source={path} />);
  }

  const individualrating = rating => {
    let individualrating = [];
    for (var i = 1; i <= rating; i++) {
      let path = require('../assets/star_filled.png');

      individualrating.push(<Image style={styles.ratingImage} source={path} />);
    }
    return (
      <View style={[styles.starContainer, {marginLeft: 8}]}>
        {individualrating}
      </View>
    );
  };

  const renderReviews = ({item}) => {
    var date = new Date(item.date_created);
    return (
      <View
        style={{
          // backgroundColor: 'black',
          borderColor: 'black',
          borderWidth: 1,
          opacity: 0.8,
          padding: 12,
          marginVertical: 10,
          borderRadius: 8,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/avatar.jpg')}
            style={{width: 30, height: 30}}
          />
          <View>
            <Text style={styles.reviewsTitle}>
              {item.name}, {date.toLocaleDateString()}
            </Text>
            <View style={{flexDirection: 'row'}}>
              {individualrating(item.rating)}
              <Text style={{marginLeft: 5, marginTop: -2, fontWeight: '600'}}>
                ({item.rating})
              </Text>
            </View>
          </View>
        </View>

        <Text>{item.review}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.images[0].src}} style={styles.imageStyle} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemCategory}>
          Category: {item.categories[0].name}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.itemPrice}>Rs. {Number(item.price)}</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => props.AddToCart(item)}>
            <Text style={styles.buttonText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={[styles.itemPrice, {color: 'black'}]}>Quantity: </Text>
          <NumericInput
            onChange={value => console.log(value)}
            totalWidth={200}
            totalHeight={40}
            valueType="real"
            minValue={0}
            rounded
            // textColor="white"
            separatorWidth={0}
            iconStyle={{color: 'white'}}
            containerStyle={{marginVertical: 10}}
            rightButtonBackgroundColor={Colors.Olive}
            leftButtonBackgroundColor={Colors.Olive}
          />
        </View>

        <Text
          style={
            item.short_description ? styles.itemDescription : {display: 'none'}
          }>
          {item.short_description}
        </Text>

        <View style={styles.horizontalLine}></View>
        {/* <View>
          <Text style={styles.heading}>Specifications </Text>
          <FlatList
            horizontal={false}
            data={item.Specification.rows}
            renderItem={renderRow}
            keyExtractor={item => item.id}
          />
        </View> */}
        <View>
          <Text style={styles.heading}>Reviews</Text>
          <View style={styles.horizontalLine}></View>
          {item.average_rating != '0.00' ? (
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  color: Colors.LightGray,
                  fontSize: 20,
                }}>
                Overall Rating
              </Text>
              <Text
                style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold'}}>
                {item.average_rating}
              </Text>
              <View style={styles.starContainer}>{stars}</View>
              {item.rating_count > 1 ? (
                <Text
                  style={{
                    textAlign: 'center',
                    color: Colors.LightGray,
                    fontSize: 20,
                  }}>
                  based on {item.rating_count} reviews
                </Text>
              ) : (
                <Text
                  style={{
                    textAlign: 'center',
                    color: Colors.LightGray,
                    fontSize: 17,
                  }}>
                  based on {item.rating_count} review
                </Text>
              )}
              <FlatList
                horizontal={false}
                data={Reviews}
                renderItem={renderReviews}
                keyExtractor={item => item.id}
              />
            </View>
          ) : (
            <View style={{padding: 12, marginVertical: 10, borderRadius: 8}}>
              <Text style={styles.reviews}>There are no reviews yet.</Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    padding: 15,
  },
  starContainer: {
    // backgroundColor: '#FF00FF',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  imageContainer: {
    height: 250,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  textContainer: {
    marginVertical: 15,
  },
  itemName: {
    // color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
  },
  itemPrice: {
    color: Colors.Olive,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  itemDescription: {
    color: 'black',
    fontSize: 17,
    marginVertical: 10,
    lineHeight: 22,
    // letterSpacing: 1,
  },
  itemCategory: {
    // color: 'white',
    fontSize: 15,
  },
  buttonContainer: {
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: Colors.Olive,
    padding: 12,
    borderRadius: 10,
    right: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.VeryDarkGray,
    marginVertical: 5,
  },
  heading: {
    // color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: Colors.VeryDarkGray,
    fontWeight: '500',
  },
  data: {
    color: 'white',
    marginVertical: 3,
  },
  reviewsTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  image: {
    width: 25,
    height: 25,
  },
  ratingImage: {
    width: 15,
    height: 15,
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
    GetProducts: productId => dispatch(getProductById(productId)),
    GetReviews: productId => dispatch(getReviewsOfProduct(productId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
