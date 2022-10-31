import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ImageBackground, ScrollView, StatusBar, SafeAreaView} from 'react-native';
import Background from '../../../assets/images/newsbg.jpg';
import Blocks from '../../components/Blocks/Blocks'
import ScholarshipImage from '../../../assets/images/scholarships.png'
const Scholarships = () => {
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
                <Blocks title = "Scholarships" type="large" url = "https://fsu.academicworks.com/" image={ScholarshipImage} 
                description="Scholarships are a type of aid that does not need to be paid back. Some of these
                scholarships are based on demographics, extracurricular activities, and majors, along with a main
                interest in students GPA.
                A lot of scholarships pertaining STEM majors can be found in Finding Scholarship For You (FS4U),
                a tool that provides students with a large selection of scholarships, including
                scholarships specifically designated for CS students. Once you fill out your information,
                FS4U will allow you to use that information to look for available scholarships that you fit
                the requirements for.
                \n
                \n
                \nNote : FSU Geek is not affiliated with FS4U or represent them in any way." /> 
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