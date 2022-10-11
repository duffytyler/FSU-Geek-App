import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import TitleImage from '../../../assets/images/testnews.jpeg'
const Blocks = ({title, url, type, nol, description, image = {TitleImage} }) => {
  return (
    <Pressable style={[styles.container, styles[`container_${type}`]]}>
      <Image source = {image} style={[styles.image, styles[`image_${type}`]]}></Image>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description} numberOfLines={nol}>{description}</Text>
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
        height:'92%',
        borderRadius:15,
        marginBottom:'6%'
    },
    container_article:{
      
        height:200,
    },
    container_info:
    {
        height:400,
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
      height:'50%',
    },
    title:
    {
      fontFamily:'imprintMTS',
      fontSize:30,
      paddingLeft:'5%',
      marginTop:'3%',
    },
    description:{
      marginTop:'2%',
      paddingLeft:'5%',
      paddingRight:'5%',
      padding:10,
    }

})

export default Blocks