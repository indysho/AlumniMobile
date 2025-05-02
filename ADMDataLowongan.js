import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput } from 'react-native';

export default function LowonganKerja() {
  const [jobData, setJobData] = useState([
    {
      title: "Pegadaian Buka Lowongan Kerja untuk Lulusan S1, Simak Kualifikasinya",
      date: "17 January 2025",
      description: "Pegadaian membuka lowongan untuk lulusan S1 dengan berbagai posisi.",
      image: require('./Pict/job1.png'),
    },
    {
      title: "Lowongan Kerja Bank Mandiri untuk Lulusan S1 dan S2 dari Berbagai Jurusan",
      date: "31 December 2024",
      description: "Bank Mandiri membuka lowongan kerja untuk lulusan S1 dan S2.",
      image: require('./Pict/job2.png'),
    },
    {
      title: "Pegadaian Buka Lowongan Bidang Teknologi Informasi",
      date: "03 January 2025",
      description: "Pegadaian membuka lowongan kerja di bidang Teknologi Informasi.",
      image: require('./Pict/job3.png'),
    },
    {
      title: "BPJS Kesehatan Buka Lowongan Kerja Penempatan di Jakarta",
      date: "31 December 2024",
      description: "BPJS Kesehatan membuka lowongan kerja untuk posisi tertentu di Jakarta.",
      image: require('./Pict/job4.png'),
    }
  ]);

  const handleAddData = () => {
    // Logic for adding new job vacancy data
    alert('Add Data button clicked!');
  };

  const handleEdit = (index) => {
    // Logic for editing the specific job vacancy
    alert(`Edit job at index ${index}`);
  };

  const handleDelete = (index) => {
    // Logic for deleting the specific job vacancy
    const newJobData = jobData.filter((_, i) => i !== index);
    setJobData(newJobData);
    alert(`Deleted job at index ${index}`);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.jobCard}>
      <Image source={item.image} style={styles.jobImage} />
      <View style={styles.jobContent}>
        <Text style={styles.jobDate}>{item.date}</Text>
        <Text style={styles.jobTitle}>{item.title}</Text>
        <Text style={styles.jobDescription}>{item.description}</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity onPress={() => handleEdit(index)} style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(index)} style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Hapus</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => alert('Link clicked')} style={styles.linkButton}>
          <Text style={styles.linkButtonText}>Link</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Lowongan Kerja</Text>
      <TouchableOpacity style={styles.addButton} onPress={handleAddData}>
        <Text style={styles.addButtonText}>Tambah Data</Text>
      </TouchableOpacity>
      <FlatList
        data={jobData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
  jobCard: {
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 8,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 5,
  },
  jobImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  jobContent: {
    flex: 1,
    padding: 10,
  },
  jobDate: {
    fontSize: 14,
    color: '#888',
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  jobDescription: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  actionButtons: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  actionButton: {
    backgroundColor: '#FFEB3B',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  actionButtonText: {
    fontSize: 14,
    color: '#333',
  },
  linkButton: {
    marginTop: 10,
    backgroundColor: '#1d4ed8',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  linkButtonText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
});
