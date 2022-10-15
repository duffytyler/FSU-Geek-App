import { View, Text, StyleSheet, Image, Pressable, ScrollView, useWindowDimensions, Dimensions } from 'react-native'
import React from 'react'
import TitleImage from '../../../assets/images/testnews.jpeg'

const Blocks = ({title, url, description, type, image = {TitleImage} }) => {
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
        marginTop:'8%',
        backgroundColor:'#fff',
        width:'85%',
        height:'90%',
        maxHeight:1000,
        borderRadius:15,
        marginBottom:'6%',
    },
    container_article:{
        height:'10%',
    },
    container_info:
    {
        height:250,
    },
    image_article:
    {
      height:'70%',
    },
    image:{
      width:'100%',
      height:'45%',
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