import { Text, StyleSheet, Image, Pressable, Dimensions, Alert, View } from 'react-native'
import React, {useState} from 'react'
import TitleImage from '../../../assets/images/testnews.jpeg'
import * as WebBrowser from 'expo-web-browser';

const Blocks = ({title, url, description, type, image = {TitleImage} }) => {
  const { height } = Dimensions.get("window").height; 
  const [result, setResult] = useState(null);
  if(description != null)
  {
  description = description.replace(/\\n/g,'\n')
  }
  const _goBrowser = async () => {
    if(url==null)
  {
      Alert.alert('Error.\n404 Page not found.')
  }
  else{
    let result = await WebBrowser.openBrowserAsync(url, {
      dismissButtonStyle: 'cancel',
      toolbarColor:'#BEBCBC',
      controlsColor:'#782F40',
      enableBarCollapsing:true,
    });
    setResult(result);
  }
  };
  return (
    <Pressable onPress={_goBrowser} style={[styles.container, styles[`container_${type}`]]}>
      <Image source = {image} style={[styles.image, styles[`image_${type}`]]}></Image>
      <View style={[styles.line, styles[`line_${type}`]]}/>
      <Text style={styles.title} numberOfLines={3}>{title}</Text>
      <Text style={[styles.description, styles[`description_${type}`]]}>{description}</Text>
    </Pressable>
    
  )
}

const styles = StyleSheet.create
({
    
    container:
    {   
        backgroundColor:'white',
        marginTop: Dimensions.get('window').height * 0.05,
        width:'85%',
        borderRadius:15,
        marginBottom: Dimensions.get('window').height * 0.02,
    },
    container_large:
    {
        minHeight: Dimensions.get('window').height * 0.45,
    },
    image:{
      width:'100%',
      resizeMode:'auto',
      height: Dimensions.get('window').height * 0.25,
      borderTopLeftRadius:15,
      borderTopRightRadius:15,
    },
    image_article:
    {
      height: Dimensions.get('window').height * .24,
      resizeMode:'cover',
    },
    image_info:
    {
      height: Dimensions.get('window').height * 0.17,
      resizeMode:'cover',
    },
    title:
    {
      marginTop:Dimensions.get('window').height * 0.02,
      fontFamily:'PoppinsM',
      fontSize:24,
      paddingLeft:'3%',
      paddingRight:'3%',
      fontWeight:'bold',
    },
    description:
    {
    },
    line:
    {
      borderBottomWidth:2,
      marginRight:'3%',
      marginLeft:'3%',
      borderBottomColor:'white'
    },
    line_large:
    {
      marginTop:'2%',
      borderBottomColor:'black',
    },
    description_large:
    {
      fontFamily:'MontserratM',
      marginTop:'1%',
      paddingLeft:'3%',
      paddingRight:'3%',
      padding:10,
      marginBottom:'1%',
    },
    description_info:
    {
      fontFamily:'MontserratM',
      marginTop:'1%',
      paddingLeft:'3%',
      paddingRight:'3%',
      padding:10,
      marginBottom:'3%',
    }
})

export default Blocks