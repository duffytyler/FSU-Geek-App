import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ImageBackground, ScrollView, StatusBar, SafeAreaView} from 'react-native';
import Background from '../../../assets/images/newsbg.jpg';
import Blocks from '../../components/Blocks/Blocks'
import AdvisingImage from '../../../assets/images/advising.png'
const Advising = () => {
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
                <Blocks title = "FSU:Tallahassee - Advising Help" type = "large" url = "https://advisingfirst.fsu.edu/" image={AdvisingImage} 
                 description="Academic advising help is available to all FSU students. The Advising Office
                 provides students with a vast array of helpful programs, resources, and services.
                 In addition, the Advising team will help you make the most important decisions
                 during your academic career, such as choosing the right courses to help keep
                 you on track for graduation along with much more.
                 \n
                 \n
                 \nNote : Advising for the Tallahassee Campus and the Panama City Campus are different.
                 in order to see a list of Panama City advisors or book an appointment, please go to : " />

                 <Blocks title = "FSU:PC - Advising Help" type = "large" url = "https://pc.fsu.edu/bookings" image={AdvisingImage} 
                 description="Academic advising help is available to all FSU students. The Advising Office
                 provides students with a vast array of helpful programs, resources, and services.
                 In addition, the Advising team will help you make the most important decisions
                 during your academic career, such as choosing the right courses to help keep
                 you on track for graduation along with much more.
                 \n
                 \n
                 \nNote : Advising for the Tallahassee Campus and the Panama City Campus are different.
                 in order to see a list of Panama City advisors or book an appointment, please go to : https://pc.fsu.edu/bookings" />
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