import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput } from 'react-native';

export default function DaftarAlumni() {
  const [alumniData, setAlumniData] = useState([
    {
      nim: '16320035',
      name: 'Rafael William Struick',
      department: 'Manajemen Informatika',
      image: require('./Pict/RafaPic.png'),
    },
    {
      nim: '16321170',
      name: 'Zee Jekatdimana',
      department: 'Rekayasa Jalan dan Jembatan',
      image: require('./Pict/ZeePic.png'),
    },
    {
      nim: '16320066',
      name: 'Levi Ackerman',
      department: 'Teknik Mesin',
      image: require('./Pict/LeviPic.png'),
    },
    {
      nim: '16320043',
      name: 'Endang Aftia',
      department: 'Manajemen Informatika',
      image: require('./Pict/EndangPic.png'),
    },
    {
      nim: '16320041',
      name: 'Anindi Maulani Mustofa',
      department: 'Manajemen Informatika',
      image: require('./Pict/IndyPic.png'),
    }
  ]);

  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered Alumni based on search
  const filteredAlumni = alumniData.filter((alumni) =>
    alumni.nim.toLowerCase().includes(search.toLowerCase()) ||
    alumni.name.toLowerCase().includes(search.toLowerCase()) ||
    alumni.department.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination Logic
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredAlumni.length / itemsPerPage);
  const currentPageData = filteredAlumni.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleAddData = () => {
    // Logic for adding new alumni data
    alert('Add Data button clicked!');
  };

  const handleEdit = (index) => {
    // Logic for editing the alumni information
    alert(`Edit alumni at index ${index}`);
  };

  const handleDelete = (index) => {
    // Logic for deleting alumni
    const newAlumniData = alumniData.filter((_, i) => i !== index);
    setAlumniData(newAlumniData);
    alert(`Deleted alumni at index ${index}`);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.alumniCard}>
      <Image source={item.image} style={styles.alumniImage} />
      <View style={styles.alumniContent}>
        <Text style={styles.alumniName}>{item.name}</Text>
        <Text style={styles.alumniDepartment}>{item.department}</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity onPress={() => alert(`View alumni ${item.nim}`)} style={styles.actionButton}>
            <Text style={styles.actionButtonText}>👁️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleEdit(index)} style={styles.actionButton}>
            <Text style={styles.actionButtonText}>✏️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(index)} style={styles.actionButton}>
            <Text style={styles.actionButtonText}>🗑️</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Daftar Alumni & Claims</Text>

      {/* Search */}
      <TextInput
        style={styles.searchInput}
        placeholder="Cari Nim, Nama, Jurusan, Email"
        value={search}
        onChangeText={setSearch}
      />

      {/* Add Data Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddData}>
        <Text style={styles.addButtonText}>Tambah Data</Text>
      </TouchableOpacity>

      {/* Alumni List */}
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
  alumniCard: {
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 8,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 5,
  },
  alumniImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  alumniContent: {
    flex: 1,
    padding: 10,
  },
  alumniName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  alumniDepartment: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#FFEB3B',
    padding: 5,
    borderRadius: 5,
  },
  actionButtonText: {
    fontSize: 16,
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
