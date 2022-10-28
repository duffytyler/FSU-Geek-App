import { View, StyleSheet, ImageBackground, ScrollView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';
import MenuBackground from '../../../assets/images/MenuBackground.jpg';
import {Auth} from 'aws-amplify';
const Menu = () => {
    const navigation = useNavigation();
    const onNews = () => {
        navigation.navigate('Pages', {screen:'News',
    initial:false});
    };
      const onSignOut = () => {
        Auth.signOut();
    }
    const onHome = () =>
    {
        navigation.navigate('HomePage');
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
    <View style={{flex:1}}>
    <ScrollView showsVerticalScrollIndicator={false}
    contentContainerStyle={{flexGrow:1, justifyContent:'center', alignContent:'center'}}>
    <View style={styles.container}>
       <CustomButton type = "MENU" onPress={onHome} text = "Home" />
       <CustomButton type = "MENU" onPress={onDiscord} text = "Discord" />
       <CustomButton type = "MENU" onPress={onNews} text = "Tech News" />
       <CustomButton type = "MENU" onPress={onCareer} text = "Career Info" />
       <CustomButton type = "MENU" onPress={onAdvising} text = "Advising Help" />
       <CustomButton type = "MENU" onPress={onCounseling} text = "FSU Counseling" />
       <CustomButton type = "MENU" onPress={onACM} text = "ACM Programming" />
       <CustomButton type = "MENU" onPress={onScholarships} text = "STEM Scholarships" />
       <CustomButton type = "LOGOUT" onPress={onSignOut} text = "Sign Out" />
    </View>
    </ScrollView>
    </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create
({
    container:
    {
        alignItems:'center',
        justifyContent:'center',
    }

})
export default Menu