import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Menu from '../screens/Menu';
import Login from '../screens/Login/Login';
import CreateAccount from '../screens/CreateAccount/CreateAccount';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import ConfirmationCode from '../screens/ConfirmCode/ConfirmCode';
import CreationCode from '../screens/CreationCode/CreationCode';
import Career from '../screens/Career';
import Advising from '../screens/Advising';
import Scholarships from '../screens/Scholarships';
import AMC from '../screens/AMC';
import Discord from '../screens/Discord';
import News from '../screens/News/News';
import '../../globalStyles';
import { setGlobalStyles } from 'react-native-floating-label-input';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
            <Stack.Screen name="News" component={News} />
            <Stack.Screen name="ConfirmationCode" component={ConfirmationCode} />
            <Stack.Screen name="CreationCode" component={CreationCode} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

setGlobalStyles.containerStyles=
{
        width: '85%',
        maxWidth:450,
        borderWidth:5,
        paddingHorizontal: 5,
        backgroundColor: '#d4d4d4',
        borderColor: '#d4d4d4',
        borderRadius: 8,
        height:65,
}
setGlobalStyles.labelStyles=
{
  colorFocused:'grey',
  fontSizeFocused: 12,
}
setGlobalStyles.inputStyles=
{
  color:'black',
  paddingTop: 15,
  fontSize:16
}
setGlobalStyles.customLabelStyles=
{
  colorBlurred:'grey',
  colorFocused: 'grey',
        fontSizeFocused: 12,
}

export default Navigation