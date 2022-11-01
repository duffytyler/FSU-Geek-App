import React,{useState} from 'react';
import { View,Text,ImageBackground, StyleSheet, Alert, ScrollView, Dimensions} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import Background from '../../../assets/images/Home_Screen.jpg';
import Titles from '../../components/Titles/Titles';
import { useNavigation} from '@react-navigation/native';
import { useForm } from 'react-hook-form'
import { Auth } from 'aws-amplify';
import Checkbox from 'expo-checkbox';
const CreateAccount = () => {
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');
  const UPPER_REGEX = /(?=.*[A-Z])/;
  const LOWER_REGEX = /(?=.*[a-z])/;
  const NUMBER_REGEX = /(?=.*[0-9])/;
  const SPECIAL_REGEX = /(?=.*[@#$%^&+=])/;
  const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [isChecked, setChecked] = useState(false)
  const navigation = useNavigation();
  const onCreateAcc = async data => {
    const {email, username, password,given_name,family_name} = data; 
    try
    {
      if(isChecked)
      {
      await Auth.signUp(
        {
          username,
          password,
          attributes: {email, given_name, family_name}
        }
      );

      navigation.navigate('SignIn',{screen:'ConfirmationCode'}, {email});
      }
      else
      {
        Alert.alert('Something went wrong.', 'You must accept \nthe Terms of Service\n in order to continue.')
      }
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
      rules ={{required: "An email is required", pattern:EMAIL_REGEX}}
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
      <View style={{flexDirection:'row'}}>
       <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#782F40' : undefined}
        />
      <Text style={styles.link} onPress={onTOS}>I accept the Terms of Use</Text>
      </View>
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
    marginTop:2, 
    paddingBottom: 30,
    fontSize:15,
    color: 'white',
    textDecorationLine: 'underline',
  },
  checkbox:{
    marginRight:10,
  },


})
export default CreateAccount