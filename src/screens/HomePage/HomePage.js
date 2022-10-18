import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, StatusBar} from 'react-native';
import { WebView } from 'react-native-webview';
const Home = () => {
const navigation = useNavigation();
    return(
    <WebView source={{
        uri:'https://www.fsu.edu//'}} />
    )

}

const styles = StyleSheet.create({
    container:{
        justifyContent:"flex-start",
        alignItems:"center",
        paddingTop: StatusBar.currentHeight,
    },
    
})

export default Home