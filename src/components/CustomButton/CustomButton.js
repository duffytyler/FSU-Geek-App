import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'

const CustomButton = ({ type = "PRIMARY", onPress, text,  }) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container:{
        width: "75%",
        maxWidth:450,
        borderRadius: 8,
        height: 50,
        marginBottom:25,
        alignItems: "center",
        justifyContent: "center",
        
    },
    container_MENU:
    {
        marginBottom:5,   
    },
    container_PRIMARY:
    {
        marginTop:15,
        backgroundColor: "grey",
    },
    container_TERTIARY:
    {
        width:'65%',
        marginBottom: 5
    },
    container_LOGOUT:
    {
        marginTop:60,

    },
    text:{},
    text_MENU:
    {
        fontFamily:'baskvill',
        fontSize:29,
        color:'#FAFAFA',
    },
    text_PRIMARY:{
        fontFamily:'MontserratB',
        color:"white",
        fontSize:20,
    },
    text_TERTIARY:{
        color:"white",
        textDecorationLine:"underline",
    },
    text_LOGOUT:
    {
        color:'white',
        fontSize:24,
        fontFamily:'imprintMTS',
        textDecorationLine:'underline',
    }
});
export default CustomButton