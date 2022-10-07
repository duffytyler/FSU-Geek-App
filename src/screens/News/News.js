import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ImageBackground, ScrollView, StatusBar, SafeAreaView, Dimensions} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton'
import Background from '../../../assets/images/newsbg.jpg';
import { Auth } from 'aws-amplify';
import Blocks from '../../components/Blocks/Blocks'
const News = () => {
    
    const navigation = useNavigation();
    return(
    //go to Blocks in components to edit Blocks formatting
    //scrollview height still needs to be fixed
   <ImageBackground source= {Background} resizeMode = "cover" style = {{width:"100%", height:"100%"}}>
    <View style={{flex:1}}>
       <ScrollView showsVerticalScrollIndicator={false} 
       automaticallyAdjustContentInsets={false}
       bounces={false}
       contentContainerStyle = {{height:2600}}>
            <SafeAreaView style={styles.container}>
                <Blocks title = "Article Title" url = "test" description= "test" type = "article" nol={6}/> 
                <Blocks title = "Article Title" url = "test" description= "test" type = "article" nol={3} /> 
                <Blocks title = "Article Title" url = "test" description= "test" type = "article" nol={2}/> 
                <Blocks title = "Article Title" url = "test" description= "test" type = "article" nol={5}/> 
                <Blocks title = "Article Title" url = "test" description= "test" type = "article" nol={4}/> 
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

export default News