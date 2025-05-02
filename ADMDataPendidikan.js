import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';

export default function PendidikanLanjut() {
  const [educationData, setEducationData] = useState([
    {
      nim: '17823456',
      fullName: 'Afita Putri',
      degree: 'S2',
    },
    {
      nim: '16545809',
      fullName: 'Andreas Reyliando',
      degree: 'S1',
    },
    {
      nim: '1223452',
      fullName: 'Daina Pratama',
      degree: 'S2',
    },
    {
      nim: '11011246',
      fullName: 'Wanda Kibas',
      degree: 'S1',
    },
    {
      nim: '14578020',
      fullName: 'Ramli Keliolan',
      degree: 'S1',
    }
  ]);

  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered Education Data based on search
  const filteredEducation = educationData.filter((data) =>
    data.nim.toLowerCase().includes(search.toLowerCase()) ||
    data.fullName.toLowerCase().includes(search.toLowerCase()) ||
    data.degree.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination Logic
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredEducation.length / itemsPerPage);
  const currentPageData = filteredEducation.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleAddData = () => {
    // Logic for adding new education data
    alert('Add Data button clicked!');
  };

  const handleEdit = (index) => {
    // Logic for editing the education entry
    alert(`Edit education data at index ${index}`);
  };

  const handleDelete = (index) => {
    // Logic for deleting the education entry
    const newEducationData = educationData.filter((_, i) => i !== index);
    setEducationData(newEducationData);
    alert(`Deleted education data at index ${index}`);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.educationCard}>
      <Text style={styles.educationText}>{item.nim}</Text>
      <Text style={styles.educationText}>{item.fullName}</Text>
      <Text style={styles.educationText}>{item.degree}</Text>
      <View style={styles.actionButtons}>
        <TouchableOpacity onPress={() => handleEdit(index)} style={styles.actionButton}>
          <Text style={styles.actionButtonText}>✏️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(index)} style={styles.actionButton}>
          <Text style={styles.actionButtonText}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Pendidikan Lanjut Alumni</Text>

      {/* Search */}
      <TextInput
        style={styles.searchInput}
        placeholder="Cari Nim, Nama, Degree"
        value={search}
        onChangeText={setSearch}
      />

      {/* Add Data Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddData}>
        <Text style={styles.addButtonText}>Tambah Data</Text>
      </TouchableOpacity>

      {/* Education List */}
      <FlatList
        data={currentPageData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />

      {/* Pagination */}
      <View style={styles.paginationContainer}>
        <TouchableOpacity onPress={handlePrevPage} style={styles.pageButton}>
          <Text style={styles.pageText}>Prev</Text>
        </TouchableOpacity>
        <Text style={styles.pageText}>{currentPage} / {totalPages}</Text>
        <TouchableOpacity onPress={handleNextPage} style={styles.pageButton}>
          <Text style={styles.pageText}>Next</Text>
        </TouchableOpacity>
      </View>
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
  searchInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: 'white',
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
  educationCard: {
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 8,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 5,
    padding: 10,
  },
  educationText: {
    fontSize: 16,
    marginVertical: 5,
    width: '25%',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '25%',
    alignItems: 'center',
  },
  actionButton: {
    backgroundColor: '#FFEB3B',
    padding: 5,
    borderRadius: 5,
  },
  actionButtonText: {
    fontSize: 18,
    color: '#333',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  pageButton: {
    backgroundColor: '#1d4ed8',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  pageText: {
    fontSize: 16,
    color: 'white',
  },
});
