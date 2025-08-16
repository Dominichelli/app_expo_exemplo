import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState<null | number>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const calcularIMC = () => {
    const alturaMetros = parseFloat(altura) / 100;
    const imcCalculado = parseFloat(peso) / (alturaMetros * alturaMetros);
    setImc(Number(imcCalculado.toFixed(2)));
    setModalVisible(true);
  };

  return (
    <View style={styles.gradient}>
      <Text style={styles.title}>IMC Surpresa</Text>
      <View style={styles.inlineInputs}>
        <TextInput
          style={styles.input}
          value={peso}
          onChangeText={setPeso}
          placeholder="Peso"
          keyboardType="numeric"
          placeholderTextColor="#fff"
        />
        <Text style={styles.x}>×</Text>
        <TextInput
          style={styles.input}
          value={altura}
          onChangeText={setAltura}
          placeholder="Altura"
          keyboardType="numeric"
          placeholderTextColor="#fff"
        />
      </View>
      <TouchableOpacity style={styles.fab} onPress={calcularIMC}>
        <Text style={styles.fabText}>→</Text>
      </TouchableOpacity>
      <Modal
        transparent
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBg}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Seu IMC</Text>
            <Text style={styles.modalValue}>{imc}</Text>
            <TouchableOpacity style={styles.closeBtn} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'linear-gradient(135deg, #8162d4ff 0%, #ffb86b 100%)',
    // fallback para RN puro:
    backgroundColor: '#8162d4ff',
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#fff',
    marginBottom: 40,
    fontFamily: 'monospace',
    letterSpacing: 2,
    textShadowColor: '#ffb86b',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
  },
  inlineInputs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60,
    gap: 12,
  },
  input: {
    width: 100,
    height: 50,
    backgroundColor: '#8162d4cc',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ffb86b',
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 6,
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  x: {
    fontSize: 28,
    color: '#ffb86b',
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    backgroundColor: '#ffb86b',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#8162d4ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  fabText: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
  },
  modalBg: {
    flex: 1,
    backgroundColor: '#000a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    width: 280,
    shadowColor: '#8162d4ff',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 12,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8162d4ff',
    marginBottom: 12,
  },
  modalValue: {
    fontSize: 48,
    fontWeight: '900',
    color: '#ffb86b',
    marginBottom: 18,
  },
  closeBtn: {
    backgroundColor: '#8162d4ff',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  closeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default App;