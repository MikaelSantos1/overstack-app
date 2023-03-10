
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { useFonts,Roboto_400Regular,Roboto_700Bold,Roboto_900Black } from '@expo-google-fonts/roboto';
import 'react-native-gesture-handler';

import { NativeBaseProvider } from 'native-base';
import { Home } from '@screens/Home';
import { THEME } from './src/theme';
import { Details } from '@screens/Details';
import VideoPlayer from '@screens/Video';
import { Routes } from '@routes/index';
export default function App() {
  const [fontsLoaded]=useFonts({Roboto_400Regular,Roboto_700Bold,Roboto_900Black})
  return (
    <NativeBaseProvider theme={THEME} >
      <StatusBar
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
      />
      
      {
        fontsLoaded?<Routes/>:<View/>
      }
      
   
    </NativeBaseProvider>
  );
}
