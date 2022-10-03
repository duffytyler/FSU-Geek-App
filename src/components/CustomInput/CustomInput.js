import React from 'react'
import { Text, View, StyleSheet , Dimensions} from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Controller } from 'react-hook-form'
const entireScreenWidth = Dimensions.get('window').width;
if (entireScreenWidth >= 700)
{
  screenWidth = 525;
}
const CustomInput = ({
    control, 
    name, 
    rules,
    placeholder, 
    isPassword}) =>{
    return(
        
                <Controller 
                control = {control}
                name = {name}
                rules={rules}
                render= {({field: {value, onChange, onBlur}, fieldState: {error}}) =>
                <>
                <View style={[styles.container, {marginBottom: error ? 5 : 30}, {borderColor: error ? 'red' : '#d4d4d4',}]}>
                    <FloatingLabelInput 
                    value = {value} 
                    onChangeText = {onChange}  
                    label={placeholder} 
                    isPassword={isPassword}
                    containerStyles={{
                        width: '85%',
                        maxWidth:450,
                        borderWidth:3,
                        paddingHorizontal: 5,
                        backgroundColor: '#d4d4d4',
                        borderColor:'#d4d4d4',
                        borderRadius: 8,
                    }}
                    />  
                 </View>
                    {error && (
                    <Text style={{color:'red', alignSelf:'stretch', paddingLeft: '8%'}}>{error.message || 'Error'}</Text>
                 )}
                 </>
                }
                />
       
    )
}

const styles = StyleSheet.create({
    container:{
        width: '85%',
        maxWidth:450,
        borderWidth:5,
        paddingHorizontal: 5,
        backgroundColor: '#d4d4d4',
        borderColor: '#d4d4d4',
        borderRadius: 8,
        marginBottom:30,
        height: 65,
    },
    input:{
        fontSize:18
    },

});

export default CustomInput