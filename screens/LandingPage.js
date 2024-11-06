import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Drury Commons Dining Hall App</Text>
      <Text style={styles.subtitle}>A more accurate glimpse at the day</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="View Menu"
          onPress={() => navigation.navigate('Menu')}
          color="#841584"
        />
        <Button
          title="Log In"
          onPress={() => navigation.navigate('Login')}
          color="#841584"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
    },
    logo: {
      width: 200, // Set the width to a larger size
      height: 200, // Set the height to a larger size
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 16,
      color: '#666',
      marginBottom: 30,
      textAlign: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '60%',
      marginTop: 20,
    },
  });
  