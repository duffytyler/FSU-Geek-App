import { View, StyleSheet, ImageBackground, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';
import MenuBackground from '../../../assets/images/MenuBackground.jpg';
import {Auth} from 'aws-amplify';
import MenuButton from '../../../assets/images/Navigation_Button.png'
const Menu = () => {
    const navigation = useNavigation();
    const onNews = () => {
        console.warn('News pressed')
        navigation.navigate('News');
    };
      const onSignOut = () => {
        navigation.navigate('SignIn', {screen:'Login'});
        Auth.signOut();
        
    }
    const onMenu = () =>
    {
        console.warn('Menu pressed');
        navigation.navigate('Menu');
    }
    const onCareer = () =>
    {
        console.warn('Career pressed');
        // navigation.navigate('Career'); no page atm
    }
    const onAdvising = () =>
    {
        console.warn('Advising pressed');
        // navigation.navigate('Advising'); no page atm
    }
    const onScholarships = () =>
    {
        console.warn('Scholarships pressed');
        navigation.navigate('Pages', {screen:'Scholarships',
    initial:false});
    }
    const onAMC = () =>
    {
        console.warn('AMC pressed');
      //   navigation.navigate('AMC'); no page atm
    }
    const onDiscord = () =>
    {
        console.warn('Discord pressed');
       // navigation.navigate('Discord'); no page atm
    }
  return (
    <ImageBackground source= {MenuBackground} resizeMode = "cover" style = {{width:"100%", height:"100%"}}>
    <Pressable onPress = {onMenu}>
        <Image source = {MenuButton} style={{height:30,width:30, marginTop:'13%', marginRight:'7%',alignSelf:'flex-end'}}></Image>
    </Pressable>
    <View style={styles.container}>
       <CustomButton type = "MENU" onPress={onNews} text = "Home" />
       <CustomButton type = "MENU" onPress={onCareer} text = "Career Info" />
       <CustomButton type = "MENU" onPress={onAdvising} text = "Advising Help" />
       <CustomButton type = "MENU" onPress={onScholarships} text = "STEM Scholarships" />
       <CustomButton type = "MENU" onPress={onAMC} text = "AMC Programming" />
       <CustomButton type = "MENU" onPress={onDiscord} text = "Discord / Club Meetings" />
       <CustomButton type = "LOGOUT" onPress={onSignOut} text = "LOG OUT" />
    </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create
({
    container:
    {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }

})
export default Menu