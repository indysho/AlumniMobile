import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function AfterLogin({ navigation }) {
  const handleLogout = () => {
    // Log out functionality (navigate to Homepage)
    navigation.navigate('Homepage');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}> 
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <FontAwesome5 name="bars" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Image source={require('./Pict/Logo_PNF.png')} style={styles.logo} />
          <Text style={styles.headerTitle}>Sistem Informasi Alumni</Text>
        </View>
        <TouchableOpacity onPress={() => alert('User Info')}>
          <FontAwesome5 name="user" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Carousel Image */}
      <View style={styles.carousel}>
        <Image source={require('./Pict/Bpk.png')} style={styles.carouselImage} />
      </View>

      {/* Content Sections */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Lowongan Kerja</Text>
        <View style={styles.jobRow}>
          <TouchableOpacity style={styles.jobItem} onPress={() => alert('Job details')}>
            <Image source={require('./Pict/PolinefStaff.png')} style={styles.jobImage} />
            <Text style={styles.jobText}>Staff Polinef...</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.jobItem} onPress={() => alert('Job details')}>
            <Image source={require('./Pict/BankMandiri.png')} style={styles.jobImage} />
            <Text style={styles.jobText}>Bank Mandiri...</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.jobItem} onPress={() => alert('Job details')}>
            <Image source={require('./Pict/BerantasJudol.png')} style={styles.jobImage} />
            <Text style={styles.jobText}>Berantas Judol...</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Berita Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Berita</Text>
        <View style={styles.jobRow}>
          <TouchableOpacity style={styles.jobItem} onPress={() => alert('News details')}>
            <Image source={require('./Pict/PendaftaranPNF.png')} style={styles.jobImage} />
            <Text style={styles.jobText}>Pendaftaran T...</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.jobItem} onPress={() => alert('News details')}>
            <Image source={require('./Pict/PakSubhan.png')} style={styles.jobImage} />
            <Text style={styles.jobText}>Politeknik Ne...</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.jobItem} onPress={() => alert('News details')}>
            <Image source={require('./Pict/KMIPN.png')} style={styles.jobImage} />
            <Text style={styles.jobText}>Ajang KMIPN...</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2c3e50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
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
  carousel: {
    margin: 15,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  carouselImage: {
    width: '100%',
    height: 180,
  },
  section: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  jobRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  jobItem: {
    width: '30%',
    alignItems: 'center',
  },
  jobImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 5,
  },
  jobText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  logoutText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
