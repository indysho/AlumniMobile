import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5, Entypo } from '@expo/vector-icons';

export default function ProfileAlumni({ navigation }) {  // Destructure navigation to use it
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header with Three-Dot Menu */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <FontAwesome5 name="bars" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profil Alumni</Text>
        <TouchableOpacity onPress={() => alert('More options')}>
          <FontAwesome5 name="ellipsis-v" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Biodata Alumni */}
      <View style={styles.card}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Biodata Alumni</Text>
          <View style={styles.row}>
            <Image
              source={{ uri: 'https://via.placeholder.com/80' }}
              style={styles.profilePic}
            />
            <View style={styles.textBlock}>
              <Text style={styles.itemText}><Text style={styles.bold}>Nama Lengkap :</Text> Rafael William Struick</Text>
              <Text style={styles.itemText}><Text style={styles.bold}>NIM :</Text> 16320035</Text>
              <Text style={styles.itemText}><Text style={styles.bold}>Tempat & Tanggal Lahir :</Text> Belanda, 2003-03-10</Text>
              <Text style={styles.itemText}><Text style={styles.bold}>Jenis Kelamin :</Text> Laki-Laki</Text>
              <Text style={styles.itemText}><Text style={styles.bold}>Alamat :</Text> Amsterdam, Belanda</Text>
              <Text style={styles.itemText}><Text style={styles.bold}>Jurusan :</Text> Manajemen Informatika</Text>
              <Text style={styles.itemText}><Text style={styles.bold}>Tahun Lulus :</Text> 2024</Text>
            </View>
          </View>
        </View>

        {/* Pekerjaan & Pendidikan Lanjut */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Pekerjaan & <Text style={styles.greenText}>Pendidikan Lanjut</Text>
          </Text>
          <Text style={styles.itemText}>
            <Entypo name="briefcase" size={16} /> Pekerjaan Saat Ini : Cv Maju Jaya - Marketing Executive
          </Text>
        </View>

        {/* Riwayat Pendidikan */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Riwayat <Text style={styles.greenText}>Pendidikan</Text>
          </Text>
          <Text style={styles.itemText}>
            🎓 SMAN 4 Bekasi - Teknik, 2014–2018
          </Text>
          <Text style={styles.itemText}>
            🎓 SDIT Assalam - Pendidikan Menengah, 2005–2009
          </Text>
          <Text style={styles.itemText}>
            🎓 SD Bunga Bangsa - Pendidikan Menengah, 2007–2012
          </Text>
        </View>

        {/* Kontak */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Kontak</Text>
          <Text style={styles.itemText}>
            📧 Email: anisa.putri.utami@gmail.com
          </Text>
          <Text style={styles.itemText}>
            📱 Phone Number: 086330945109
          </Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.goBackButton}>
            <Text style={styles.goBackText}>Go Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#2c3e50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  textBlock: {
    flex: 1,
  },
  itemText: {
    marginBottom: 5,
    fontSize: 14,
  },
  bold: {
    fontWeight: 'bold',
  },
  greenText: {
    color: 'green',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  goBackButton: {
    backgroundColor: '#ccc',
    flex: 1,
    marginRight: 10,
    paddingVertical: 12,
    borderRadius: 8,
  },
  editButton: {
    backgroundColor: 'green',
    flex: 1,
    marginLeft: 10,
    paddingVertical: 12,
    borderRadius: 8,
  },
  goBackText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  editText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});
