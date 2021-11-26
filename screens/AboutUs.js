import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as Colors from '../assets/Colors/index';

const AboutUs = () => {
  return (
    <ScrollView style={styles.background}>
      <Text style={styles.heading}>About Us</Text>
      <Text style={styles.subheading}>Insisting on Design Innovation</Text>
      <Text style={styles.data}>
        Founded by CU in 2011, Baseus is a consumer electronic brand under
        Shenzhen Baseus Technology Co., Limited which integrates research and
        development, design, production and sales. Baseus is simplified from the
        brand slogan “Base on user”, which represents that the brand insists on
        thinking from the perspective of users, and the products are designed
        with high aesthetic and practical value.{'\n'}10 years of growth has
        enabled Baseus to become a leading enterprise in China’s consumer
        electronics industry, and has always adhered to the design philosophy of
        design innovation and practical aesthetic, focusing on the new
        technology and environmentally friendly materials, while integrating
        fashion elements into product.
      </Text>
      <Text style={styles.subheading}>Technical and Quality Strength</Text>
      <Text style={styles.data}>
        In addition to innovation ability, Baseus also focuses on technical and
        quality strength, seeking excellent technical partners in various fields
        and jointly developing more competitive products.{'\n'}In 2019, Baseus
        Laboratory was established with 35 professional quality engineers
        providing technical support. For each and every product of Baseus, it
        will go through the quality inspection of Baseus Laboratory before being
        delivered to the market, so as to ensure that the product can maintain
        excellent performance in various use environments.{'\n'}At the same
        time, in order to ensure the smooth sale of products to all parts of the
        world, we conducted the localization certification for different
        products in various countries with a view to ensure that the quality of
        products can pass the tests in all countries in the world.{'\n'}
      </Text>
      <Text style={styles.subheading}>
        Enrich People’s Life with Consumer Electronics
      </Text>
      <Text style={styles.data}>
        At the beginning when Baseus was founded, most products were mobile
        phone accessories. However, with the gradual expansion of the market and
        the iterative updating of products, the original simple products are
        difficult to meet the needs of the vast number of users, and timely
        transformation is imminent. In 2019, Baseus entered into the Era 3.0 and
        began to lay out new product lines, so as to open a diversified
        development model.{'\n'}At present, Baseus has established 11 complete
        product lines. With one Baseus as the center, it is also developing and
        producing multiple categories of products such as Baseus Gamo, Baseus
        Audio, Baseus Lighting, Baseus Automotive and Baseus Home Appliance so
        as to continuously meet customers’ demand for intelligent products.
        {'\n'}
      </Text>
      <Text style={styles.subheading}>Brand Flagship Stores</Text>
      <Text style={styles.data}>
        Brand Flagship Stores. While continuously expanding online sales
        channels, offline flagship stores are also in the process of
        preparation. In 2011, the first Baseus Flagship store opened in
        Guangzhou.{'\n'}From the front store logo to the interior layout, the
        overall style is simple and stylish. The high quality products,
        excellent product design and good experience makes Baseus popular among
        users.{'\n'}In the past year, the flagship store has spread all over
        Beijing, Guangzhou and Shenzhen. The booming momentum has enabled the
        company to quickly spread its products to domestic and foreign
        markets.Baseus has become the favourites of many users and is well
        welcome by major stores at home and abroad.
      </Text>
      <Text style={styles.subheading}>
        Baseus Flagship Stores{'\n'}in The World
      </Text>
      <Text style={styles.data}>
        In August 2020,Baseus have covered more than180 countries and regions
        around the world with 600 global physical stores and more than 400
        flagship stores. It will continue to expand flagship stores and it is
        expected to reach 1000 by 2022.{'\n'}
      </Text>
      <Text style={styles.subheading}>
        More Diversified, Smarter{'\n'}and Younger
      </Text>
      <Text style={styles.data}>
        Now it’s the era of 1+C for Baseus. We will stick to one Baseus as the
        center and develop multiple categories, so as to constantly meet the
        needs of users in various intelligent scenarios.{'\n'}
        {'\n'}
      </Text>
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
    paddingHorizontal: 15,
  },
  heading: {
    // color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  subheading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  data: {
    fontSize: 18,
    marginHorizontal: 25,
    textAlign: 'justify',
    lineHeight: 25,
  },
});

export default AboutUs;
