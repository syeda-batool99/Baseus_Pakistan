import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Colors from '../assets/Colors/index'

const Header = (props) => {
    return(
        <View style={styles.background}>
            <View style={styles.layout}>
                <FontAwesome 
                    name='bars'
                    size={28}
                    color={'black'}
                />
                <Text style={styles.heading}>Baseus Pakistan</Text>
                <FontAwesome 
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
        backgroundColor: Colors.Yellow
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
