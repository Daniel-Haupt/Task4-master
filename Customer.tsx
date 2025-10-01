import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Car } from './App';

type CustomerProps = {
  carList: Car[];
};

export default function Customer({ carList }: CustomerProps) {
  const [selectedCarIndex, setSelectedCarIndex] = useState<number | null>(null);
  const [days, setDays] = useState('');

  const selectedCar = selectedCarIndex !== null ? carList[selectedCarIndex] : null;

  const calculateCost = () => {
    if (!selectedCar || !days) return 0;
    const daysNum = parseInt(days);
    const costNum = parseFloat(selectedCar.costPerDay);
    if (isNaN(daysNum) || isNaN(costNum)) return 0;
    return daysNum * costNum;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>You are logged in as Customer!</Text>
      {carList.length === 0 ? (
        <Text style={styles.noCars}>No cars available at the moment.</Text>
      ) : (
        <>
          <Text style={styles.subHeader}>Select a car to rent:</Text>
          <FlatList
            data={carList}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={[
                  styles.carItem,
                  selectedCarIndex === index && styles.selectedCarItem,
                ]}
                onPress={() => setSelectedCarIndex(index)}
              >
                <Text style={styles.carText}>
                  {item.make} {item.model} - R {item.costPerDay}/day
                </Text>
              </TouchableOpacity>
            )}
          />

          {selectedCar && (
            <>
              <Text style={styles.subHeader}>Enter number of days to rent:</Text>
              <TextInput
                style={styles.input}
                placeholder="Number of days"
                keyboardType="numeric"
                value={days}
                onChangeText={setDays}
              />

              <Text style={styles.totalCost}>
                Total Cost: R {calculateCost().toFixed(2)}
              </Text>
            </>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010000ff',
    paddingHorizontal: 20
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00ff00ff',
    textAlign: 'center',
    marginVertical: 20,
  }, 
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00ff00ff',
    marginTop: 20,
    marginBottom: 10,
  },
  noCars: {
    fontSize: 18,
    color: '#ff0000ff',
    textAlign: 'center',
    marginTop: 50,
  },
  carItem: {
    padding: 15, 
    backgroundColor: '#222222ff',
    borderRadius: 5,
    marginVertical: 5,
  },
  selectedCarItem: {
    backgroundColor: '#444444ff',
  },
  carText: {
    color: '#ffffffff',
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20, 
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
  },
  totalCost: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00ff00ff',
    textAlign: 'center',
    marginTop: 20,
  },
});