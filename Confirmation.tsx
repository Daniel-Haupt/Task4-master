import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Car } from './App'; 

type RootStackParamList = {
  Confirmation: {
    car: Car;
    days: number;
    total: number;
  };
};

type ConfirmationScreenRouteProp = RouteProp<RootStackParamList, 'Confirmation'>;

export default function Confirmation() {
  const route = useRoute<ConfirmationScreenRouteProp>();
  const { car, days, total } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Booking Confirmed!</Text>
      <Text style={styles.text}>Car: {car.make} {car.model}</Text>
      <Text style={styles.text}>Days: {days}</Text>
      <Text style={styles.text}>Total Cost: R {total.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: '#00ff00ff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 10,
  },
});

