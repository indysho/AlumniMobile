// ADMDashboard.js

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';
import { createDrawerNavigator } from '@react-navigation/drawer';

const screenWidth = Dimensions.get('window').width;

// Ini akan menerima props dari route
function Dashboard({ route }) {
  const { username = 'admin', role = 'admin' } = route.params || {};

  const salaryData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [2, 3, 4, 5, 3, 6],
        strokeWidth: 2,
        color: (opacity = 1) => `rgba(75,192,192, ${opacity})`,
      },
    ],
  };

  const jobDistributionData = [
    { name: 'PT Maya', population: 20, color: '#FF6384', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'PT Jaya', population: 30, color: '#36A2EB', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'PT Bina', population: 25, color: '#FFCE56', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'PT Andi', population: 15, color: '#4BC0C0', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Others', population: 10, color: '#FF9F40', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard Admin</Text>
        <Text style={styles.subHeader}>Login sebagai: {username} ({role})</Text>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.dashboardCard}>
          <Text style={styles.cardTitle}>Alumni</Text>
          <Text style={styles.cardNumber}>29</Text>
        </View>
        <View style={styles.dashboardCard}>
          <Text style={styles.cardTitle}>Lowongan</Text>
          <Text style={styles.cardNumber}>8</Text>
        </View>
        <View style={styles.dashboardCard}>
          <Text style={styles.cardTitle}>Berita</Text>
          <Text style={styles.cardNumber}>8</Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Rata-rata Gaji</Text>
        <View style={styles.chartCard}>
          <LineChart
            data={salaryData}
            width={screenWidth - 40}
            height={220}
            chartConfig={chartConfig}
            bezier
          />
        </View>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Distribusi Pekerjaan</Text>
        <View style={styles.chartCard}>
          <PieChart
            data={jobDistributionData}
            width={screenWidth - 40}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
          />
        </View>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Distribusi Pendidikan</Text>
        <Text style={styles.emptyChart}>No Data</Text>
      </View>
    </ScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function ADMDashboard({ route }) {
  return (
    <Drawer.Navigator 
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <AdminDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Dashboard"
        component={ADMDashboard}
        initialParams={route.params}
      />
    </Drawer.Navigator>
  );
}

const chartConfig = {
  backgroundGradientFrom: '#fb8c00',
  backgroundGradientTo: '#ffa726',
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(255,255,255,${opacity})`,
  labelColor: (opacity = 1) => `rgba(255,255,255,${opacity})`,
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  dashboardCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    color: '#333',
  },
  cardNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1d4ed8',
  },
  chartContainer: {
    marginVertical: 15,
  },
  chartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  chartCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  emptyChart: {
    fontSize: 14,
    textAlign: 'center',
    color: '#999',
  },
});
