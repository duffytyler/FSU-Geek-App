import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ImageBackground, ScrollView, StatusBar, SafeAreaView, Dimensions, Text} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton'
import Background from '../../../assets/images/newsbg.jpg';
import { Auth } from 'aws-amplify';
import Blocks from '../../components/Blocks/Blocks'
import TitleImage from '../../../assets/images/testnews.jpeg'
import { responsePathAsArray } from 'graphql';
const News = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const url = 'http://10.0.0.132:8000/Articles'
    useEffect(()=>{
        fetch(url)
        .then((response) => response.json())
        .then((json) =>setData(json))
        .catch((error) => console.error(error))
        .finally(()=> setLoading(false));
    },[])
    const navigation = useNavigation();
    return(
    //go to Blocks in components to edit Blocks formatting
    //scrollview height still needs to be fixed
   <ImageBackground source= {Background} style = {styles.background}>
            <ScrollView showsVerticalScrollIndicator={false} 
                bounces={false}
                automaticallyAdjustContentInsets={false}
                contentContainerStyle={{flexGrow:0.5}}>
                    <SafeAreaView style={styles.container}>
                {loading ? ( <Text>Loading...</Text>): (
                        data.map((Articles)=>(
                            <Blocks title = {Articles.titles} url = {Articles.url} image = {{uri:Articles.img}} type = "article"/> 
                    ))
                )}
                </SafeAreaView>
                </ScrollView>
    </ImageBackground>
    )

}

const styles = StyleSheet.create({
    background:
    {
        height:Dimensions.get('window').height, 
        width:Dimensions.get('window').width, 
        position: 'absolute', 
    },
    container:{
        justifyContent:"flex-start",
        alignItems:"center",
    },
    
})

export default News