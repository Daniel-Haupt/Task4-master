import React, { useState } from 'react';
<<<<<<< HEAD
import {StyleSheet,Text,View,TouchableOpacity,TextInput,FlatList,Modal,Pressable,} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { Car } from './App'; 
import { RootStackParamList } from './App';
=======
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Car } from './App';
>>>>>>> f5e962bfae30628301c1fd9b83e9198f2b92e563

type CustomerProps = {
  carList: Car[];
};

export default function Customer({ carList }: CustomerProps) {
<<<<<<< HEAD
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Customer'>>();

  const [selectedCarIndex, setSelectedCarIndex] = useState<number | null>(null);
  const [days, setDays] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
=======
  const [selectedCarIndex, setSelectedCarIndex] = useState<number | null>(null);
  const [days, setDays] = useState('');
>>>>>>> f5e962bfae30628301c1fd9b83e9198f2b92e563

  const selectedCar = selectedCarIndex !== null ? carList[selectedCarIndex] : null;

  const calculateCost = () => {
    if (!selectedCar || !days) return 0;
    const daysNum = parseInt(days);
    const costNum = parseFloat(selectedCar.costPerDay);
    if (isNaN(daysNum) || isNaN(costNum)) return 0;
    return daysNum * costNum;
  };

<<<<<<< HEAD
  const openModal = () => {
    if (selectedCar && days && !isNaN(parseInt(days))) {
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const confirmedPurchase = () => {
    setModalVisible(false);
    navigation.navigate('Confirmation', {
      car: selectedCar!,
      days: parseInt(days),
      total: calculateCost(),
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>You are logged in as Customer!</Text>

=======
  return (
    <View style={styles.container}>
      <Text style={styles.header}>You are logged in as Customer!</Text>
>>>>>>> f5e962bfae30628301c1fd9b83e9198f2b92e563
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
<<<<<<< HEAD
                  {item.make} {item.model} - R {item.costPerDay} per day
=======
                  {item.make} {item.model} - R {item.costPerDay}/day
>>>>>>> f5e962bfae30628301c1fd9b83e9198f2b92e563
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

<<<<<<< HEAD
              <TouchableOpacity style={styles.confirmButton} onPress={openModal}>
                <Text style={styles.confirmButtonText}>Show Total</Text>
              </TouchableOpacity>
=======
              <Text style={styles.totalCost}>
                Total Cost: R {calculateCost().toFixed(2)}
              </Text>
>>>>>>> f5e962bfae30628301c1fd9b83e9198f2b92e563
            </>
          )}
        </>
      )}
<<<<<<< HEAD

      {/* Modal */}
      <Modal
        visible={isModalVisible}
        transparent
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              You selected: {selectedCar?.make} {selectedCar?.model}
            </Text>
            <Text style={styles.modalText}>Number of days: {days}</Text>
            <Text style={styles.modalText}>
              Total Cost: R {calculateCost().toFixed(2)}
            </Text>

            <Pressable style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Cancel</Text>
            </Pressable>

            <Pressable style={styles.modalConfirmButton} onPress={confirmedPurchase}>
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: '#ffffffff',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 18,
    color: '#ffffff',
=======
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
>>>>>>> f5e962bfae30628301c1fd9b83e9198f2b92e563
    marginBottom: 10,
  },
  noCars: {
    fontSize: 18,
<<<<<<< HEAD
    color: '#ff0000',
=======
    color: '#ff0000ff',
>>>>>>> f5e962bfae30628301c1fd9b83e9198f2b92e563
    textAlign: 'center',
    marginTop: 50,
  },
  carItem: {
<<<<<<< HEAD
    padding: 15,
    backgroundColor: '#393E46',
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedCarItem: {
    backgroundColor: '#000000ff',
  },
  carText: {
    color: '#ffffff',
=======
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
>>>>>>> f5e962bfae30628301c1fd9b83e9198f2b92e563
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
<<<<<<< HEAD
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  confirmButton: {
    backgroundColor: '#00ff00ff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#393E46',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 15,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalConfirmButton: {
    backgroundColor: '#00ff00ff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
=======
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
>>>>>>> f5e962bfae30628301c1fd9b83e9198f2b92e563
  },
});