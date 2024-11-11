import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';

export default function MenuScreen({ navigation }) {
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the menu data from the API
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(
          'https://api.freshideasdining.com/v1/location/65b6be9ff3c61202b10b76c1/periods?platform=0&date=2024-10-22'
        );
        const data = await response.json();
        setMenuData(data.menu.periods.categories);
        setLoading(false);
      } catch (err) {
        setError('Failed to load menu data');
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  // Render the menu data
  const renderMenuItems = () => {
    return menuData.map((category, index) => (
      <View key={index} style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>{category.name}</Text>
        {category.items.map((item, itemIndex) => (
          <Text key={itemIndex} style={styles.menuItem}>
            {item.name} - {item.portion}
          </Text>
        ))}
      </View>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Menu Screen</Text>
      {loading && <ActivityIndicator size="large" color="#841584" />}
      {error && <Text style={styles.errorText}>{error}</Text>}
      {!loading && !error && menuData && renderMenuItems()}
      <View style={styles.buttonContainer}>
        <Button title="Sign Out" onPress={() => navigation.navigate('Login')} color="#841584" />
        <Button title="Home" onPress={() => navigation.navigate('Landing')} color="#841584" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 20,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
});
