import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function TambahPekerjaan({ navigation }) {
  const [nim, setNim] = useState('');
  const [perusahaan, setPerusahaan] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [gaji, setGaji] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [tanggalMulai, setTanggalMulai] = useState(new Date());
  const [tanggalSelesai, setTanggalSelesai] = useState(new Date());
  const [showMulai, setShowMulai] = useState(false);
  const [showSelesai, setShowSelesai] = useState(false);

  const handleSimpan = () => {
    alert('Data pekerjaan berhasil ditambahkan!');
    // Kirim ke backend di sini
  };

  return (
    <ImageBackground
      source={require('./assets/bg-pattern.png')} // ganti sesuai path
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Tambah pekerjaan</Text>

          <Text style={styles.label}>NIM</Text>
          <TextInput
            style={styles.input}
            placeholder="Ketik NIM"
            value={nim}
            onChangeText={setNim}
          />

          <Text style={styles.label}>Nama Perusahaan</Text>
          <TextInput
            style={styles.input}
            value={perusahaan}
            onChangeText={setPerusahaan}
          />

          <Text style={styles.label}>Jabatan</Text>
          <TextInput
            style={styles.input}
            value={jabatan}
            onChangeText={setJabatan}
          />

          <Text style={styles.label}>Gaji (in Rupiah)</Text>
          <TextInput
            style={styles.input}
            placeholder="Contoh:3500000"
            value={gaji}
            onChangeText={setGaji}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Lokasi</Text>
          <TextInput
            style={styles.input}
            value={lokasi}
            onChangeText={setLokasi}
          />

          <Text style={styles.label}>Tanggal mulai</Text>
          <TouchableOpacity onPress={() => setShowMulai(true)} style={styles.input}>
            <Text>{tanggalMulai.toISOString().split('T')[0]}</Text>
          </TouchableOpacity>
          {showMulai && (
            <DateTimePicker
              value={tanggalMulai}
              mode="date"
              display="default"
              onChange={(e, date) => {
                setShowMulai(false);
                if (date) setTanggalMulai(date);
              }}
            />
          )}

          <Text style={styles.label}>Tanggal selesai</Text>
          <TouchableOpacity onPress={() => setShowSelesai(true)} style={styles.input}>
            <Text>{tanggalSelesai.toISOString().split('T')[0]}</Text>
          </TouchableOpacity>
          {showSelesai && (
            <DateTimePicker
              value={tanggalSelesai}
              mode="date"
              display="default"
              onChange={(e, date) => {
                setShowSelesai(false);
                if (date) setTanggalSelesai(date);
              }}
            />
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
    marginTop: 10,
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
