import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';

export default function ManageUsers() {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Sample data
  const users = [
    { username: '15223452', role: 'Alumni' },
    { username: '1632047', role: 'Alumni' },
    { username: '16320040', role: 'Alumni' },
    { username: '13404231', role: 'Alumni' },
    { username: 'AdminIndy', role: 'Admin' },
    { username: 'AdminIltha', role: 'Admin' },
    { username: 'AdminEndang', role: 'Admin' },
  ];

  // Handle Search
  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  // Handle Pagination
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const currentPageData = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerTitle}>Manage Users</Text>

      {/* Search */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Users"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Add User Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add User</Text>
      </TouchableOpacity>

      {/* Users Table */}
      <FlatList
        data={currentPageData}
        keyExtractor={(item) => item.username}
        renderItem={({ item }) => (
          <View style={styles.userRow}>
            <Text style={styles.userText}>{item.username}</Text>
            <Text style={styles.userText}>{item.role}</Text>
            <View style={styles.actionContainer}>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionText}>✏️</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionText}>🗑️</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
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
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: 'white',
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
  userRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  userText: {
    fontSize: 16,
    width: '30%',
  },
  actionContainer: {
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'space-around',
  },
  actionButton: {
    padding: 5,
    backgroundColor: '#FFEB3B',
    borderRadius: 5,
  },
  actionText: {
    fontSize: 18,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pageButton: {
    backgroundColor: '#1d4ed8',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  pageText: {
    fontSize: 16,
    color: 'white',
  },
});
