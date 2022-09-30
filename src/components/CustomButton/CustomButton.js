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
        width: "85%",
        maxWidth:450,
        borderRadius: 25,
        height: 50,
        marginBottom:25,
        alignItems: "center",
        justifyContent: "center",
        
    },
    container_PRIMARY:
    {
        marginTop:15,
        backgroundColor: "grey",
    },
    container_TERTIARY:
    {
        marginBottom: 5
    },
    text:{},
    text_PRIMARY:{
        fontFamily:'MontserratB',
        color:"white",
        fontSize:"20"
    },
    text_TERTIARY:{
        color:"white",
        textDecorationLine:"underline",
    }
});
export default CustomButton