import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Admin } from './Admin';
import Customer from './Customer';
import Confirmation from './Confirmation';

export type Car = {
  make: string;
  model: string;
  costPerDay: string;
};

export type RootStackParamList = {
  Login: undefined;
  Admin: undefined;
  Customer: undefined;
  Confirmation: {
    car: Car;
    days: number;
    total: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen({ navigation }: any) {
  const [text, setText] = useState('');
  const [denied, setDenied] = useState(false);

  const Login = () => {
    if (text.toLowerCase() === 'admin') {
      navigation.navigate('Admin');
      setDenied(false);
    } else if (text.toLowerCase() === 'customer') {
      navigation.navigate('Customer');
      setDenied(false);
    } else {
      setDenied(true);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>
        Welcome to my booking service application that allows you to design a car.
      </Text>
      <Text style={styles.Text}>Please Log-in to continue</Text>
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
  const [carList, setCarList] = useState<Car[]>([]);

  return (
    <NavigationContainer>
      <Stack.Navigator id={undefined} initialRouteName="Login">
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="Admin">
          {(props) => <Admin {...props} carList={carList} setCarList={setCarList} />}
        </Stack.Screen>
        <Stack.Screen name="Customer">
          {(props) => <Customer {...props} carList={carList} />}
        </Stack.Screen>
        <Stack.Screen name="Confirmation" component={Confirmation} />
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
    top: -250,
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
