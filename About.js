import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';

export default function About({ navigation }) { // Add navigation prop here
  const showInfo = () => {
    Alert.alert(
      "Informasi Login",
      "Untuk mengakses Ruang Alumni, silahkan LOGIN terlebih dahulu pada form yang telah disediakan, gunakan NIM untuk username dan tanggal lahir (yyyy-mm-dd) untuk password pertama kali. Setelah itu ubahlah password Anda sesuai dengan yang Anda kehendaki.",
      [{ text: "Oke", style: "default" }]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Content Card */}
      <View style={styles.card}>
        <Text style={styles.title}>About</Text>

        <Text style={styles.sectionTitle}>TENTANG RUANG ALUMNI</Text>
        <Text style={styles.paragraph}>
          Ruang Alumni ditujukan bagi alumni Politeknik Negeri Fakfak seluruh angkatan dalam rangka proses pendataan dan tracer studi alumni, sehingga antara Polinef dan Alumni terjadi suatu komunikasi yang harmonis.
        </Text>

        <Text style={styles.sectionTitle}>Kontak Kami</Text>
        <Text style={styles.paragraph}>
          • Phone: <Text style={styles.link}>0822-4862-0075</Text>{'\n'}
          • Instagram: <Text style={styles.link}>@Official.Polinef</Text>{'\n'}
          • Polinef Information Center: <Text style={styles.link}>https://polinef.siakadcloud.com</Text>
        </Text>

        <View style={styles.alertBox}>
          <Text style={styles.alertText}>
            Untuk mengakses Ruang Alumni, silahkan LOGIN terlebih dahulu pada form yang telah disediakan, gunakan NIM untuk username dan tanggal lahir (yyyy-mm-dd) untuk password pertama kali. Setelah itu ubahlah password Anda sesuai dengan yang Anda kehendaki.
          </Text>
        </View>
      </View>

      {/* Go Back Button */}
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}> {/* Use goBack() here */}
        <Text style={styles.goBackText}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flexGrow: 1,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#f1f5f9',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 15,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16,
  },
  paragraph: {
    fontSize: 14,
    marginBottom: 10,
    color: '#333',
  },
  link: {
    color: '#1d4ed8',
  },
  alertBox: {
    backgroundColor: '#fecaca',
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
  },
  alertText: {
    fontSize: 13,
    color: '#7f1d1d',
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
