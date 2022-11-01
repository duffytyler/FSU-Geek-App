import { View, StyleSheet, ImageBackground, Alert } from 'react-native'
import {React} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import Background from '../../../assets/images/Home_Screen.jpg';
import Titles from '../../components/Titles/Titles';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form'
import { Auth } from 'aws-amplify';
const ResetPassword = () => {
  const {control, handleSubmit, watch} = useForm();
    const navigation = useNavigation();
    const pwd = watch('password');
    const onSubmit = async data => {
      try
      {
        await Auth.forgotPasswordSubmit(data.username ,data.ccode, data.password);
        navigation.navigate('SignIn',{screen:'Login'});
      }
      catch(e)
      {
        Alert.alert('Something went wrong.', e.message)
      }
      }
      const backToLogin = () => {
        navigation.navigate('SignIn',{screen:'Login'});
      }
    return (
    <ImageBackground source= {Background} resizeMode = "cover" style = {{width:"100%", height:"100%"}}>
     <View style= {styles.container}>
      <Titles text = "Reset Password" />

      <CustomInput 
      name="ccode"
      placeholder="CONFIRMATION CODE"
      rules ={{required: "Code is required"}}
      isPassword
      control={control}
      />

      <CustomInput 
      name="password"
      placeholder="PASSWORD"
      rules ={{required: "Password is required", minLength: 
      {value:8, 
        message:"Password does not meet length requirement (8)"},
      validate:
      {
      upper: value => UPPER_REGEX.test(value) ||
      "Password must contain at least one upper case letter.",
      lower:
      value => LOWER_REGEX.test(value) ||
      "Password must contain at least one lower case letter.",
      number:
      value => NUMBER_REGEX.test(value) ||
     "Password must contain at least one number.",
      special:
      value => SPECIAL_REGEX.test(value) ||
      "Password must contain at least one special character."}
      }}
      isPassword
      control={control}
      />
      
     <CustomInput 
      name="vpassword"
      placeholder="RE-ENTER PASSWORD"
      rules ={{required: "Password is required",
        validate: value => value == pwd  || 'Passwords do not match'
      }}
      isPassword
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