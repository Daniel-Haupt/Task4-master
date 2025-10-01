import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NextScreen from './NextScreen';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }: any) {
  const [text, setText] = useState('');
  const [denied, setDenied] = useState(false);

  const Login = () => {
    if (text.toLowerCase() == 'admin' || text.toLowerCase() == 'customer') {
      navigation.navigate('NextScreen');
      setDenied(false);
    } else {
      setDenied(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Welcome to my booking service application that allows you to design a car.</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter text here"
        onChangeText={setText}
        value={text}
      />
      <TouchableOpacity style={styles.button} onPress={Login}>
        <Text style={styles.buttonText}>Log-in</Text>
      </TouchableOpacity>
      {denied && (
        <>
          <Text style={styles.Text}>Access Denied</Text>
          <Text style={styles.Text}>If you are a customer type customer</Text>
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NextScreen" component={NextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    
    top: -350,  
    marginBottom: 20,
    color: '#00ff00ff',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    lineHeight: 15,
    letterSpacing: 2,
    padding: 7,
    borderRadius: 3,
  },
  button: {
    padding: 10,
    borderRadius: 2,
    marginTop: 20,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fbff0083',
    bottom: 0,
  },
  buttonText: {
    color: '#00ff00ff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
   
});
  


