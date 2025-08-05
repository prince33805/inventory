// MaterialRequisitionScreen.tsx
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Svg, Path } from 'react-native-svg';

const items = [
  { name: 'Steel Beams', stock: 50 },
  { name: 'Concrete Mix', stock: 80 },
  { name: 'Plywood Sheets', stock: 200 },
  { name: 'Insulation Rolls', stock: 250 },
  { name: 'Electrical Wiring', stock: 320 },
];

const MaterialRequisitionScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* <TouchableOpacity>
          <Svg width={24} height={24} fill="black" viewBox="0 0 256 256">
            <Path d="M224,128a8,8,0,0,1-8,8H59.3l58.4,58.3a8,8,0,1,1-11.3,11.3l-72-72a8,8,0,0,1,0-11.3l72-72a8,8,0,0,1,11.3,11.3L59.3,120H216A8,8,0,0,1,224,128Z" />
          </Svg>
        </TouchableOpacity> */}
        <Text style={styles.headerTitle}>Material Requisition</Text>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          {/* <Svg width={24} height={24} fill="#6a7681" viewBox="0 0 256 256">
            <Path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
          </Svg> */}
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name or SKU"
            placeholderTextColor="#6a7681"
          />
        </View>
      </View>

      {/* Item List */}
      <ScrollView>
        {items.map((item, index) => (
          <View key={index} style={styles.itemRow}>
            <View style={styles.itemText}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemStock}>Current Stock: {item.stock}</Text>
            </View>
            <TouchableOpacity style={styles.requestBtn}>
              <Text style={styles.requestBtnText}>Request</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Submit Button */}
      <View style={styles.submitContainer}>
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitBtnText}>Submit Requisition</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MaterialRequisitionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#121516',
    marginRight: 6,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f2f4',
    borderRadius: 12,
    paddingHorizontal: 8,
    height: 48,
  },
  searchInput: {
    flex: 1,
    color: '#121516',
    fontSize: 16,
    marginLeft: 8,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f2f4',
  },
  itemText: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#121516',
  },
  itemStock: {
    fontSize: 14,
    color: '#6a7681',
    marginTop: 2,
  },
  requestBtn: {
    backgroundColor: '#f1f2f4',
    borderRadius: 9999,
    paddingHorizontal: 16,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  requestBtnText: {
    color: '#121516',
    fontSize: 14,
    fontWeight: '500',
  },
  submitContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#f1f2f4',
  },
  submitBtn: {
    backgroundColor: '#c9dcec',
    paddingVertical: 14,
    borderRadius: 9999,
    alignItems: 'center',
  },
  submitBtnText: {
    color: '#121516',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
