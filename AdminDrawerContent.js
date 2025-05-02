//AdminDrawerContent.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

export default function AdminDrawerContent(props) {
  const navigation = useNavigation();
  const [showMasterData, setShowMasterData] = useState(false);

  return (
    <DrawerContentScrollView {...props} style={styles.drawerContainer}>
      <Text style={styles.sectionTitle}>CORE</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ADMDashboard')}>
        <Text style={styles.menuItem}>Dashboard</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>INTERFACE</Text>
      <TouchableOpacity onPress={() => setShowMasterData(!showMasterData)}>
        <Text style={styles.menuItem}>Master data ▾</Text>
      </TouchableOpacity>
      {showMasterData && (
        <View style={styles.subMenu}>
          <TouchableOpacity onPress={() => navigation.navigate('ADMDataAlumni')}>
            <Text style={styles.subMenuItem}>Alumni</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ADMDataPekerjaan')}>
            <Text style={styles.subMenuItem}>Pekerjaan & Gaji</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ADMDataPendidikan')}>
            <Text style={styles.subMenuItem}>Pendidikan Lanjut</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ADMDataUser')}>
            <Text style={styles.subMenuItem}>User/Alumni</Text>
          </TouchableOpacity>
        </View>
      )}

      <Text style={styles.sectionTitle}>OTHERS</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ADMDataBerita')}>
        <Text style={styles.menuItem}>Berita</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ADMDataLowongan')}>
        <Text style={styles.menuItem}>Lowongan kerja</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Logged in as:</Text>
        <Text style={styles.footerText}>ID: 16320093</Text>
        <Text style={styles.footerText}>Username: Adminitha</Text>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#888',
    marginTop: 20,
  },
  menuItem: {
    fontSize: 16,
    paddingVertical: 10,
    paddingLeft: 10,
    color: '#000',
  },
  subMenu: {
    paddingLeft: 20,
  },
  subMenuItem: {
    fontSize: 14,
    paddingVertical: 5,
    color: '#333',
  },
  footer: {
    marginTop: 30,
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  footerText: {
    fontSize: 12,
    color: '#555',
  },
});
