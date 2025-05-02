import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput } from 'react-native';

export default function Berita() {
  const [newsData, setNewsData] = useState([
    {
      title: "Pj. Gubernur Papua Barat Hadir Kegiatan Pengenalan Kehidupan Kampus Mahasiswa Baru Politeknik",
      date: "05 September 2023",
      description: "Pengenalan kehidupan kampus untuk mahasiswa baru oleh Gubernur Papua Barat.",
      image: require('./Pict/berita1.png'),
    },
    {
      title: "Politeknik Fakfak Sediakan Fasilitas Sertifikasi Kompetensi Siswa SMK",
      date: "23 November 2024",
      description: "Politeknik Fakfak menyediakan fasilitas sertifikasi untuk siswa SMK.",
      image: require('./Pict/berita2.png'),
    },
    {
      title: "Mahasiswa Politeknik Fakfak Sabet Best Spirit di Ajang KMPIN 2024",
      date: "24 July 2024",
      description: "Mahasiswa Politeknik Fakfak meraih Best Spirit di ajang KMPIN 2024.",
      image: require('./Pict/berita3.png'),
    },
    {
      title: "Mahasiswa Politeknik Fakfak Bikin Sistem Anti Maling Helm Berbasis IoT",
      date: "28 December 2023",
      description: "Inovasi mahasiswa Politeknik Fakfak, sistem anti maling helm berbasis IoT.",
      image: require('./Pict/berita4.png'),
    }
  ]);

  const handleAddData = () => {
    // Logic for adding new data (open modal or navigate to another page for input)
    alert('Add Data button clicked!');
  };

  const handleEdit = (index) => {
    // Logic for editing the specific news article
    alert(`Edit news at index ${index}`);
  };

  const handleDelete = (index) => {
    // Logic for deleting the specific news article
    const newNewsData = newsData.filter((_, i) => i !== index);
    setNewsData(newNewsData);
    alert(`Deleted news at index ${index}`);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.newsCard}>
      <Image source={item.image} style={styles.newsImage} />
      <View style={styles.newsContent}>
        <Text style={styles.newsDate}>{item.date}</Text>
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsDescription}>{item.description}</Text>
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
      <Text style={styles.pageTitle}>Berita</Text>
      <TouchableOpacity style={styles.addButton} onPress={handleAddData}>
        <Text style={styles.addButtonText}>Tambah Data</Text>
      </TouchableOpacity>
      <FlatList
        data={newsData}
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
  newsCard: {
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 8,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 5,
  },
  newsImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  newsContent: {
    flex: 1,
    padding: 10,
  },
  newsDate: {
    fontSize: 14,
    color: '#888',
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  newsDescription: {
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
