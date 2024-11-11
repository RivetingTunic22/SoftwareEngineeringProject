import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, FlatList } from 'react-native';
import { fetchMenuData } from '../BackEnd/src/api';


const MenuScreen = () => {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentMeal, setCurrentMeal] = useState('breakfast');

  // Get the current date in 'YYYY-MM-DD' format
  const currentDate = new Date().toISOString().split('T')[0];

  // Fetch the menu data for the selected meal period
  const loadMenuData = async (mealPeriod) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchMenuData(mealPeriod, currentDate);
      setMenuData(data);
    } catch (err) {
      setError('Failed to load menu data');
    } finally {
      setLoading(false);
    }
  };

  // Initial load for breakfast
  useEffect(() => {
    loadMenuData(currentMeal);
  }, [currentMeal]);

  // Render item for the FlatList
  const renderItem = ({ item }) => (
    <View>
      <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
      {item.items && item.items.map((menuItem) => (
        <Text key={menuItem.id}>{menuItem.name}</Text>
      ))}
    </View>
  );

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Dining Hall Menu</Text>
      
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
        <Button title="Breakfast" onPress={() => setCurrentMeal('breakfast')} />
        <Button title="Lunch" onPress={() => setCurrentMeal('lunch')} />
        <Button title="Dinner" onPress={() => setCurrentMeal('dinner')} />
      </View>

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}

      {!loading && !error && (
        <FlatList
          data={menuData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default MenuScreen;
