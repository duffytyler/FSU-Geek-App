import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ImageBackground, ScrollView, StatusBar, SafeAreaView} from 'react-native';
import Background from '../../../assets/images/newsbg.jpg';
import Blocks from '../../components/Blocks/Blocks'
import DiscordLogo from '../../../assets/images/discord.png'
const Discord = () => {
const navigation = useNavigation();
    return(
    //go to Blocks in components to edit Blocks formatting
    //scrollview height still needs to be fixed
   <ImageBackground source= {Background} resizeMode = "cover" style = {{width:"100%", height:"100%"}}>
    <View style={{flex:1}}>
    <ScrollView showsVerticalScrollIndicator={false} 
       automaticallyAdjustContentInsets={false}
       bounces={false}
       contentContainerStyle = {{flexGrow:1}}>
            <SafeAreaView style={styles.container}>
                <Blocks title = "Discord" 
                url = "https://discord.com/invite/DaJzvQD" 
                type="large" 
                image={DiscordLogo} 
                description="A group of FSU students have created a Discord server for general use. 
                It is there to bring students together and be a place where students can ask each other
                questions or request information.
                \n
                \n
                \nDiscord information : Discord is a free communication app that enables you to make text messages,
                voice calls, and video calls. The app is very versatile and can be used on almost
                any platform, including Windows, macOS, Linux, iOS, iPadOS, Android, and on
                web browsers. In the app, users have control over whom they interact with and
                what their experience on the platform is like." /> 
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

export default Discord