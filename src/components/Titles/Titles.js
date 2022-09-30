import { Text, StyleSheet } from 'react-native'
import React from 'react'

const Titles = ({text}) => {
  return (
      <Text style={styles.title}>{text}</Text>
  )
}
const styles = StyleSheet.create({
    title: {
        marginTop:100,
        fontFamily: 'imprintMTS',
        fontSize:30,
        color:'white',
        alignSelf: 'flex-start',
        marginLeft: '8%',
        paddingBottom:25
      },
})
export default Titles