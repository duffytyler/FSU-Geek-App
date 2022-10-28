import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ImageBackground, ScrollView, SafeAreaView, Text} from 'react-native';
import Background from '../../../assets/images/newsbg.jpg';
import Blocks from '../../components/Blocks/Blocks'
const News = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const url = 'http://10.0.0.231:8000/Articles'
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
    <View style={{flex:1}}>
            <ScrollView showsVerticalScrollIndicator={false} 
                bounces={false}
                automaticallyAdjustContentInsets={false}
                contentContainerStyle={{flexGrow:1}}>
                   <SafeAreaView style={styles.container}>
                    {loading ? ( <Text style={{fontFamily:'MontserratB', fontSize:'30', alignSelf:'center',justifyContent:'center', color:'white',}}>Please wait while we load resources.</Text>): (
                        data.map((Articles)=>(
                            <Blocks title = {Articles.titles} url = {Articles.url} image = {{uri:Articles.img}} type = "article"/> 
                    ))
                )}
                </SafeAreaView>
                </ScrollView>
                </View>
    </ImageBackground>
    )

}

const styles = StyleSheet.create({
    background:
    {
        height:'100%', 
        width:'100%', 
    },
    container:{
        alignItems:"center",
    },
    
})

export default News