import React, { useState } from 'react';
import {StyleSheet,Text,View,TouchableOpacity,TextInput,FlatList,Modal,Pressable,} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Car } from './App'; 
import { RootStackParamList } from './App';

type CustomerProps = {
  carList: Car[];
};

export default function Customer({ carList }: CustomerProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Customer'>>();

  const [selectedCarIndex, setSelectedCarIndex] = useState<number | null>(null);
  const [days, setDays] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const selectedCar = selectedCarIndex !== null ? carList[selectedCarIndex] : null;

  const calculateCost = () => {
    if (!selectedCar || !days) return 0;
    const daysNum = parseInt(days);
    const costNum = parseFloat(selectedCar.costPerDay);
    if (isNaN(daysNum) || isNaN(costNum)) return 0;
    return daysNum * costNum;
  };

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
                  {item.make} {item.model} - R {item.costPerDay} per day
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

              <TouchableOpacity style={styles.confirmButton} onPress={openModal}>
                <Text style={styles.confirmButtonText}>Show Total</Text>
              </TouchableOpacity>
            </>
          )}
        </>
      )}

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
    marginBottom: 10,
  },
  noCars: {
    fontSize: 18,
    color: '#ff0000',
    textAlign: 'center',
    marginTop: 50,
  },
  carItem: {
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
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
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
  },
  text: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 10,
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
});

