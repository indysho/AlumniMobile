import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function AddUser({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleAddUser = () => {
    if (!username || !password || !role) {
      alert('Semua field wajib diisi!');
      return;
    }

    alert('User berhasil ditambahkan!');
    // Tambahkan fungsi simpan ke backend di sini
  };

  return (
    <ImageBackground
      source={require('./assets/bg-pattern.png')} // sesuaikan dengan path gambar kamu
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Add User</Text>
          <Text style={styles.subnav}>Dashboard / <Text style={{ fontWeight: 'bold' }}>Add User</Text></Text>

          <Text style={styles.label}>Username:</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />

          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Text style={styles.label}>Role</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={role}
              onValueChange={(itemValue) => setRole(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Pilih Role" value="" />
              <Picker.Item label="Admin" value="admin" />
              <Picker.Item label="Alumni" value="alumni" />
            </Picker>
          </View>

          <TouchableOpacity style={styles.addButton} onPress={handleAddUser}>
            <Text style={styles.addButtonText}>Add user</Text>
          </TouchableOpacity>
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
    marginBottom: 5,
    alignSelf: 'center',
  },
  subnav: {
    fontSize: 12,
    color: '#4b5563',
    textAlign: 'center',
    marginBottom: 20,
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
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: 'white',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  addButton: {
    backgroundColor: '#3b82f6',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
