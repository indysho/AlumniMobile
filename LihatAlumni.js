import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';

export default function LihatAlumni({ navigation }) {
  return (
    <ImageBackground
      source={require('./assets/bg-pattern.png')} // Ganti sesuai lokasi file kamu
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.footer}>© SI ALUMNI 2024</Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Biodata Alumni</Text>

          <View style={styles.row}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100x130.png' }}
              style={styles.photo}
            />
            <View style={styles.dataContainer}>
              <Text style={styles.dataText}>
                <Text style={styles.label}>Nama Lengkap</Text>: Rafael William Struick{'\n'}
                <Text style={styles.label}>NIM</Text>: 16320035{'\n'}
                <Text style={styles.label}>Tempat&Tanggal Lahir</Text>: Belanda,2003-03-10{'\n'}
                <Text style={styles.label}>Jenis Kelamin</Text>: Laki-Laki{'\n'}
                <Text style={styles.label}>Alamat</Text>: Amsterdam, Belanda{'\n'}
                <Text style={styles.label}>Jurusan</Text>: Manajemen Informatika{'\n'}
                <Text style={styles.label}>Tahun Lulus</Text>: 2024
              </Text>
            </View>
          </View>

          <Text style={[styles.sectionTitle, { color: '#15803d' }]}>Pekerjaan & Pendidikan Lanjut</Text>
          <View style={styles.highlightBox}>
            <Text style={styles.jobLabel}>📁 Pekerjaan Saat Ini :</Text>
            <Text style={styles.jobText}>Cv Maju Jaya - Marketing Executive</Text>
          </View>

          <Text style={[styles.sectionTitle, { color: '#059669' }]}>Riwayat Pendidikan</Text>
          <View>
            <Text>🎓 SMAN 4 Bekasi - Teknik, 2014–2018</Text>
            <Text>🎓 SDIT Assalam - Pendidikan Menengah, 2005–2009</Text>
            <Text>🎓 SD Bunga Bangsa - Pendidikan Menengah, 2007–2012</Text>
            <Text>🎓 SMPN 2 JAKARTA - Pendidikan Dasar, 2005–2008</Text>
          </View>

          <Text style={[styles.sectionTitle, { color: '#0891b2' }]}>Kontak</Text>
          <Text>📧 Email : RafaelWilliam@gmail.com</Text>
          <Text>📞 Phone Number : 086330945109</Text>

          <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
            <Text style={styles.goBackText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  footer: {
    textAlign: 'center',
    color: '#6b7280',
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    elevation: 4,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#10b981',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  photo: {
    width: 100,
    height: 130,
    borderRadius: 10,
    marginRight: 15,
    backgroundColor: '#ccc',
  },
  dataContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  dataText: {
    fontSize: 14,
    color: '#111827',
  },
  label: {
    fontWeight: 'bold',
    color: '#111',
  },
  highlightBox: {
    backgroundColor: '#f0fdf4',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  jobLabel: {
    fontWeight: 'bold',
    color: '#065f46',
  },
  jobText: {
    color: '#064e3b',
  },
  goBackButton: {
    marginTop: 20,
    alignSelf: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#6b7280',
    borderRadius: 8,
  },
  goBackText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
