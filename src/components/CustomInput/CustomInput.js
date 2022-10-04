import React from 'react'
import { Text, View, StyleSheet , Dimensions} from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Controller } from 'react-hook-form'
const entireScreenWidth = Dimensions.get('window').width;
var screenWidth = entireScreenWidth
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
                render= {({field: {value, onChange}, fieldState: {error}}) =>
                <>
                {error && (
                    <View style={{width:screenWidth}}>
                    <Text style={styles.error}>{error.message || 'Error'}</Text>
                    </View>
                 )}
                <View style={[styles.container, {marginBottom: error ? 2 : 30}, {borderColor: error ? 'red' : '#d4d4d4',}]}>
                    <FloatingLabelInput 
                    value = {value} 
                    onChangeText = {onChange}  
                    label={placeholder} 
                    isPassword={isPassword}
                    autoCapitalize = 'none'
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
    error:
    {
        marginLeft:'7%',
        color:'red', 
    },

});

export default CustomInput