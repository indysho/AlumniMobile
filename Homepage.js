import React from 'react';
import { View, Text, Button, Alert, Image, StyleSheet } from 'react-native';

const Homepage = ({ navigation }) => {
  const handleDaftarAlumni = () => {
    // Show an alert if the user clicks "Daftar Alumni"
    Alert.alert(
      'Login Dulu!',
      'Anda harus login terlebih dahulu untuk melihat daftar alumni!',
      [
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ]
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require('./Pict/Logo_PNF.png')} 
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>Sistem Informasi Alumni Polinef</Text>
      </View>

      {/* Content Section */}
      <View style={styles.content}>

          
          {/* Carousel Gambar */}
          <View style={styles.carousel}>
          <Image
            source={require('./Pict/Bpk.png')}
            style={styles.carouselImage}
          />
        </View>
        <Text style={styles.description}>
          Website ini didedikasikan untuk para alumni politeknik negeri fakfak dari seluruh angkatan. Kami memfasilitasi pendataan dan pemantauan perkembangan alumni,
          serta membina komunikasi yang harmonis dan berkelanjutan antara Polinef dan alumni.
        </Text>

        <Button
          title="Login Alumni"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Daftar Alumni"
          onPress={handleDaftarAlumni}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#475569',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 120,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  description: {
    textAlign: 'justify',
    marginBottom: 20,
    color: '#333',
    fontSize: 16,
  },
});

export default Homepage;
