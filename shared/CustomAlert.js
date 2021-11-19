import React, {useState} from 'react';
import {Modal, Text, Pressable, View, Platform, StyleSheet} from 'react-native';

const CustomAlert = props => {
  console.log('props in custom alert', props);
  const [androidDefaults, setAndroidDefaults] = useState({
    container: {
      backgroundColor:
        (props.android &&
          props.android.container &&
          props.android.container.backgroundColor) ||
        'red',
    },
    title: {
      color:
        (props.android && props.android.title && props.android.title.color) ||
        '#000000',
      fontFamily:
        (props.android &&
          props.android.title &&
          props.android.title.fontFamily) ||
        'initial',
      fontSize:
        (props.android &&
          props.android.title &&
          props.android.title.fontSize) ||
        22,
      fontWeight:
        (props.android &&
          props.android.title &&
          props.android.title.fontWeight) ||
        'bold',
    },
    message: {
      color:
        (props.android &&
          props.android.message &&
          props.android.message.color) ||
        '#000000',
      fontFamily:
        (props.android &&
          props.android.message &&
          props.android.message.fontFamily) ||
        'initial',
      fontSize:
        (props.android &&
          props.android.message &&
          props.android.message.fontSize) ||
        15,
      fontWeight:
        (props.android &&
          props.android.message &&
          props.android.message.fontWeight) ||
        'normal',
    },
    button: {
      color: '#387ef5',
      fontFamily: 'initial',
      fontSize: 16,
      fontWeight: '500',
      textTransform: 'uppercase',
      backgroundColor: 'transparent',
    },
  });

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(false);
      }}>
      <Pressable
        style={[
          Platform.OS === 'ios' ? styles.iOSBackdrop : styles.androidBackdrop,
          styles.backdrop,
        ]}
        onPress={() => props.setModalVisible(false)}
      />
      <View style={styles.alertBox}>
        {Platform.OS === 'ios' ? null : (
          <View style={[styles.androidAlertBox, androidDefaults.container]}>
            <Text style={[styles.androidTitle, androidDefaults.title]}>
              {props.title || 'Message'}
            </Text>
            <Text style={[styles.androidMessage, androidDefaults.message]}>
              {props.message || ''}
            </Text>
          </View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  iOSBackdrop: {
    backgroundColor: '#000000',
    opacity: 0.3,
  },
  androidBackdrop: {
    backgroundColor: '#232f34',
    opacity: 0.4,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  alertBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  androidAlertBox: {
    maxWidth: 280,
    width: '100%',
    margin: 48,
    elevation: 24,
    borderRadius: 2,
  },
  androidTitle: {
    margin: 24,
  },
  androidMessage: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
  },
});

export default CustomAlert;
