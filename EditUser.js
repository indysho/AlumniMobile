import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default function EditUser({ navigation }) {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');

  const handleSave = () => {
    alert('Perubahan berhasil disimpan!');
    // Simpan ke backend atau state di sini
  };

  return (
    <ImageBackground
      source={require('./assets/bg-pattern.png')} // ganti path sesuai file kamu
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Edit User</Text>

          <Text>Username</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />

          <Text>Role</Text>
          <TextInput
            style={styles.input}
            value={role}
            onChangeText={setRole}
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.buttonText}>Save Change</Text>
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
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    alignSelf: 'center',
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
  closeButton: {
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
