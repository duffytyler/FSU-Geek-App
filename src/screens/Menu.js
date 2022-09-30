import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Image, StyleSheet, Text, View, TextInput, Button,TouchableOpacity, Pressable, TouchableHighlightBase } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from "expo-font";
//import Apploading from "expo-app-loading";
import { useFonts} from 'expo-font';



  
  

const image1 = { uri: "https://cdn.discordapp.com/attachments/1011816280740876391/1021582027524427858/Home_Screen.jpg" };
const Stack = createNativeStackNavigator(); 





const Menu = ({navigation}) => (


    <View style={styles.container}>
      <ImageBackground source={image1} style={{width: '100%', height: '100%'}}>

        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text1}>Home</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Career')}>
          <Text style={styles.text1}>Career Info</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Advising')}>
          <Text style={styles.text1}>Advising Help</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Scholarships')}>
          <Text style={styles.text1}>STEM Scholarships</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('AMC')}>
          <Text style={styles.text1}>AMC Programming</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Discord')}>
          <Text style={styles.text1}>Meet Ups | Discord Channels</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text2}>LOG OUT</Text>
        </Pressable>
        
      </ImageBackground>
    </View>
    
  );
  
  
const styles = StyleSheet.create({
  container: {
   flex: 1
  },
  image1: {
    justifyContent: "center"
  },
  text1: {
    flex: 1,
    color: "white",
    fontSize: 29,
    padding: 35,
    top: 130,
    left: 10,
    right: 10,
    textAlign: 'center',
    fontFamily: 'Cormorant_SC',
  },
  text2: {
    color: "white",
    fontSize: 29,
    padding: 90,
    top: 150,
    left: 10,
    right: 10,
    textAlign: 'center',
    
    fontFamily: 'CormorantSC-Medium',
    textDecorationLine: 'underline',
  },
});

export default Menu;