import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import {React, useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import Background from '../../../assets/images/Home_Screen.jpg';
import Titles from '../../components/Titles/Titles';
import { useNavigation } from '@react-navigation/native';

const ResetPassword = () => {
    const [code,setCode] = useState('');
    const [password,setPassword] = useState('');
    const navigation = useNavigation();
    const onSubmit = () => {
        console.warn("Submitted");
        //validate
        navigation.navigate('Login');
      }
      const backToLogin = () => {
        console.warn("Go back to login");
        navigation.navigate('Login');
        
      }
    return (
    <ImageBackground source= {Background} resizeMode = "cover" style = {{width:"100%", height:"100%"}}>
     <View style= {styles.container}>
      <Titles text = "Reset Password" />
      <CustomInput
      placeholder="CONFIRMATION CODE"
      value={code}
      setValue={setCode}
      />
      <CustomInput
      placeholder="*NEW PASSWORD*"
      value={password}
      setValue={setPassword}
      isPassword = 'true'
      />
      <CustomButton onPress={onSubmit} text = "SUBMIT"/>
      <CustomButton onPress={backToLogin} text = "Back to sign in" type = "TERTIARY" />
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
      },
  title:{
    marginTop:100,
    fontFamily: 'imprintMTS',
    fontSize:24,
    color:'white',
    alignSelf: 'flex-start',
    marginLeft: 40,
    paddingBottom:25
  }
})

export default ResetPassword