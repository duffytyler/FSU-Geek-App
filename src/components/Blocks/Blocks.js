import { View, Text, StyleSheet, Image, Pressable, Dimensions } from 'react-native'
import React from 'react'
import TitleImage from '../../../assets/images/testnews.jpeg'

const Blocks = ({title, url, description, type, image = {TitleImage} }) => {
  const { height } = Dimensions.get("window").height; 
  
  return (
    <Pressable style={[styles.container, styles[`container_${type}`]]}>
      <Image source = {image} style={[styles.image, styles[`image_${type}`]]}></Image>
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
    },
    container_large:
    {
        minHeight: Dimensions.get('window').height * 0.75,
    },
    image:{
      width:'100%',
      height: Dimensions.get('window').height * 0.25,
      borderTopLeftRadius:15,
      borderTopRightRadius:15,
    },
    image_article:
    {
      height: Dimensions.get('window').height * .24,
    },
    image_info:
    {
      height: Dimensions.get('window').height * 0.17,
    },
    title:
    {
      fontFamily:'imprintMTS',
      fontSize:25,
      paddingLeft:'3%',
      paddingRight:'3%',
    },
    description:
    {
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
      marginBottom:'1%',
    }
})

export default Blocks