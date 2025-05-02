import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';

export default function PekerjaanAlumni() {
  const [jobData, setJobData] = useState([
    {
      nim: '16320035',
      company: 'PT Telkom Mandiri',
      position: 'Superviso Produksi',
    },
    {
      nim: '16320046',
      company: 'PT Telkom Mandiri',
      position: 'Superviso Produksi',
    },
    {
      nim: '16320120',
      company: 'Juni Records',
      position: 'Penyanyi',
    },
    {
      nim: '16320066',
      company: 'Bank Nasional',
      position: 'Pegawai Bank',
    },
    {
      nim: '16320041',
      company: 'Tech Solutions',
      position: 'Dosen',
    },
    {
      nim: '16320043',
      company: 'Eco Solutions',
      position: 'Manager',
    },
    {
      nim: '16320045',
      company: 'Desain Web Inc',
      position: 'Desainer Web',
    }
  ]);

  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered Job Data based on search
  const filteredJobs = jobData.filter((job) =>
    job.nim.toLowerCase().includes(search.toLowerCase()) ||
    job.company.toLowerCase().includes(search.toLowerCase()) ||
    job.position.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination Logic
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const currentPageData = filteredJobs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleAddData = () => {
    // Logic for adding new job data
    alert('Add Data button clicked!');
  };

  const handleEdit = (index) => {
    // Logic for editing the job entry
    alert(`Edit job at index ${index}`);
  };

  const handleDelete = (index) => {
    // Logic for deleting the job entry
    const newJobData = jobData.filter((_, i) => i !== index);
    setJobData(newJobData);
    alert(`Deleted job at index ${index}`);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.jobCard}>
      <Text style={styles.jobText}>{item.nim}</Text>
      <Text style={styles.jobText}>{item.company}</Text>
      <Text style={styles.jobText}>{item.position}</Text>
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
      <Text style={styles.pageTitle}>Pekerjaan Alumni</Text>

      {/* Search */}
      <TextInput
        style={styles.searchInput}
        placeholder="Cari Nim, Nama Perusahaan, Jabatan"
        value={search}
        onChangeText={setSearch}
      />

      {/* Add Data Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddData}>
        <Text style={styles.addButtonText}>Tambah Data</Text>
      </TouchableOpacity>

      {/* Job List */}
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
  jobCard: {
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 8,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 5,
    padding: 10,
  },
  jobText: {
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
