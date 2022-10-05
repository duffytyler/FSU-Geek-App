import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = () => {
    return(
        <View style = {styles.header}>
            <View>
                <Text style = {styles.headerText}>FSU GEEK</Text>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    header:{
        height:'100%',
        widht:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    }

})
export default Header