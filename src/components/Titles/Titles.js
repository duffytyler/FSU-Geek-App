import { Text, StyleSheet, Dimensions, View } from 'react-native'
import React from 'react'
const entireScreenWidth = Dimensions.get('window').width;
var screenWidth = entireScreenWidth
if (entireScreenWidth >= 700)
{
  screenWidth = 525;
}
const Titles = ({text}) => {
  return (
    <View style = {{width:screenWidth}}>
      <Text style={styles.title}>{text}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    title: {
        marginTop:100,
        fontFamily: 'imprintMTS',
        fontSize:30, 
        color:'white',
        alignSelf:'flex-start',
        paddingLeft: '6%',
        paddingBottom:25,
      },
})
export default Titles