import React, { useCallback, useEffect } from 'react';
import { View, Text} from 'react-native';
import Navigation from './src/navigation/index';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)


export default function App() {
  const [fontsLoaded] = useFonts({
    'imprintMTS': require('./assets/fonts/Imprint_MT_Shadow.ttf'),
    'MontserratM': require('./assets/fonts/Montserrat-Medium.ttf'),
    'MontserratB': require('./assets/fonts/Montserrat-Bold.ttf'),
    'baskvill': require('./assets/fonts/BASKVILL.ttf'),
    'PoppinsM': require('./assets/fonts/Poppins-Medium.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  onLayoutRootView();
  return (
    <Navigation/>
  );
}