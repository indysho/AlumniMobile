import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';

export default function KlaimAcc({ navigation }) {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleKlaim = () => {
    // Add logic to handle account claiming
    if (newPassword !== confirmPassword) {
      alert('Password dan Konfirmasi Password tidak cocok!');
    } else {
      alert('Akun berhasil diaktifkan! Anda sekarang dapat masuk.');
      // Navigate to AfterLogin screen after successful account claim
      navigation.navigate('AfterLogin');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('./Pict/Logo_PNF.png')}
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>Sistem Informasi Alumni</Text>
      </View>

      {/* Form Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Klaim Akun</Text>

        <Text style={styles.label}>Email Baru:</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Email Baru"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password Baru:</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Password Baru"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <Text style={styles.label}>Konfirmasi Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ulangi Password Baru"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleKlaim}>
          <Text style={styles.buttonText}>Klaim Akun</Text>
        </TouchableOpacity>

        <Text style={styles.successText}>
          Akun berhasil diaktifkan! Anda sekarang dapat masuk.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#475569',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#f1f5f9',
    margin: 20,
    borderRadius: 15,
    padding: 20,
    elevation: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontSize: 14,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#1d4ed8',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  successText: {
    marginTop: 20,
    fontSize: 12,
    color: '#4ade80',
    textAlign: 'center',
  },
});
