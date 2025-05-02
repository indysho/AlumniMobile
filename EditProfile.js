import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Platform, Button, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as DocumentPicker from 'expo-document-picker';
import { FontAwesome5 } from '@expo/vector-icons';

export default function EditProfile() {
  const [gender, setGender] = useState('');
  const [file, setFile] = useState(null);

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type === "success") {
      setFile(result.name);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome5 name="pen" size={18} color="white" />
        <Text style={styles.headerTitle}> Edit Profile</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Tempat & tanggal lahir" />

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Jenis Kelamin" value="" />
            <Picker.Item label="Laki-laki" value="Laki-laki" />
            <Picker.Item label="Perempuan" value="Perempuan" />
          </Picker>
        </View>

        <TextInput style={styles.input} placeholder="Alamat" />
        <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" />
        <TextInput style={styles.input} placeholder="Jurusan" />
        <TextInput style={styles.input} placeholder="Tahun lulus" keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Pekerjaan saat ini" />
        <TextInput style={styles.input} placeholder="Pendidikan lanjut saat ini" />
        <TextInput style={styles.input} placeholder="Riwayat pendidikan" />

        {/* Upload Foto */}
        <View style={styles.fileUploadContainer}>
          <TouchableOpacity style={styles.fileButton} onPress={pickDocument}>
            <Text style={styles.fileButtonText}>Pilih File</Text>
          </TouchableOpacity>
          <Text style={styles.fileName}>{file ? file : 'Tidak ada file yang dipilih'}</Text>
        </View>

        {/* Button Simpan dan Batal */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Simpan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Batal</Text>
          </TouchableOpacity>
        </View>
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
  header: {
    backgroundColor: '#2c3e50',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
  },
  form: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 7,
    marginBottom: 15,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
  },
  fileUploadContainer: {
    marginBottom: 20,
  },
  fileButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  fileButtonText: {
    fontWeight: 'bold',
  },
  fileName: {
    marginTop: 8,
    fontSize: 12,
    color: '#555',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 5,
  },
  saveButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 12,
    borderRadius: 8,
    flex: 1,
    marginLeft: 5,
  },
  cancelButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
