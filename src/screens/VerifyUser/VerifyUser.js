import { View, StyleSheet, Text, ImageBackground, Alert } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import Background from '../../../assets/images/Home_Screen.jpg';
import Titles from '../../components/Titles/Titles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';
const VerifyUser = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const {control, handleSubmit, watch} = useForm({defaultValues: 
      {username: route?.params?.username},
    });
    const email = watch('username');
    const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const onSubmit = async data => {
    try{
      await Auth.resendSignUp(data.username);
      navigation.navigate('SignIn',{screen:'VerifyCode'});
    }catch(e)
    {
      Alert.alert("Something went wrong", e.message);
    }
  }
    const backToLogin = () => {
      navigation.navigate('SignIn',{screen:'Login'});
    }
    return (
    <ImageBackground source= {Background} resizeMode = "cover" style = {{width:"100%", height:"100%"}}>
     <View style= {styles.container}>
      <Titles text = "Enter Email" />
      <CustomInput 
      name="username"
      placeholder="EMAIL"
      rules ={{required: "Email is required", pattern:EMAIL_REGEX}}
      control={control}
      />

    
      <CustomButton onPress={handleSubmit(onSubmit)} text = "SUBMIT"/>
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

export default VerifyUser