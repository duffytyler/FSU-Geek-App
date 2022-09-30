import { View, StyleSheet, ImageBackground } from 'react-native'
import {React, useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import Background from '../../../assets/images/Home_Screen.jpg';
import Titles from '../../components/Titles/Titles';
import { useNavigation } from '@react-navigation/native';
const ForgotPassword = () => {
    const [email,setEmail] = useState('');
    const navigation = useNavigation();
    const onSubmit = () => {
        console.warn("Submitted");
        navigation.navigate('ResetPassword');
      }
      const backToLogin = () => {
        console.warn("Go back to login");
        navigation.navigate('Login');
      }
    return (
    <ImageBackground source= {Background} resizeMode = "cover" style = {{width:"100%", height:"100%"}}>
    <View style= {styles.container}>
      <Titles text = "Forgot Password" />
      <CustomInput
      placeholder="EMAIL"
      value={email}
      setValue = {setEmail}
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
})

export default ForgotPassword