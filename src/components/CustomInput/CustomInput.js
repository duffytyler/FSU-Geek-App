import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input';
const CustomInput = ({value,setValue, placeholder,isPassword, isStatic}) =>{
    return(
        <View style={styles.container}>
                <FloatingLabelInput
                label={placeholder}
                value={value}
                onChangeText={value => setValue(value)}
                isPassword = {isPassword}
                staticLabel= {isStatic}
                /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    alignItems:'center',
    backgroundColor: "#D4D4D4",
    borderRadius: 30,
    justifyContent:'center',
    width: "85%",
    maxWidth:450,
    height: 65,
    marginBottom:30,
    },
    input:{
        fontSize:18
    },

});

export default CustomInput