import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ImageBackground, ScrollView, StatusBar, SafeAreaView} from 'react-native';
import Background from '../../../assets/images/newsbg.jpg';
import Blocks from '../../components/Blocks/Blocks'
import ScholarshipImage from '../../../assets/images/scholarship.jpg'
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
                description="This is random text" /> 
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