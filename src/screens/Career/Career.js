import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ImageBackground, ScrollView, StatusBar, SafeAreaView, Dimensions} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton'
import Background from '../../../assets/images/newsbg.jpg';
import { Auth } from 'aws-amplify';
import Blocks from '../../components/Blocks/Blocks'
import UI from '../../../assets/images/ui.jpg'
import Coding from '../../../assets/images/coding.jpg'
import DataScience from '../../../assets/images/dscience.jpg'
const Career = () => {
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
                <Blocks title = "Software Engineer" url = "test" image={Coding}type="info" nol={6} 
                description= "A software engineer is a person who analyzes the problem statement and designs, maintain, test, and evaluate computer software using software engineer principles." />
                <Blocks title = "UX/UI Design" url = "test" image={UI} type="info" nol={6} 
                description= "A UI UX designers create the user interface for an app, website, or other interactive media. Some of the general responsibilities include collect, research, investigate and evaluate user requirements." />
                <Blocks title = "Data Scientist" url = "test" image={DataScience} type="info" nol={6} 
                description= "Data scientists are responsible for collecting, analyzing, and interpreting data. According to Oracle some of the duties include developing strategies for analyzing data, preparing data for analysis, exploring, analyzing, and visualizing data, building models with data using programming languages, such as Python and R, and deploying models into applications." /> 
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

export default Career