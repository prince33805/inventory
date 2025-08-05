import { CreateEditProductModal } from '@/components/CreateEditProductModal';
import ProductDetailsModal from '@/components/ProductDetailModal';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg from 'react-native-svg';

const InventoryScreen = () => {
  // const navigation = useNavigation();
  const [selectedProduct, setSelectedProduct] = useState<{
    id: number;
    name: string;
    quantity: number;
    description: string;
    category: string;
    supplier: string;
    reorderPoint: string;
  } | null>(null);
  const [searchText, setSearchText] = useState('');
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    quantity: 0,
    description: '',
    category: '',
    supplier: '',
    reorderPoint: '',
  });

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Red Pickled Cabbage',
      quantity: 120,
      description: 'string',
      category: 'string',
      supplier: 'string',
      reorderPoint: 'string',
    },
    {
      id: 2,
      name: 'Whole Wheat Bread',
      quantity: 85,
      description: 'string',
      category: 'string',
      supplier: 'string',
      reorderPoint: 'string',
    },
    {
      id: 3,
      name: 'Almond Milk',
      quantity: 200,
      description: 'string',
      category: 'string',
      supplier: 'string',
      reorderPoint: 'string',
    },
    {
      id: 4,
      name: 'Free-Range Eggs',
      quantity: 150,
      description: 'string',
      category: 'string',
      supplier: 'string',
      reorderPoint: 'string',
    },
    {
      id: 5,
      name: 'Avocados',
      quantity: 90,
      description: 'string',
      category: 'string',
      supplier: 'string',
      reorderPoint: 'string',
    },
  ]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const handleSaveProduct = (product: any) => {
    if (product.id) {
      // Update
      setProducts((prev) =>
        prev.map((p) => (p.id === product.id ? product : p)),
      );
    } else {
      // Add new
      if (!newProduct.name.trim()) {
        alert('Product name is required');
        return;
      }
      // const quantity = parseInt(newProduct.quantity, 10) || 0;
      setProducts((prev) => [
        ...prev,
        {
          id: Date.now(), // unique ID
          name: newProduct.name,
          quantity: newProduct.quantity,
          description: newProduct.description,
          category: newProduct.category,
          supplier: newProduct.supplier,
          reorderPoint: newProduct.reorderPoint,
        },
      ]);
      setNewProduct({
        name: '',
        quantity: 0,
        description: '',
        category: '',
        supplier: '',
        reorderPoint: '',
      });
      setCreateModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      {selectedProduct ? (
        <ProductDetailsModal
          visible={!!selectedProduct}
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onEdit={(updatedProduct) => {
            setProducts((prev) =>
              prev.map((p) =>
                p.id === updatedProduct.id ? updatedProduct : p,
              ),
            );
            setSelectedProduct(updatedProduct); // แสดงผลลัพธ์ใหม่ทันทีใน modal
          }}
        />
      ) : (
        <>
          {createModalVisible ? (
            <CreateEditProductModal
              visible={createModalVisible}
              onClose={() => setCreateModalVisible(false)}
              onSave={(product) => {
                handleSaveProduct(product);
              }}
              // onSave={handleSaveProduct}
              product={newProduct}
              setProduct={setNewProduct}
            />
          ) : (
            <>
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Inventory & Tracking</Text>
                {/* <TouchableOpacity style={styles.iconButton}>
                  <Svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  ></Svg>
                </TouchableOpacity> */}
              </View>
              <View style={styles.searchContainer}>
                <View style={styles.searchBar}>
                  {/* <Svg
                    width="24"
                    height="24"
                    fill="#60758a"
                    viewBox="0 0 256 256"
                  ></Svg> */}
                  <TextInput
                    placeholder="Search by product name or scan barcode"
                    placeholderTextColor="#60758a"
                    style={styles.searchInput}
                    value={searchText}
                    onChangeText={setSearchText}
                  />
                </View>
              </View>
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.primaryButton}
                  onPress={() => setCreateModalVisible(true)}
                >
                  <Text style={styles.primaryButtonText}>Add Product</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.sectionTitle}>Products</Text>
              <ScrollView>
                {filteredProducts.map((item, index) => (
                  <View key={index} style={styles.productItem}>
                    <View>
                      <Text style={styles.productName}>{item.name}</Text>
                      <Text style={styles.productQty}>
                        Quantity: {item.quantity}
                      </Text>
                    </View>
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => setSelectedProduct(item)}
                      // onPress={() => router.push(`/product/${item.id}`)}
                      style={styles.manageButton}
                    >
                      <Text style={styles.manageButtonText}>Manage</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            </>
          )}
        </>
      )}
    </View>
  );
};

export default InventoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#111418',
    paddingLeft: 12,
  },
  iconButton: {
    width: 48,
    alignItems: 'flex-end',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#f0f2f5',
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 8,
    height: 48,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 8,
    color: '#111418',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  primaryButton: {
    backgroundColor: '#0c7ff2',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  primaryButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  secondaryButton: {
    backgroundColor: '#f0f2f5',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  secondaryButtonText: {
    color: '#111418',
    fontWeight: 'bold',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: '#111418',
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomColor: '#f0f2f5',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111418',
  },
  productQty: {
    fontSize: 14,
    color: '#60758a',
  },
  manageButton: {
    backgroundColor: '#f0f2f5',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  manageButtonText: {
    fontSize: 14,
    color: '#111418',
  },
  navBar: {
    flexDirection: 'row',
    borderTopColor: '#f0f2f5',
    borderTopWidth: 1,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#60758a',
    marginTop: 4,
  },
});
