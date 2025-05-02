// File: LoginAlumni.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Picker, ScrollView, Image } from 'react-native';
import Checkbox from 'expo-checkbox';


export default function LoginAlumni({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Admin');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Login Alumni</Text>

      <TextInput
        style={styles.input}
        placeholder="User Name"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Role:</Text>
        <Picker
          selectedValue={role}
          style={styles.picker}
          onValueChange={(itemValue) => setRole(itemValue)}
        >
          <Picker.Item label="Admin" value="Admin" />
          <Picker.Item label="Alumni" value="Alumni" />
        </Picker>
      </View>

      <View style={styles.checkboxContainer}>
      <Checkbox value={rememberMe} onValueChange={setRememberMe} />
        <Text style={styles.checkboxLabel}>Remember Me</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Image
        source={{ uri: 'https://polinef.ac.id/storage/uploads/pengumuman/PENGUMUMAN_SNBTPOLINEF24.jpg' }}
        style={styles.banner}
        resizeMode="contain"
      />

      <View style={styles.aboutBox}>
        <Text style={styles.aboutTitle}>About</Text>
        <Text style={styles.aboutText}>
          Ruang Alumni ditujukan bagi alumni Politeknik Negeri Fakfak seluruh angkatan untuk tracer study.
        </Text>
        <Text style={styles.aboutText}>
          📞 0822-4862-0075 {'\n'}
          📸 Instagram: @Official.Polinef {'\n'}
          🌐 https://polinef.siakadcloud.com
        </Text>
        <Text style={styles.warning}>
          ⚠️ Gunakan NIM sebagai username dan tanggal lahir (yyyy-mm-dd) sebagai password awal.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  pickerContainer: {
    width: '100%',
    marginVertical: 10,
  },
  label: {
    marginBottom: 5,
    fontWeight: '600',
  },
  picker: {
    height: 50,
    backgroundColor: '#fff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  checkboxLabel: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginVertical: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  banner: {
    width: '100%',
    height: 200,
    marginVertical: 20,
  },
  aboutBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    width: '100%',
    marginBottom: 40,
  },
  aboutTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  aboutText: {
    fontSize: 14,
    marginBottom: 5,
  },
  warning: {
    backgroundColor: '#fecaca',
    padding: 10,
    borderRadius: 5,
    fontSize: 13,
    color: '#b91c1c',
    marginTop: 10,
  },
});
