import { Text, StyleSheet, Image, Pressable, Dimensions } from 'react-native'
import React from 'react'
import TitleImage from '../../../assets/images/testnews.jpeg'

const Blocks = ({title, url, description, type, image = {TitleImage} }) => {
  const { height } = Dimensions.get("window").height; 
  return (
    
    <Pressable style={[styles.container, styles[`container_${type}`]]}>
      <Image source = {image} style={[styles.image, styles[`image_${type}`]]}></Image>
      <Text style={styles.title} numberOfLines={3}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create
({
    
    container:
    {
        marginTop:Dimensions.get('window').height * 0.03,
        backgroundColor:'#fff',
        width:'85%',
        height: Dimensions.get('window').height * 0.8,
        borderRadius:15,
        marginBottom:Dimensions.get('window').height * 0.03,
    },
    container_article: {
        height: Dimensions.get('window').height * 0.25
    },
    container_info:
    {
        height: Dimensions.get('window').height * 0.37,
    },
    image_article:
    {
      height:'70%',
    },
    image:{
      width:'100%',
      height:'35%',
      borderTopLeftRadius:15,
      borderTopRightRadius:15,
    },
    image_info:
    {
      height:'35%'
    },
    title:
    {
      fontFamily:'imprintMTS',
      fontSize:25,
      paddingLeft:'5%',
      marginTop:'3%',
    },
    description:
    {
      fontFamily:'MontserratM',
      marginTop:'2%',
      paddingLeft:'5%',
      paddingRight:'5%',
      padding:10,
    }
})

export default Blocks