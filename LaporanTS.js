import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'; 

export default function LaporanTS({ navigation }) {  // Destructure navigation to use it
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Hamburger menu for opening drawer */}
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <FontAwesome5 name="bars" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Laporan Tracer Study</Text>
        {/* Three-dot menu */}
        <TouchableOpacity onPress={() => alert('More options')}>
          <FontAwesome5 name="ellipsis-v" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Kategori */}
      <Text style={styles.kategoriText}>Kategori : Kerja</Text>

      {/* Riwayat Pekerjaan */}
      <View style={styles.card}>
        <TouchableOpacity style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Riwayat Pekerjaan</Text>
          <MaterialIcons name="keyboard-arrow-up" size={24} color="black" />
        </TouchableOpacity>

        {/* PT Indotek Digital */}
        <View style={styles.jobSection}>
          <View style={styles.row}>
            <FontAwesome5 name="globe" size={16} color="black" />
            <Text style={styles.companyText}> PT Indotek Digital</Text>
          </View>
          <View style={styles.row}>
            <FontAwesome5 name="user-tie" size={16} color="black" />
            <Text style={styles.detailText}> Supervisor Produksi</Text>
          </View>
          <View style={styles.row}>
            <FontAwesome5 name="dollar-sign" size={16} color="black" />
            <Text style={styles.detailText}> Rp.5000.000</Text>
          </View>
          <View style={styles.row}>
            <FontAwesome5 name="map-marker-alt" size={16} color="black" />
            <Text style={styles.detailText}> Jayapura</Text>
          </View>
          <View style={styles.row}>
            <FontAwesome5 name="calendar-alt" size={16} color="black" />
            <Text style={styles.detailText}> 02 Februari 2007 - 07 April 2018</Text>
          </View>
        </View>

        {/* PT Telkom Mandiri */}
        <View style={styles.jobSection}>
          <View style={styles.row}>
            <FontAwesome5 name="globe" size={16} color="black" />
            <Text style={styles.companyText}> PT Telkom Mandiri</Text>
          </View>
          <View style={styles.row}>
            <FontAwesome5 name="laptop-code" size={16} color="black" />
            <Text style={styles.detailText}> Software Developer</Text>
          </View>
          <View style={styles.row}>
            <FontAwesome5 name="dollar-sign" size={16} color="black" />
            <Text style={styles.detailText}> Rp.9000.000</Text>
          </View>
          <View style={styles.row}>
            <FontAwesome5 name="map-marker-alt" size={16} color="black" />
            <Text style={styles.detailText}> Jakarta</Text>
          </View>
          <View style={styles.row}>
            <FontAwesome5 name="calendar-alt" size={16} color="black" />
            <Text style={styles.detailText}> 02 Februari 2025 - Sekarang</Text>
          </View>
        </View>
      </View>

      {/* Pendidikan */}
      <View style={styles.card}>
        <TouchableOpacity style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Pendidikan</Text>
          <MaterialIcons name="keyboard-arrow-up" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.jobSection}>
          <Text style={styles.noDataText}>Belum ada data pendidikan lanjut</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
  kategoriText: {
    margin: 15,
    fontSize: 16,
  },
  card: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  jobSection: {
    marginTop: 10,
    paddingLeft: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  companyText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  detailText: {
    fontSize: 14,
  },
  noDataText: {
    marginTop: 10,
    fontSize: 14,
    color: 'grey',
  },
});
