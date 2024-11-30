
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { fetchMenuData } from '../BackEnd/src/api';

const MenuScreen = () => {
  const [menuData, setMenuData] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState('breakfast'); // Default breakfast
  const currentDate = '2024-11-25'; // fixed date for testing

  useEffect(() => {
    fetchMenuData(selectedMenu, currentDate)
      .then((data) => setMenuData(data))
      .catch((error) => console.error('Error fetching menu data:', error));
  }, [selectedMenu]); 

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dining Hall Menu</Text>
      <View style={styles.menuTabs}>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedMenu === 'breakfast' && styles.activeTab,
          ]}
          onPress={() => setSelectedMenu('breakfast')}
        >
          <Text style={styles.tabText}>Breakfast</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedMenu === 'lunch' && styles.activeTab,
          ]}
          onPress={() => setSelectedMenu('lunch')}
        >
          <Text style={styles.tabText}>Lunch</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedMenu === 'dinner' && styles.activeTab,
          ]}
          onPress={() => setSelectedMenu('dinner')}
        >
          <Text style={styles.tabText}>Dinner</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.menuContainer}>
        {menuData.map((category, index) => (
          <View key={index} style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{category.name}</Text>
            {category.items.map((item, itemIndex) => (
              <View key={itemIndex} style={styles.itemContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDetails}>Allergens: {item.filters?.filter(filter => filter.type === 'allergen').map(allergen => allergen.name).join(', ') || 'None'}</Text>
                <Text style={styles.itemDetails}>Calories: {item.calories || 'Unknown'}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 16 },
  menuTabs: { flexDirection: 'row', justifyContent: 'center', marginBottom: 16 },
  tab: { paddingHorizontal: 16, paddingVertical: 8, marginHorizontal: 4, borderRadius: 4, backgroundColor: '#ddd' },
  activeTab: { backgroundColor: '#6200ea' },
  tabText: { color: '#fff', fontWeight: 'bold' },
  menuContainer: { flex: 1 },
  categoryContainer: { marginBottom: 16 },
  categoryTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  itemContainer: { padding: 8, backgroundColor: '#f9f9f9', borderRadius: 4, marginBottom: 8 },
  itemName: { fontSize: 16, fontWeight: 'bold' },
  itemDetails: { fontSize: 14, color: '#555' },
});

export default MenuScreen;
