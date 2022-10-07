import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ImageBackground, ScrollView, StatusBar, SafeAreaView, Dimensions} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton'
import Background from '../../../assets/images/newsbg.jpg';
import { Auth } from 'aws-amplify';
import Blocks from '../../components/Blocks/Blocks'
const Scholarships = () => {
const navigation = useNavigation();
    const onSignOut = () => {
        navigation.navigate('SignIn',{screen:'Login'});
        Auth.signOut();
        
    }
    const onMenu = () =>
    {
        navigation.navigate('Menu');
    }
    return(
    //go to Blocks in components to edit Blocks formatting
    //scrollview height still needs to be fixed
   <ImageBackground source= {Background} resizeMode = "cover" style = {{width:"100%", height:"100%"}}>
    <View style={{flex:1}}>
       <ScrollView showsVerticalScrollIndicator={false} 
       automaticallyAdjustContentInsets={false}
       bounces={false}
       contentContainerStyle = {{height:1200}}>
            <SafeAreaView style={styles.container}>
                <Blocks title = "Article Title" url = "test" description= "test"/> 
                <CustomButton type = "TERTIARY" onPress={onSignOut} text = "Sign out" />
                <CustomButton type = "TERTIARY" onPress={onMenu} text = "Menu" />
            </SafeAreaView>
        </ScrollView>
    </View>
    </ImageBackground>
    )

}

const styles = StyleSheet.create({
    container:{
        justifyContent:"flex-start",
        alignItems:"center",
        paddingTop: StatusBar.currentHeight,
    },
    
})

export default Scholarships