import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'

import LoginScreen from './screens/LoginScreen';
import TodoScreen from './screens/TodoScreen';
import AddNewTask from './components/AddNewTask';


const fetchFonts = () => {
  return Font.loadAsync({
    'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error)=> console.log(error)}

      />
    );
  }

return <TodoScreen/>

}
