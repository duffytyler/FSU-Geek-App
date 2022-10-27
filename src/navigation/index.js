import { View, ActivityIndicator, Pressable, Image, Dimensions} from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import Login from '../screens/Login/Login';
import CreateAccount from '../screens/CreateAccount/CreateAccount';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import ConfirmationCode from '../screens/ConfirmCode/ConfirmCode';
import News from '../screens/News/News';
import Career from '../screens/Career/Career';
import Advising from '../screens/Advising/Advising';
import Scholarships from '../screens/Scholarships/Scholarships';
import Menu from '../screens/Menu/Menu';
import ACM from '../screens/ACM/ACM';
import Discord from '../screens/Discord/Discord'; 
import Counseling from '../screens/Counseling/Counseling';
import HomePage from '../screens/HomePage/HomePage';
import VerifyCode from '../screens/VerifyCode/VerifyCode';
import VerifyUser from '../screens/VerifyUser/VerifyUser';
import '../../globalStyles';
import { setGlobalStyles } from 'react-native-floating-label-input';
import { Auth, Hub } from 'aws-amplify';
import MenuButton from '../../assets/images/circlemenu(1).png'

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
      <Screens.Screen name ="Career" component={Career} />    
      <Screens.Screen name ="Advising" component={Advising} />
      <Screens.Screen name ="ACM" component={ACM} />
      <Screens.Screen name ="Discord" component={Discord} />
      <Screens.Screen name ="Counseling" component={Counseling}/>
      <Screens.Screen name ="News" component={News} />
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
            <Home.Screen name="VerifyCode" options={{headerShown: false}} component={VerifyCode} />
            <Home.Screen name="VerifyUser" options={{headerShown: false}} component={VerifyUser} />
    </Home.Navigator>
    );
  }
  
  return (
    <NavigationContainer>
        <Stack.Navigator>
          {user ? (
           <Stack.Group>
            <Stack.Screen name="HomePage" component={HomePage} 
            options= {({ navigation }) => ({
              headerBackVisible:false,
              title:'FSU GEEK',
              headerStyle:{
              backgroundColor:'#BEBCBC',
              headerShown:true,
            },
            headerRight: () =>(
            //need to find a way to go to Menu on press
               <Pressable onPress={() => navigation.navigate('Menu')}>
                  <Image source={MenuButton} style={{height:36,width:30, marginRight:Dimensions.get('window').width * 0.015}} />
               </Pressable>
            ),
            headerTitleStyle:
            {
              fontFamily:'imprintMTS',
              fontSize:30,
              color:'#fff',
            },
          
          })}/>
            <Stack.Screen name="Menu" options={{headerShown:false}} component={Menu} />
            </Stack.Group>
          ): (
          <Stack.Group screenOptions={{headerShown:false}}>
                <Stack.Screen name="SignIn" component={SignIn} />
          </Stack.Group>
          )}
          <Stack.Group screenOptions={{headerShown:false}}>
            
          </Stack.Group>
          <Stack.Group
            screenOptions= {({ navigation }) => ({
              headerBackVisible:false,
            title:'FSU GEEK',
            headerStyle:{
              backgroundColor:'#BEBCBC',
              headerShown:true,
            },
            headerRight: () =>(
            //need to find a way to go to Menu on press
               <Pressable onPress={() => navigation.navigate('Menu')}>
                  <Image source={MenuButton} style={{height:36, width:30, marginRight:Dimensions.get('window').width * 0.015}} />
               </Pressable>
            ),
            headerTitleStyle:
            {
              fontFamily:'imprintMTS',
              fontSize:30,
              color:'#fff',
            },
          
          })}>
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