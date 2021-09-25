import React, {useState} from 'react';
import {StyleSheet, View, Text, Linking, ScrollView, TextInput} from 'react-native';
import * as Colors from '../assets/Colors/index';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import * as yup from 'yup';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Contact = () => {
   
  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>Contact Us</Text>
        <Text style={{color: 'white', fontSize: 22}}>Contact Info</Text>
        <View style={{marginTop: 30}}>
          <Text style={styles.subheading}>For Any Query Or Complains</Text>
          <View style={{flexDirection: 'row'}}>
            <MaterialIcons name="call" size={23} color={'white'} />
            <Text
              onPress={() => {
                Linking.openURL('tel:+92 320 7862032');
              }}
              style={styles.data}>
              {' '}
              +92 320 7862032
            </Text>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <Text style={styles.subheading}>Become A Dealer</Text>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <MaterialCommunityIcons
              name="office-building"
              size={23}
              color={'white'}
            />
            <Text style={styles.data}> Office Timings Only</Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <MaterialCommunityIcons name="clock" size={23} color={'white'} />
            <Text style={styles.data}> 09:00 AM - 05:00 PM</Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <MaterialIcons name="call" size={23} color={'white'} />
            <Text
              onPress={() => {
                Linking.openURL('tel:042 37234116');
              }}
              style={styles.data}>
              {' '}
              042 37234116
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <MaterialIcons name="call" size={23} color={'white'} />
            <Text
              onPress={() => {
                Linking.openURL('tel:+92 300 9411000');
              }}
              style={styles.data}>
              {' '}
              +92 300 9411000
            </Text>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <Text style={styles.subheading}>Head Office</Text>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <MaterialCommunityIcons
              name="office-building"
              size={23}
              color={'white'}
            />
            <Text style={styles.data}> Shop # 23-24, 1st Floor, Hassan Centre, Hall Road Lahore, Pakistan.</Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <FontAwesome name="envelope" size={21} color={'white'} />
            <Text
              onPress={() => {
                Linking.openURL('mailto:info@baseus.com.pk');
              }}
              style={styles.data}>
              {' '}
              info@baseus.com.pk
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
          <MaterialCommunityIcons name="clock" size={23} color={'white'} />
            <Text style={styles.data}> 11:00 AM - 08:00 PM</Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <MaterialIcons name="call" size={23} color={'white'} />
            <Text
              onPress={() => {
                Linking.openURL('tel:042 37116660');
              }}
              style={styles.data}>
              {' '}
              042 37116660
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <MaterialIcons name="call" size={23} color={'white'} />
            <Text
              onPress={() => {
                Linking.openURL('tel:+92 322 4274068');
              }}
              style={styles.data}>
              {' '}
              +92 322 4274068
            </Text>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <Text style={styles.subheading}>Branch # 1</Text>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <MaterialCommunityIcons
              name="office-building"
              size={23}
              color={'white'}
            />
            <Text style={styles.data}> Shop # 20-C Ground Floor Goldcrest Mall DHA Phase 4 Lahore, Pakistan.</Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <FontAwesome name="envelope" size={21} color={'white'} />
            <Text
              onPress={() => {
                Linking.openURL('mailto:info@baseus.com.pk');
              }}
              style={styles.data}>
              {' '}
              info@baseus.com.pk
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
          <MaterialCommunityIcons name="clock" size={23} color={'white'} />
            <Text style={styles.data}> 11:00 AM - 10:00 PM</Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <MaterialIcons name="call" size={23} color={'white'} />
            <Text
              onPress={() => {
                Linking.openURL('tel:+92 301 4757191');
              }}
              style={styles.data}>
              {' '}
              +92 301 4757191
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <MaterialIcons name="call" size={23} color={'white'} />
            <Text
              onPress={() => {
                Linking.openURL('tel:+92 321 8411864');
              }}
              style={styles.data}>
              {' '}
              +92 321 8411864
            </Text>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <Text style={styles.subheading}>Branch # 2</Text>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <MaterialCommunityIcons
              name="office-building"
              size={23}
              color={'white'}
            />
            <Text style={styles.data}> CSD Shoping Complex, Aziz Bhatti Road Sarwar Colony Lahore, Pakistan.</Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <FontAwesome name="envelope" size={21} color={'white'} />
            <Text
              onPress={() => {
                Linking.openURL('mailto:info@baseus.com.pk');
              }}
              style={styles.data}>
              {' '}
              info@baseus.com.pk
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
          <MaterialCommunityIcons name="clock" size={23} color={'white'} />
            <Text style={styles.data}> 11:00 AM - 10:00 PM</Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <MaterialIcons name="call" size={23} color={'white'} />
            <Text
              onPress={() => {
                Linking.openURL('tel:+92 322 4114829');
              }}
              style={styles.data}>
              {' '}
              +92 322 4114829
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <MaterialIcons name="call" size={23} color={'white'} />
            <Text
              onPress={() => {
                Linking.openURL('tel:+92 324 4065004');
              }}
              style={styles.data}>
              {' '}
              +92 324 4065004
            </Text>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <Text style={styles.subheading}>Branch # 3</Text>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <MaterialCommunityIcons
              name="office-building"
              size={23}
              color={'white'}
            />
            <Text style={styles.data}> Ground Floor DHA Phase 2, 12 - Haly Tower Lahore, Pakistan.</Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <FontAwesome name="envelope" size={21} color={'white'} />
            <Text
              onPress={() => {
                Linking.openURL('mailto:info@baseus.com.pk');
              }}
              style={styles.data}>
              {' '}
              info@baseus.com.pk
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
          <MaterialCommunityIcons name="clock" size={23} color={'white'} />
            <Text style={styles.data}> 11:00 AM - 10:00 PM</Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <MaterialIcons name="call" size={23} color={'white'} />
            <Text
              onPress={() => {
                Linking.openURL('tel:042 32020243');
              }}
              style={styles.data}>
              {' '}
              042 32020243
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <MaterialIcons name="call" size={23} color={'white'} />
            <Text
              onPress={() => {
                Linking.openURL('tel:+92 300 9481343');
              }}
              style={styles.data}>
              {' '}
              +92 300 9481343
            </Text>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <Text style={styles.subheading}>Branch # 4</Text>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <MaterialCommunityIcons
              name="office-building"
              size={23}
              color={'white'}
            />
            <Text style={styles.data}> 733-B Linked Baba Sports. Tipu Chowk Main Market Satellite Town Gujranwala, Pakistan.</Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <FontAwesome name="envelope" size={21} color={'white'} />
            <Text
              onPress={() => {
                Linking.openURL('mailto:info@baseus.com.pk');
              }}
              style={styles.data}>
              {' '}
              info@baseus.com.pk
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
          <MaterialCommunityIcons name="clock" size={23} color={'white'} />
            <Text style={styles.data}> 11:00 AM - 10:00 PM</Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <MaterialIcons name="call" size={23} color={'white'} />
            <Text
              onPress={() => {
                Linking.openURL('tel:+92 345 6541991');
              }}
              style={styles.data}>
              {' '}
              +92 345 6541991
            </Text>
          </View>
        </View>
        <Text style={{color: 'white', fontSize: 22, marginVertical:25}}>Send Us a Message</Text>
        <View>
        <Formik
              initialValues={{name: '', email:'', subject:'', message:'' }}
              onSubmit={(values, actions) => {
                console.log(values)
              }}>
              {(propss) => (
                <View>
                  <View
                    style={{
                      flexDirection: 'column',
                      alignContent: 'space-around',
                    }}>
                    <View style={{marginBottom: 7}}>
                          <TextInput
                            style={styles.input}
                            placeholder=" Name"
                            onChangeText={propss.handleChange('name')}
                            value={propss.values.name}
                            onBlur={propss.handleBlur('name')}
                          />
                    </View>
                    <View style={{marginBottom: 7}}>
                          <TextInput
                            style={styles.input}
                            placeholder=" Email"
                            onChangeText={propss.handleChange('email')}
                            value={propss.values.email}
                            onBlur={propss.handleBlur('email')}
                          />
                    </View>
                    <View style={{marginBottom: 7}}>
                          <TextInput
                            style={styles.input}
                            placeholder=" Subject"
                            onChangeText={propss.handleChange('subject')}
                            value={propss.values.subject}
                            onBlur={propss.handleBlur('subject')}
                          />
                    </View>
                    <View style={{marginBottom: 7}}>
                          <TextInput
                            style={styles.input}
                            numberOfLines={4}
                            multiline={true}
                            placeholder=" Message"
                            onChangeText={propss.handleChange('message')}
                            value={propss.values.message}
                            onBlur={propss.handleBlur('message')}
                          />
                    </View>
                    
                  </View>
                  <TouchableOpacity
                    onPress={propss.handleSubmit}
                    style={styles.btnContainer}
                  >
                      <Text style={styles.button}>Send Message</Text>
                  </TouchableOpacity>
                  
                </View>
              )}
            </Formik>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.VeryDarkGray,
    flex: 1,
  },
  container: {
    // marginVertical: 0,
    paddingHorizontal: 15,
  },
  heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  subheading: {color: 'white', fontSize: 22, marginBottom: 10},
  data: {color: 'white', fontSize: 18, color: Colors.LightYellow, width:'90%'},
  input:{
      backgroundColor:'#ececec',
      borderRadius:8
  },
  button:{
    backgroundColor: Colors.Yellow,
    textAlign: 'center',
    borderRadius: 12,
    fontStyle: 'italic',
    padding:10
  },
  btnContainer:{
    marginBottom:10,
    width:'50%'
  }
});

export default Contact;
