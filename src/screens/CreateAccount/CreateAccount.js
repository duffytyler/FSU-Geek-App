import React,{useState} from 'react';
import { View,Text,ImageBackground, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import Background from '../../../assets/images/Home_Screen.jpg';
import Titles from '../../components/Titles/Titles';
import { useNavigation } from '@react-navigation/native';
const CreateAccount = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [fname,setFName] = useState('');
  const [lname,setLName] = useState('');
  const [vpassword, setvPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const navigation = useNavigation();
  const onCreateAcc = () => {
    console.warn("Create Account");
    navigation.navigate('Login');
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
      placeholder="FIRST NAME"
      value={fname}
      setValue={setFName}
      />
      <CustomInput
      placeholder="LAST NAME"
      value={lname}
      setValue={setLName}
      />
      <CustomInput
      placeholder="EMAIL"
      value={email}
      setValue={setEmail}
      />
      <CustomInput
      placeholder="PASSWORD"
      value={password}
      setValue={setPassword}
      isPassword={true}
      />
      <CustomInput
      placeholder="RE-ENTER PASSWORD"
      value={vpassword}
      setValue={setvPassword}
      isPassword={true}
      />
      <Text style={{color:'white', paddingBottom: 30}}>I accept the{' '} <Text style={styles.link} onPress={onTOS}>Terms of Use</Text></Text>
      <CustomButton onPress={onCreateAcc} text = "CREATE ACCOUNT"/>
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