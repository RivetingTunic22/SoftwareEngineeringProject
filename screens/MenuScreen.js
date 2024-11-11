import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, FlatList } from 'react-native';
import { fetchMenuData } from '../BackEnd/src/api';


const MenuScreen = ({ navigation }) => {
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
      <Text style={{ alignSelf: 'center', fontWeight: 'bold', padding: 10, fontSize: 24}}>{item.name}</Text>
      {item.items && item.items.map((menuItem) => (
        <Text style= {{ alignSelf: 'center', fontSize: 16}} key={menuItem.id}>{menuItem.name}</Text>
      ))}
    </View>
  );

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', alignSelf: 'center', padding: 10 }}>Dining Hall Menu</Text>
      
      <View style={{ alignSelf: 'center', backgroundColor: '#DDDDDD', padding: 5, borderRadius: 5, flexDirection: 'row',}}>
        <Button title="Breakfast" onPress={() => setCurrentMeal('breakfast')} />
        <Button title="Lunch" onPress={() => setCurrentMeal('lunch')} />
        <Button title="Dinner" onPress={() => setCurrentMeal('dinner')} />
      </View>
      <Button
          title="Sign Out"
          onPress={() => navigation.navigate('Login')}
          color="#841584"
        />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}

      {!loading && !error && (
        <FlatList style={{alignSelf: 'center', width: 'auto', height: 670,}}
          data={menuData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default MenuScreen;
