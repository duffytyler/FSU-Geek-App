import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Header } from 'react-native';
import Titles from '../../components/Titles/Titles';
import CustomButton from '../../components/CustomButton/CustomButton'
import Background from '../../../assets/images/newsbg.jpg';
import { Auth } from 'aws-amplify';
const News = () => {
    const navigation = useNavigation();
    const onSignOut = () => {
        navigation.navigate('Login');
        Auth.signOut();
        
    }
    return(
    
    <ImageBackground source= {Background} resizeMode = "cover" style = {{width:"100%", height:"100%"}}>
        <Header style={styles.header}
        centerComponent = {{text:'FSU GEEK', style: {fontFamily:'imprintMTS'}}}
        />
        <ScrollView showsVerticalScrollIndicator = {false}>
         <CustomButton type = "TERTIARY" onPress={onSignOut} text = "Sign out" />
         </ScrollView>
    </ImageBackground>
    )

}

const styles = StyleSheet.create({
        container:{
            backgroundColor: '#d4d4d4',
            flex:1,
            height:'2%',
          },
        header:
        {
            backgroundColor:'#d4d4d4'
        },
})

export default News