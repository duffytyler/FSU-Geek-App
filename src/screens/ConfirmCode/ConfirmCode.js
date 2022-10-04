import { View, StyleSheet, Text, ImageBackground, Alert } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import Background from '../../../assets/images/Home_Screen.jpg';
import Titles from '../../components/Titles/Titles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';
const ConfirmCode = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const {control, handleSubmit, watch} = useForm({defaultValues: 
      {email: route?.params?.email},
    });
    const email = watch('email');
    const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const onSubmit = async data => {
    try{
      await Auth.confirmSignUp(data.email, data.ccode);
      navigation.navigate('Login');
    }catch(e)
    {
      Alert.alert("Oops", e.message);
    }
  }
    const backToLogin = () => {
      console.warn("Go back to login");
      navigation.navigate('Login');
    }
    const onResend = async () => {
      try{
        await Auth.resendSignUp(email);
        Alert.alert('Succes', 'Code was resent to your email');
      }catch(e)
      {
        Alert.alert("Oops", e.message);
      }
    }
    return (
    <ImageBackground source= {Background} resizeMode = "cover" style = {{width:"100%", height:"100%"}}>
     <View style= {styles.container}>
      <Titles text = "Enter Confirmation Code" />
      <CustomInput 
      name="email"
      placeholder="EMAIL"
      rules ={{required: "Email is required", pattern:EMAIL_REGEX}}
      control={control}
      />

      <CustomInput 
      name="ccode"
      placeholder="CONFIRMATION CODE"
      rules ={{required: "Code is required"}}
      isPassword
      control={control}
      />
      <CustomButton onPress={handleSubmit(onSubmit)} text = "SUBMIT"/>
      <CustomButton onResend={handleSubmit(onResend)} type = "TERTIARY" text = "Didn't receive a code? Resend code" />
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

export default ConfirmCode