import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ImageBackground, ScrollView, StatusBar, SafeAreaView, Dimensions} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton'
import Background from '../../../assets/images/newsbg.jpg';
import { Auth } from 'aws-amplify';
import Blocks from '../../components/Blocks/Blocks'
import AdvisingImage from '../../../assets/images/advising.jpg'
const Advising = () => {
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
       contentContainerStyle = {{flexGrow:1}}>
            <SafeAreaView style={styles.container}>
                <Blocks title = "Advising Help" type = "large" url = "test" image={AdvisingImage} numberoflines={6} 
                 description="Brief description about advising at FSU and takes the user to the advising page" /> 
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

export default Advising