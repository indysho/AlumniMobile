//Login.js

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView, Platform } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Picker } from '@react-native-picker/picker';

export default function Login({ navigation }) { // Add navigation prop here
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [notRobot, setNotRobot] = useState(false);

  const handleLogin = () => {
    if (!notRobot) {
      alert('Silakan verifikasi bahwa Anda bukan robot!');
    } else if (!role) {
      alert('Silakan pilih role terlebih dahulu!');
    } else {
      alert('Login sukses!');
      
      if (role === 'alumni') {
        navigation.navigate('KlaimAcc', {
          username: username,
          role: role
        });
      } else if (role === 'admin') {
        navigation.navigate('ADMDashboard', {
          username: username,
          role: role
        });
      }
    }
  };
  

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={require('./Pict/Logo_PNF.png')} style={styles.logo} />
          <Text style={styles.headerTitle}>Ruang Alumni</Text>
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Text style={styles.helpIcon}>?</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Icon */}
        <View style={styles.profileIconContainer}>
          <Image source={require('./Pict/IconUser.png')} style={styles.profileIcon} />
          <Text style={styles.loginTitle}>Login User</Text>
        </View>

        {/* Login Form */}
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder="Enter NIM" value={username} onChangeText={setUsername} />
          <TextInput style={styles.input} placeholder="Tanggal Lahir : 2007-04-14" value={password} onChangeText={setPassword} secureTextEntry />
          <View style={styles.pickerContainer}>
            <Picker selectedValue={role} onValueChange={(itemValue) => setRole(itemValue)} style={styles.picker}>
              <Picker.Item label="Role" value="" />
              <Picker.Item label="Alumni" value="alumni" />
              <Picker.Item label="Admin" value="admin" />
            </Picker>
          </View>

          {/* Checkbox */}
          <View style={styles.checkboxRow}>
            <View style={styles.checkboxContainer}>
              <Checkbox value={rememberMe} onValueChange={setRememberMe} />
              <Text style={styles.checkboxLabel}>Remember Me</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox value={notRobot} onValueChange={setNotRobot} />
              <Text style={styles.checkboxLabel}>I'm not a robot</Text>
            </View>
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Go Back Button */}
              <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}> {/* Use goBack() here */}
                <Text style={styles.goBackText}>Go Back</Text>
              </TouchableOpacity>
            </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flexGrow: 1,
    paddingBottom: 20,
    paddingTop: Platform.OS === 'ios' ? 50 : 0,
  },
  header: {
    backgroundColor: '#475569',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 25,
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 25,
    textAlign: 'center',
  },
  helpIcon: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 25,
  },
  profileIconContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
  },
  loginTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  card: {
    backgroundColor: '#f1f5f9',
    marginHorizontal: 20,
    borderRadius: 15,
    padding: 20,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginBottom: 15,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  checkboxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 5,
  },
  loginButton: {
    backgroundColor: '#1d4ed8',
    paddingVertical: 12,
    borderRadius: 8,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  goBackButton: {
    marginTop: 20,
    alignSelf: 'center',
  },
  goBackText: {
    fontWeight: 'bold',
    color: '#475569',
  },
});
