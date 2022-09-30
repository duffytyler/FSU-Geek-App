//Last edited 3:54PM (EST) by Tyler D.
import React from 'react';
import { Text, View, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";
import Menu from './src/screens/Menu';
import Login from './src/screens/Login/Login';
import CreateAccount from './src/screens/CreateAccount/CreateAccount';
import Career from './src/screens/Career';
import Advising from './src/screens/Advising';
import Scholarships from './src/screens/Scholarships';
import AMC from './src/screens/AMC';
import Discord from './src/screens/Discord';
import Navigation from './src/navigation/index';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'imprintMTS': require('./assets/fonts/Imprint_MT_Shadow.ttf'),
    'MontserratM': require('./assets/fonts/Montserrat-Medium.ttf'),
    'MontserratB': require('./assets/fonts/Montserrat-Bold.ttf')
  });
  if(!fontsLoaded){
    return (<AppLoading/>);
  }

  return (
      <Navigation />
  );
}
