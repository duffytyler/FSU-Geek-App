import React from 'react';
import { useNavigation,NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton'
import Background from '../../../assets/images/newsbg.jpg';
import { Auth } from 'aws-amplify';
import Header from '../../components/Header/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const News = () => {
    const navigation = useNavigation();
    const onSignOut = () => {
        navigation.navigate('Login');
        Auth.signOut();
        
    }
    return(
    
    <ImageBackground source= {Background} resizeMode = "cover" style = {{width:"100%", height:"100%"}}>
        <ScrollView showsVerticalScrollIndicator = {false}>
            <View style={styles.container}>
         <CustomButton type = "TERTIARY" onPress={onSignOut} text = "Sign out" />
         <CustomButton type = "TERTIARY" onPress={onSignOut} text = "Sign out" />
         </View>
         </ScrollView>
    </ImageBackground>
    )

}

const styles = StyleSheet.create({
        container:{
            justifyContent:"center",
            alignItems:"center",
            flex:1,
          },
        header:
        {

        },
})

export default News