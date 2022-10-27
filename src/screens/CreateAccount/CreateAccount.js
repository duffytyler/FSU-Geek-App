import React,{useState} from 'react';
import { View,Text,ImageBackground, StyleSheet, Alert, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import Background from '../../../assets/images/Home_Screen.jpg';
import Titles from '../../components/Titles/Titles';
import { useNavigation} from '@react-navigation/native';
import { useForm } from 'react-hook-form'
import { Auth } from 'aws-amplify';
const CreateAccount = () => {
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');
  const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const navigation = useNavigation();
  const onCreateAcc = async data => {
    const {email, username, password,given_name,family_name} = data; 
    try
    {
      await Auth.signUp(
        {
          username,
          password,
          attributes: {email, given_name, family_name}
        }
      );
      navigation.navigate('SignIn',{screen:'ConfirmationCode'}, {email});
    }catch(e)
    {
      Alert.alert('Something went wrong.', e.message);
    }
  }
  const backToLogin = () => {
    navigation.navigate('SignIn',{screen:'Login'});
  }
  const onTOS = () => {
    console.warn("TOS");
  }
  return(
    
    <ImageBackground source= {Background} resizeMode = "cover" style = {{width:"100%", height:"100%"}}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <Titles text = "Create Account" />
      
      <CustomInput 
      name="given_name"
      placeholder="FIRST NAME"
      rules ={{required: "First name is required"}}
      control={control}
      />

      <CustomInput 
      name="family_name"
      placeholder="LAST NAME"
      rules ={{required: "Last name is required"}}
      control={control}
      />

      <CustomInput 
      name="username"
      placeholder="EMAIL"
      rules ={{required: "Email is required", pattern:EMAIL_REGEX}}
      control={control}
      />

      <CustomInput 
      name="password"
      placeholder="PASSWORD"
      rules ={{required: "Password is required", minLength: 
      {value:7, 
        message:"Password does not meet length requirement (7)"}}}
      isPassword
      control={control}
      />

      <CustomInput 
      name="vpassword"
      placeholder="RE-ENTER PASSWORD"
      rules ={{required: "Password is required", minLength: 
      {value:7, 
        message:"Password does not meet length requirement (7)"},
        validate: value => value == pwd  || 'Passwords do not match'
      }}
      isPassword
      control={control}
      />

      <Text style={{color:'white', paddingTop:15, paddingBottom: 30}}>I accept the{' '} <Text style={styles.link} onPress={onTOS}>Terms of Use</Text></Text>
      <CustomButton onPress={handleSubmit(onCreateAcc)} text = "CREATE ACCOUNT"/>
      <CustomButton type = "TERTIARY" onPress={backToLogin} text = "Back to sign in"/>
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
  link:{
    color: 'white',
    textDecorationLine: 'underline',
    paddingBottom: 15,
  },


})
export default CreateAccount