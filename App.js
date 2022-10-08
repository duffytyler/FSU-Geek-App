//Last edited 3:54PM (EST) by Tyler D.
import React from 'react';
import { Text, View, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";
import Navigation from './src/navigation/index';
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)
const Stack = createNativeStackNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    'imprintMTS': require('./assets/fonts/Imprint_MT_Shadow.ttf'),
    'MontserratM': require('./assets/fonts/Montserrat-Medium.ttf'),
    'MontserratB': require('./assets/fonts/Montserrat-Bold.ttf'),
    'baskvill': require('./assets/fonts/BASKVILL.ttf'),
  });
  if(!fontsLoaded){
    return (<AppLoading/>);
  }

  return (
      <Navigation />
  );
}


export default App;