import { Feather, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { CreateEditProductModal } from './CreateEditProductModal';

interface Product {
  id: number;
  name: string;
  quantity: number;
  description: string;
  category: string;
  supplier: string;
  reorderPoint: string;
}

interface ProductDetailModalProps {
  visible: boolean;
  product: Product;
  onClose: () => void;
  onEdit: (updatedProduct: Product) => void;
}

export default function ProductDetailsModal({
  visible,
  product,
  onClose,
  onEdit,
}: ProductDetailModalProps) {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState({
    name: '',
    quantity: 0,
    description: '',
    category: '',
    supplier: '',
    reorderPoint: '',
  });

  return (
    <ScrollView style={styles.container}>
      {editModalVisible ? (
        <CreateEditProductModal
          visible={editModalVisible}
          onClose={() => setEditModalVisible(false)}
          onSave={(updatedProduct) => {
            onEdit(updatedProduct); // ส่งกลับไปที่ InventoryScreen
            setEditModalVisible(false);
          }}
          product={editingProduct}
          setProduct={setEditingProduct}
        />
      ) : (
        <>
          {/* Header */}
          <View style={styles.header}>
            <Feather
              name="arrow-left"
              size={24}
              color="#121416"
              onPress={onClose}
            />
            <Text style={styles.headerText}>Product Details</Text>
          </View>

          {/* Image */}
          <Image
            source={require('@/assets/images/favicon.png')}
            style={styles.productImage}
            resizeMode="cover"
          />

          {/* Product Name */}
          <Text style={styles.productName}>{product.name}</Text>
          {/* <Button title="Close" onPress={onClose} /> */}

          {/* Tabs */}
          <View style={styles.tabs}>
            <Text style={styles.tabActive}>Lot Information</Text>
            <Text style={styles.tabInactive}>History</Text>
          </View>

          {/* Lot Info */}
          {renderLot('12345', '100 units', 'Warehouse A', '2024-12-31')}
          {renderLot('67890', '50 units', 'Warehouse B', '2025-06-30')}

          {/* Action Buttons */}
          {/* <View style={styles.actions}>
            <ActionButton
              icon="edit"
              onPress={() => {
                setEditingProduct(product);
                setEditModalVisible(true);
              }}
            />
            <ActionButton icon="compare-arrows" />
            <ActionButton icon="history" />
          </View> */}
        </>
      )}
    </ScrollView>
  );
}

function renderLot(lot: string, qty: string, loc: string, exp: string) {
  return (
    <View style={styles.lotSection}>
      <Text style={styles.lotTitle}>Lot {lot}</Text>
      <View style={styles.lotRow}>
        <Text style={styles.label}>Quantity</Text>
        <Text style={styles.value}>{qty}</Text>
      </View>
      <View style={styles.lotRow}>
        <Text style={styles.label}>Location</Text>
        <Text style={styles.value}>{loc}</Text>
      </View>
      <View style={styles.lotRow}>
        <Text style={styles.label}>Expiration Date</Text>
        <Text style={styles.value}>{exp}</Text>
      </View>
    </View>
  );
}

// function ActionButton({
//   icon,
//   onPress,
// }: {
//   icon: string;
//   onPress?: () => void;
// }) {
//   return (
//     <TouchableOpacity onPress={onPress} style={styles.actionButton}>
//       <MaterialIcons name={icon as any} size={24} color="#121416" />
//     </TouchableOpacity>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal: 16
  },
  header: { flexDirection: 'row', alignItems: 'center', padding: 16 },
  headerText: {
    paddingRight: 32,
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  productImage: { width: '100%', height: 220, borderRadius: 12 },
  productName: { fontSize: 22, fontWeight: 'bold', padding: 16 },
  tabs: { flexDirection: 'row', paddingHorizontal: 16, gap: 16 },
  tabActive: {
    fontWeight: 'bold',
    color: '#121416',
    borderBottomWidth: 3,
    paddingBottom: 8,
  },
  tabInactive: { fontWeight: 'bold', color: '#6a7681', paddingBottom: 8 },
  lotSection: { padding: 16 },
  lotTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  lotRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: '#dde1e3',
    paddingVertical: 12,
  },
  label: { color: '#6a7681' },
  value: { color: '#121416' },
  actions: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  actionButton: {
    backgroundColor: '#dce8f3',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#f1f2f4',
    paddingVertical: 12,
  },
  tabItem: { alignItems: 'center', justifyContent: 'center' },
  tabLabel: { fontSize: 12, marginTop: 4, fontWeight: '500' },
});
