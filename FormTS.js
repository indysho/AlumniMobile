import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox'; 
import { FontAwesome5 } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function FormTS({ navigation }) {  // Destructure navigation to use it
  const [currentActivity, setCurrentActivity] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isCurrent, setIsCurrent] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {/* Header with 3-dot menu */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <FontAwesome5 name="bars" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Form Tracer Study</Text>
          <TouchableOpacity onPress={() => alert('More options')}>
            <FontAwesome5 name="ellipsis-v" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Pilih aktivitas anda saat ini:</Text>
        <TextInput
          style={styles.input}
          placeholder="Aktivitas saat ini"
          value={currentActivity}
          onChangeText={setCurrentActivity}
        />

        <Text style={styles.subTitle}>Informasi Pekerjaan</Text>

        <Text style={styles.label}>Nama Perusahaan:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nama Perusahaan"
          value={companyName}
          onChangeText={setCompanyName}
        />

        <Text style={styles.label}>Jabatan:</Text>
        <TextInput
          style={styles.input}
          placeholder="Jabatan"
          value={position}
          onChangeText={setPosition}
        />

        <Text style={styles.label}>Gaji:</Text>
        <TextInput
          style={styles.input}
          placeholder="Gaji"
          keyboardType="numeric"
          value={salary}
          onChangeText={setSalary}
        />

        <Text style={styles.label}>Lokasi:</Text>
        <TextInput
          style={styles.input}
          placeholder="Lokasi"
          value={location}
          onChangeText={setLocation}
        />

        <Text style={styles.label}>Tanggal Mulai:</Text>
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={(event, date) => setStartDate(date)}
          style={styles.input}
        />

        <Text style={styles.label}>Tanggal Selesai:</Text>
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={(event, date) => setEndDate(date)}
          style={styles.input}
        />

        <View style={styles.checkboxContainer}>
          <Checkbox
            value={isCurrent}
            onValueChange={setIsCurrent}
          />
          <Text style={styles.checkboxLabel}>Sampai Sekarang</Text>
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Tambah Pekerjaan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    flexGrow: 1,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
    fontSize: 14,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#1abc9c',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#1abc9c',
    paddingVertical: 12,
    borderRadius: 8,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
