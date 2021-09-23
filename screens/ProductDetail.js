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


const ProductDetail = props => {
  const item = props.route.params.item;
  const Specification = {
      rows:[
          {id:'1', title:'Producent', data:'Baseus'},
          {id:'2', title:'Name', data:'Baseus Mini White Cable USB For type C 3A 1m White'},
          {id:'3', title:'Product Code', data:'	CAMSW-02'},
          {id:'4', title:'Material', data:'TPE'},
          {id:'5', title:'Color', data:'White'},
          {id:'6', title:'Length', data:'1 m'},
          {id:'7', title:'Connector', data:'USB to type C'},
          {id:'8', title:'Charging Current', data:'3A'},
          {id:'9', title:'Transmission Rate', data:'480 Mb/s'},
      ]
  }

  const renderRow = ({item}) => {
      return(
    <View style={{flexDirection:'row', marginVertical:5}}>
                <Text style={styles.subtitle}>{item.title}: </Text>
                <Text style={styles.data}> {item.data}</Text>
    </View>
      )
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.imageStyle} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.itemPrice}>{item.price}</Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text style={styles.itemCategory}>Category: {item.category}</Text>
        <View style={styles.horizontalLine}></View>
        <View>
            <Text style={styles.heading}>Specifications </Text>
            <FlatList
            horizontal={false}
            data={Specification.rows}
            renderItem={renderRow}
            keyExtractor={item => item.id}
          />
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
  heading:{
      color:'white',
      fontSize:20,
      fontWeight:'bold',
      textAlign:'center'
  },
  subtitle:{
      fontSize:18,
      color:Colors.Yellow,
      fontWeight:'500'
  },
  data:{
      color:'white',
      marginVertical:3,
  }
});

export default ProductDetail;
