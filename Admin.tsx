import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Car } from './App';

type AdminProps = {
  carList: Car[];
  setCarList: React.Dispatch<React.SetStateAction<Car[]>>;
  navigation: any;
};

export function Admin({ carList, setCarList, navigation }: AdminProps) {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [costPerDay, setCostPerDay] = useState('');

  const addCar = () => {
    if (!make.trim() || !model.trim() || !costPerDay.trim()) {
      alert('Please fill in all fields');
      return;
    }

    const newCar: Car = {
      make: make.trim(),
      model: model.trim(),
      costPerDay: costPerDay.trim(),
    };

    setCarList([...carList, newCar]);

    setMake('');
    setModel('');
    setCostPerDay('');
  };

  const goToCustomer = () => {
    navigation.navigate('Customer');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>You are logged in as Admin!</Text>
      <Text style={styles.subHeader}>Type in the car you want customers to rent</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter car make"
        onChangeText={setMake}
        value={make}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter model"
        onChangeText={setModel}
        value={model}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter cost per day"
        onChangeText={setCostPerDay}
        value={costPerDay}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={addCar}>
        <Text style={styles.buttonText}>Add Car</Text>
      </TouchableOpacity>

      {carList.length > 0 && (
        <View style={styles.carListContainer}>
          <Text style={styles.listTitle}>Added Cars:</Text>
          {carList.map((car, index) => (
            <Text key={index} style={styles.carItem}>
              {`${index + 1}. Make: ${car.make} Model: ${car.model} Cost per day: R ${car.costPerDay}`}
            </Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#44b8ccff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 10,
    color: '#ffffffff',
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subHeader: {
    marginBottom: 20,
    color: '#ffffffff',
    fontSize: 18,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000083',
  },
  buttonText: {
    color: '#ffffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  carListContainer: {
    marginTop: 30,
    width: '100%',
  },
  listTitle: {
    color: '#ffffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  carItem: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 5,
  },
});
