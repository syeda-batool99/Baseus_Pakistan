import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/FontAwesome';

const Header = (props) => {
    return(
        <View style={styles.background}>
            <View style={styles.layout}>
                <MaterialIcons 
                    name='bars'
                    size={28}
                    color={'black'}
                />
                <Text style={styles.heading}>Baseus Pakistan</Text>
                <MaterialIcons 
                    name='shopping-bag'
                    size={25}
                    color={'black'}
                />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    background: {
        backgroundColor: '#FFF000'
    },
    layout: {
        marginVertical: 15,
        paddingHorizontal: 15,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    heading:{
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default Header;
