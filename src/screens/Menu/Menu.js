import { View, StyleSheet, ImageBackground, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';
import MenuBackground from '../../../assets/images/MenuBackground.jpg';
import {Auth} from 'aws-amplify';
import MenuButton from '../../../assets/images/3.png'
const Menu = () => {
    const navigation = useNavigation();
    const onNews = () => {
        navigation.navigate('News');
    };
      const onSignOut = () => {
        Auth.signOut();
    }
    const onMenu = () =>
    {
        navigation.navigate('Menu');
    }
    const onCareer = () =>
    {
        navigation.navigate('Pages', {screen:'Career',
    initial:false});
    }
    const onAdvising = () =>
    {
        navigation.navigate('Pages', {screen:'Advising',
    initial:false});
    }
    const onScholarships = () =>
    {
        navigation.navigate('Pages', {screen:'Scholarships',
    initial:false});
    }
    const onACM = () =>
    {
        navigation.navigate('Pages', {screen:'ACM',
    initial:false});
    }
    const onDiscord = () =>
    {
        navigation.navigate('Pages', {screen:'Discord',
    initial:false});
    }
    const onCounseling = () =>
    {
        navigation.navigate('Pages', {screen:'Counseling',
    initial:false});
    }
  return (
    <ImageBackground source= {MenuBackground} resizeMode = "cover" style = {{width:"100%", height:"100%"}}>
    <View style={styles.container}>
       <CustomButton type = "MENU" onPress={onNews} text = "Home" />
       <CustomButton type = "MENU" onPress={onDiscord} text = "Discord" />
       <CustomButton type = "MENU" onPress={onCounseling} text = "Counseling" />
       <CustomButton type = "MENU" onPress={onCareer} text = "Career Info" />
       <CustomButton type = "MENU" onPress={onAdvising} text = "Advising Help" />
       <CustomButton type = "MENU" onPress={onScholarships} text = "STEM Scholarships" />
       <CustomButton type = "MENU" onPress={onACM} text = "ACM Programming" />
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