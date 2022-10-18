import React,{useState} from 'react';
import { View,Text,ImageBackground,Image, useWindowDimensions, StyleSheet, Alert, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import Background from '../../../assets/images/Home_Screen.jpg';
import Logo from '../../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { useForm } from 'react-hook-form'
const Login = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const{
    control,
    handleSubmit,
    formState: {errors}
  } = useForm();

  console.log(errors);

  const [loading,setLoading] = useState(false);
  const onSignIn = async (data) => {
   if(loading) {
    return;
   }

   setLoading(true);
   try{
    const response = await Auth.signIn(data.username, data.password);
    console.log(response);
   } catch(e)
   {
      Alert.alert('Invalid Email and/or Password!', e.message);
   }
   setLoading(false);
  };

  const onForgot = () => {
    navigation.navigate('SignIn',{screen:'ForgotPassword'});
  };

  const onNewAcc = () => {
    navigation.navigate('SignIn',{screen:'CreateAccount'});
  };
  
  return(
    <ImageBackground source= {Background} resizeMode = "cover" style = {{width:"100%", height:"100%"}}>
      <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <Image source = {Logo} style={[styles.logo, {height: height *0.3}]} resizeMode ="contain"/>
      <Text style={styles.plaintext}>FSU GEEK</Text>
      
      <CustomInput 
      name="username"
      placeholder="EMAIL"
      rules ={{required: "Email is required"}}
      control={control}
      />

      <CustomInput
      name = "password"
      placeholder="PASSWORD"
      control = {control}
      rules={{required: "Password is required"}}
      isPassword = {true}
      />
      <CustomButton onPress={handleSubmit(onSignIn)} text = {loading ? "Loading..." : "SIGN IN"}/>
      <CustomButton type = "TERTIARY" onPress={onForgot} text = "Forgot Password?" />
      <CustomButton type = "TERTIARY" onPress={onNewAcc} text = "Don't have an account? Sign Up" />
    </View>
    </ScrollView>
    </ImageBackground>
   
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent: "center",
  },
  logo:{
    marginTop:'7%',
    marginBottom:40,
    width: '40%',
    maxWidth: 200,
    maxHeight: 200,
  },
  plaintext: {
    color: "white",
    fontSize: 50,
    fontFamily: 'imprintMTS',
    marginBottom:50,
  },

})
export default Login