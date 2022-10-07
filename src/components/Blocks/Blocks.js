import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import Test from '../../../assets/images/testnews.jpeg'
import Titles from '../Titles/Titles'
const Blocks = ({title, url, description, type}) => {
  return (
    <View style={[styles.container, styles[`container_${type}`]]}>
      <Image source = {Test} style = {styles.image}></Image>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description} numberOfLines = {6}>Topic of some news article taken from somewhere. 
      Topic of some news article taken from somewhere. 
      Topic of some news article taken from somewhere. 
      Topic of some news article taken from somewhere.
      Topic of some news article taken from somewhere.
      Topic of some news article taken from somewhere.
      Topic of some news article taken from somewhere.
      Topic of some news article taken from somewhere.
      Topic of some news article taken from somewhere.
      Topic of some news article taken from somewhere.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create
({
    container:
    {
      marginTop:'15%',
        backgroundColor:'#fff',
        width:'85%',
        height:'65%',
        borderRadius:'18%',
    },
    container_article:{
        marginTop:'15%',
        backgroundColor:'#fff',
        width:'85%',
        height:400,
        borderRadius:'18%',
    },
    image:{
      width:'100%',
      height:'50%',
      borderTopLeftRadius:'18%',
      borderTopRightRadius:'18%',
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