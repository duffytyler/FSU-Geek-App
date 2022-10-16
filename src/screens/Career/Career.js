import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ImageBackground, ScrollView, StatusBar, SafeAreaView} from 'react-native';
import Background from '../../../assets/images/newsbg.jpg';
import Blocks from '../../components/Blocks/Blocks'
import UI from '../../../assets/images/ui.jpg'
import Coding from '../../../assets/images/coding.jpg'
import DataScience from '../../../assets/images/dscience.jpg'
const Career = () => {
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
                <Blocks 
                title = "Software Engineer" 
                url="https://www.indeed.com/hire/job-description/software-developer?gclid=Cj0KCQjw166aBhDEARIsAMEyZh43bH0fEyFbJVy8AkcZyhUkJWMZpBPfolji-JOUdnbNJzafDU4SVP0aAo6zEALw_wcB&aceid=&gclsrc=aw.ds"
                image={Coding}type="info"
                description= "A software engineer is a person who analyzes the problem statement and designs, maintain, test, and evaluate computer software using software engineer principles." />
                <Blocks 
                title = "UX/UI Design"  
                url="https://www.indeed.com/hire/job-description/ux-designer?gclid=Cj0KCQjw166aBhDEARIsAMEyZh5YoUihsiu9cr1nDH3x_oaolCaycSGReGr3HlU_4m9hFW7crPpWpw8aAi7QEALw_wcB&aceid=&gclsrc=aw.ds"
                image={UI} 
                type="info" 
                description= "A UI UX designers create the user interface for an app, website, or other interactive media. Some of the general responsibilities include collect, research, investigate and evaluate user requirements." />
                <Blocks 
                title = "Data Scientist"
                url="https://www.indeed.com/hire/job-description/data-scientist?gclid=Cj0KCQjw166aBhDEARIsAMEyZh56j17Ecbfl5-G8ZuzqTdLUO1qb7Serh9mV1YbTPPOvh99XyT41FtUaAu4PEALw_wcB&aceid=&gclsrc=aw.ds"  
                image={DataScience} 
                type="info" 
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