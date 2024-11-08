import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Menu Screen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Sign Out"
          onPress={() => navigation.navigate('Login')}
          color="#841584"
        />
        <Button
          title="Home"
          onPress={() => navigation.navigate('Landing')}
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
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
