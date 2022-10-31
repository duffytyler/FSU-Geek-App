import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ImageBackground, ScrollView, StatusBar, SafeAreaView} from 'react-native';
import Background from '../../../assets/images/newsbg.jpg';
import Blocks from '../../components/Blocks/Blocks'
import ACMLogo from '../../../assets/images/acm.png'
const ACM = () => {
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
                <Blocks title = "ACM Programming" type="large" url = "https://fsu.acm.org/" image={ACMLogo} numberoflines={6}
                description="FSU’s Association for Computing Machinery- Student Chapter serves all students
                interested in computing. The main purpose of the organization is to provide
                academic and social engagement for all member. In order to be considered an
                Active Member, students will need to attend chapter events during the Fall and
                Spring semesters. This club is also responsible for the ACM programming contest that
                takes place once a semester, excluding Summer.
                \n
                \n
                \nNote : FSU Geek is not affiliated with FSU ACM in any regard and do not represent them in any way." /> 
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

export default ACM