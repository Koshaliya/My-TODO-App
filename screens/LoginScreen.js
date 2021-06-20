import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
//import { Ionicons } from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';


import Colors from '../constants/Colors'

const LoginScreen = props => {
  const [text, setText] = useState('');
  return (
    //<Image source={require('../assets/images/Blog post.gif')} style={styles.backgroundImage} />
    <View style={styles.screen}>

      <View style={styles.inputContainer}>
    
      <Ionicons name='ios-mail' size={22} color={Colors.primaryColor} />
        <TextInput
          keyboardType="email-address"
          placeholder="Email"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
      <Ionicons name="eye-off" size={22} color={Colors.primaryColor} />       
       <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => { }}>
          <View style={styles.button} >
            <Text style={styles.buttonText}>LOGIN</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection:'row',
    alignItems: 'center',
    width: '90%',
    borderRadius:20,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    padding:20,
    margin:15,
  },
  input: {
    marginHorizontal: 15,
  },
  buttonContainer: {
    borderRadius: 30,
    overflow: 'hidden',
    width: '80%',
    margin: 20
  },
  button: {
    backgroundColor: Colors.primaryColor,
    padding: 20,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'roboto',
    fontSize: 18,
    textAlign: 'center'
  },
});

export default LoginScreen;
