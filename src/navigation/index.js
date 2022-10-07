import { View, ActivityIndicator, Pressable, Image, Text} from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
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
import Scholarships from '../screens/Scholarships/Scholarships';
import Menu from '../screens/Menu/Menu';
import AMC from '../screens/AMC';
import Discord from '../screens/Discord'; 
import '../../globalStyles';
import { setGlobalStyles } from 'react-native-floating-label-input';
import { Auth, Hub } from 'aws-amplify';
import MenuButton from '../../assets/images/Navigation_Button.png'
import { screensEnabled } from 'react-native-screens';
const Stack = createNativeStackNavigator();
const Screens = createNativeStackNavigator();
const Home = createNativeStackNavigator();
const Navigation = ({navigation}) => {
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
  
  function Pages()
  {
    return(
    <Screens.Navigator screenOptions={{headerShown:false}}>

      <Screens.Screen name ="Scholarships" component={Scholarships}/>
      
    </Screens.Navigator>
    );
  }

  function SignIn()
  {
    return (
    <Home.Navigator screenOptions={{headerShown:false}}>
        <Home.Screen name="Login" options={{headerShown: false}} component={Login} />
            <Home.Screen name="ForgotPassword" options={{headerShown: false}} component={ForgotPassword} />
            <Home.Screen name="ResetPassword" options={{headerShown: false}} component={ResetPassword} />
            <Home.Screen name="CreateAccount" options={{headerShown: false}} component={CreateAccount} />
            <Home.Screen name="ConfirmationCode" options={{headerShown: false}} component={ConfirmationCode} />
    </Home.Navigator>
    );
  }
  
  return (
    <NavigationContainer>
        <Stack.Navigator>
          {user ? (
           <Stack.Group>
            <Stack.Screen name="News" component={News} 
            options={{
              title:'FSU GEEK',
              headerStyle:{
                backgroundColor:'#BEBCBC',
                headerShown:true,
              },
              headerRight: () =>(
              //need to find a way to go to Menu on press
                 <Pressable onPress={() => alert('This is a button')}>
                    <Image source={MenuButton} style={{height:30, width:30 }} />
                 </Pressable>
              ),
              headerTitleStyle:
              {
                fontFamily:'imprintMTS',
                fontSize:30,
                color:'#fff',
              },
            
            }}/>
            </Stack.Group>
          ): (
          <Stack.Group screenOptions={{headerShown:false}}>
                <Stack.Screen name="SignIn" component={SignIn} />
          </Stack.Group>
          )}
          <Stack.Group screenOptions={{headerShown:false}}>
            <Stack.Screen name="Menu" component={Menu} />
          </Stack.Group>
          <Stack.Group
            screenOptions={{
              headerBackVisible:false,
            title:'FSU GEEK',
            headerStyle:{
              backgroundColor:'#BEBCBC',
              headerShown:true,
            },
            headerRight: () =>(
            //need to find a way to go to Menu on press
               <Pressable onPress={() => alert('This is a button')}>
                  <Image source={MenuButton} style={{height:30, width:30 }} />
               </Pressable>
            ),
            headerTitleStyle:
            {
              fontFamily:'imprintMTS',
              fontSize:30,
              color:'#fff',
            },
          
          }}>
            <Stack.Screen name="Pages" component={Pages}/>

          </Stack.Group>
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