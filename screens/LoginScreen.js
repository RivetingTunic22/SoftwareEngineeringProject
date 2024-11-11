import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Pressable, Image} from 'react-native';

export default function LoginScreen({ navigation }) {
const [email, setEmail] = useState()
const [pass, setPass] = useState()
  return (
    <View style={styles.container} >
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Drury Commons Dining Hall App</Text>
      <Text style={styles.subtitle}>A more accurate glimpse at the day</Text>
      <View>
        <Text style={styles.text}>Login</Text>
        <Text style={styles.subText}>E-Mail</Text>
        <TextInput 
        style={styles.input}
        placeholder='jdoe@drury.edu'
        onChangeText={setEmail}
        value={email}
        />
        <Text style={styles.subText}>Password</Text>
        <TextInput 
        style={styles.input}
        placeholder='Password'
        onChangeText={setPass}
        value={pass}
        />
        <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.subText}>Log In</Text>
        </Pressable> 
      </View>
      <View style={styles.buttonContainer}>
        {/* <Button
          title="View Menu"
          onPress={() => navigation.navigate('Menu')}
          color="#841584"
        />
        <Button
          title="Home"
          onPress={() => navigation.navigate('Landing')}
          color="#841584"
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    marginHorizontal: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 10,
  },
  subText: {
    fontSize: 20,
    alignSelf: 'center',
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
    marginBottom: 5,
    textAlign: 'center',
  },
  logo: {
    width: 150, // Set the width to a larger size
    height: 150, // Set the height to a larger size
    alignSelf: 'center',
    marginBottom:0,
  },
  input: {
    height: 40,
    margin: 12,
    borderRadius:10,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginHorizontal: 120,
    borderRadius: 5,
  },
});
