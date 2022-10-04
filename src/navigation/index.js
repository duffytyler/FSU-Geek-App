import { View, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import Login from '../screens/Login/Login';
import CreateAccount from '../screens/CreateAccount/CreateAccount';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import ConfirmationCode from '../screens/ConfirmCode/ConfirmCode';
import News from '../screens/News/News';
import Career from '../screens/Career';
import Advising from '../screens/Advising';
import Scholarships from '../screens/Scholarships';
import AMC from '../screens/AMC';
import Discord from '../screens/Discord'; 
import '../../globalStyles';
import { setGlobalStyles } from 'react-native-floating-label-input';
import { Auth, Hub } from 'aws-amplify';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = data => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };

    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);

  if (user === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }


  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          {user ? (
              <Stack.Screen name="News" component={News} />
          ): (
            <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
            <Stack.Screen name="ConfirmationCode" component={ConfirmationCode} />
            </>
          )}
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