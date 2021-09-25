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
import {Button} from 'react-native-paper';
import * as Colors from '../assets/Colors/index';
import NumericInput from 'react-native-numeric-input';

const ProductDetail = props => {
  const item = props.route.params.item;

  const renderRow = ({item}) => {
    return (
      <View style={{flexDirection: 'row', marginVertical: 5, width: '90%'}}>
        <Text style={styles.subtitle}>{item.title}: </Text>
        <Text style={styles.data}> {item.data}</Text>
      </View>
    );
  };

  const renderReviews = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          opacity: 0.8,
          padding: 12,
          marginVertical: 10,
          borderRadius: 8,
        }}>
        <Text style={styles.reviewsTitle}>
          {item.username}, {item.date}
        </Text>
        <Text>{item.text}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.imageStyle} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.itemPrice}>Rs. {item.price}</Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <Text style={styles.itemPrice}>Quantity: </Text>
          <NumericInput
            onChange={value => console.log(value)}
            totalWidth={200}
            totalHeight={40}
            valueType="real"
            minValue={0}
            rounded
            textColor="white"
            separatorWidth={0}
            iconStyle={{color: 'white'}}
            containerStyle={{marginVertical: 10}}
            rightButtonBackgroundColor={Colors.Olive}
            leftButtonBackgroundColor={Colors.Olive}
          />
        </View>
        <Text
          style={item.description ? styles.itemDescription : {display: 'none'}}>
          {item.description}
        </Text>
        

        <Text style={styles.itemCategory}>Category: {item.category}</Text>
        <View style={styles.horizontalLine}></View>
        <View>
          <Text style={styles.heading}>Specifications </Text>
          <FlatList
            horizontal={false}
            data={item.Specification.rows}
            renderItem={renderRow}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.horizontalLine}></View>
        <View>
          <Text style={styles.heading}>Reviews</Text>
          {item.reviews ? (
            <View>
              <FlatList
                horizontal={false}
                data={item.reviews}
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
    backgroundColor: Colors.VeryDarkGray,
    padding: 15,
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
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
  },
  itemPrice: {
    color: Colors.Yellow,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  itemDescription: {
    color: 'white',
    fontSize: 17,
    marginVertical: 10,
    lineHeight: 22,
    letterSpacing: 1,
  },
  itemCategory: {
    color: 'white',
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
    backgroundColor: Colors.Yellow,
    marginVertical: 10,
  },
  heading: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: Colors.Yellow,
    fontWeight: '500',
  },
  data: {
    color: 'white',
    marginVertical: 3,
  },
  reviews: {
    color: 'white',
  },
  reviewsTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
});

export default ProductDetail;
