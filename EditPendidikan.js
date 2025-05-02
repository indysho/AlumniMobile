import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default function EditPendidikan({ navigation }) {
  const [nim, setNim] = useState('');
  const [institusi, setInstitusi] = useState('');
  const [prodi, setProdi] = useState('');
  const [jenjang, setJenjang] = useState('');
  const [ipk, setIpk] = useState('');
  const [status, setStatus] = useState('');

  const handleSimpan = () => {
    alert('Data pendidikan berhasil disimpan!');
    // Kirim data ke backend di sini
  };

  return (
    <ImageBackground
      source={require('./assets/bg-pattern.png')} // ganti sesuai file kamu
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Edit Pendidikan</Text>

          <Text style={styles.label}>Nim</Text>
          <TextInput style={styles.input} value={nim} onChangeText={setNim} />

          <Text style={styles.label}>Institusi</Text>
          <TextInput style={styles.input} value={institusi} onChangeText={setInstitusi} />

          <Text style={styles.label}>Program Studi</Text>
          <TextInput style={styles.input} value={prodi} onChangeText={setProdi} />

          <Text style={styles.label}>Jenjang</Text>
          <TextInput style={styles.input} value={jenjang} onChangeText={setJenjang} />

          <Text style={styles.label}>IPK</Text>
          <TextInput
            style={styles.input}
            value={ipk}
            onChangeText={setIpk}
            keyboardType="decimal-pad"
          />

          <Text style={styles.label}>Status</Text>
          <TextInput style={styles.input} value={status} onChangeText={setStatus} />

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.saveButton} onPress={handleSimpan}>
              <Text style={styles.buttonText}>Simpan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Text style={styles.buttonText}>Kembali</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    alignSelf: 'center',
  },
  label: {
    fontWeight: '500',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    backgroundColor: '#3b82f6',
    padding: 10,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#6b7280',
    padding: 10,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
