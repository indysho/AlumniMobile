import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function TambahLowongan({ navigation }) {
  const [judul, setJudul] = useState('');
  const [tanggalUpload, setTanggalUpload] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [sumber, setSumber] = useState('');
  const [link, setLink] = useState('');
  const [gambar, setGambar] = useState(null);

  const openFilePicker = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: 'image/*',
    });
    if (result.assets && result.assets.length > 0) {
      setGambar(result.assets[0]);
    }
  };

  const handleSimpan = () => {
    alert('Lowongan berhasil ditambahkan!');
    // Logic simpan data bisa ditaruh di sini
  };

  return (
    <ImageBackground
      source={require('./assets/bg-pattern.png')} // Ganti sesuai path gambar kamu
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Tambah Lowongan</Text>

          <Text>Judul</Text>
          <TextInput style={styles.input} value={judul} onChangeText={setJudul} />

          <Text>Tanggal Upload</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
            <Text>{tanggalUpload.toISOString().split('T')[0]}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={tanggalUpload}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) setTanggalUpload(selectedDate);
              }}
            />
          )}

          <Text>Sumber</Text>
          <TextInput style={styles.input} value={sumber} onChangeText={setSumber} />

          <Text>Link</Text>
          <TextInput style={styles.input} value={link} onChangeText={setLink} />

          <Text>Gambar</Text>
          <TouchableOpacity onPress={openFilePicker} style={styles.filePicker}>
            <Text style={{ color: 'white' }}>Pilih File</Text>
          </TouchableOpacity>
          {gambar && (
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 13, marginBottom: 5 }}>File dipilih:</Text>
              <Image source={{ uri: gambar.uri }} style={styles.previewImage} />
            </View>
          )}

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
    marginBottom: 20,
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
  filePicker: {
    backgroundColor: '#6b7280',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  previewImage: {
    width: 100,
    height: 60,
    resizeMode: 'contain',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
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
