import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';

const WhatsApp = () => {
  const [mobileNo, setMobileNo] = useState('');
  const [message, setMessage] = useState('');

  const openWhatsApp = () => {
    let msg = message;
    let mobile = mobileNo;

    if (msg) {
      let url = 'whatsapp://send?text=' + message + '&phone=923368221414';
      Linking.openURL(url)
        .then(data => {
          console.log('WhatsApp Opened successfully ' + data);
        })
        .catch(() => {
          alert('Make sure WhatsApp installed on your device');
        });
    } else {
      alert('Please enter message to send');
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => openWhatsApp()}>
        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            right: 5,
            bottom: 5,
          }}>
          <Image
            style={{width: 50, height: 50, resizeMode: 'contain'}}
            source={require('../assets/Images/whatsappIcon.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default WhatsApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    padding: 10,
    // backgroundColor: '#ffffff',
  },
});
