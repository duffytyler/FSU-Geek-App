import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ImageBackground, ScrollView, StatusBar, SafeAreaView} from 'react-native';
import Background from '../../../assets/images/newsbg.jpg';
import Blocks from '../../components/Blocks/Blocks'
import CounselingLogo from '../../../assets/images/counseling.png'
const Counseling = () => {
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
                <Blocks title = "FSU Counseling Services" 
                url = "https://counseling.fsu.edu/" 
                type="large" 
                image={CounselingLogo} 
                description="Counseling & Psychological Services is available to currently registered students. 
                These services are provided through a Zoom call, phone call, or in person. 
                The office of Counseling & Psychological Services provides individual, group, and couples counseling, crisis intervention, alcohol, as well as other drug assessments, and referrals. 
                In addition, the office regularly holds workshops and presentations on mental health topics for students. All services are provided by licensed psychologists, mental health counselors, clinical social workers, art therapists, and certified addiction professionals." 
                /> 
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

export default Counseling