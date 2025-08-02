import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

interface CreateEditProductModalProps {
  visible: boolean;
  onClose: () => void;
  onUpdate?: (updatedProduct: { id: any }) => void;
  onSave?: (product: any) => void;
  product: {
    name: string;
    quantity: number;
    description: string;
    category: string;
    supplier: string;
    reorderPoint: string;
  };
  setProduct: (product: any) => void;
}

export const CreateEditProductModal: React.FC<CreateEditProductModalProps> = ({
  visible,
  onClose,
  onSave,
  product,
  setProduct,
}) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Feather
            name="arrow-left"
            size={24}
            color="#121416"
            onPress={onClose}
          />
          <Text style={styles.headerText}>Edit Product</Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Product Name</Text>
          <TextInput
            style={styles.input}
            value={product.name}
            onChangeText={(text) => setProduct({ ...product, name: text })}
            placeholder="Enter product name"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Product Description</Text>
          <TextInput
            style={[styles.input, styles.textarea]}
            multiline
            value={product.description}
            onChangeText={(text) =>
              setProduct({ ...product, description: text })
            }
            placeholder="Enter description"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Product Quantity</Text>
          <TextInput
            style={styles.input}
            value={product.quantity.toString()}
            onChangeText={(text) => setProduct({ ...product, quantity: text })}
            placeholder="0"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Category</Text>
          <TextInput
            style={styles.input}
            value={product.category}
            onChangeText={(text) => setProduct({ ...product, category: text })}
            placeholder="Category A"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Supplier</Text>
          <TextInput
            style={styles.input}
            value={product.supplier}
            onChangeText={(text) => setProduct({ ...product, supplier: text })}
            placeholder="Supplier A"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Reorder Point</Text>
          <TextInput
            style={styles.input}
            value={product.reorderPoint}
            onChangeText={(text) =>
              setProduct({ ...product, reorderPoint: text })
            }
            placeholder="e.g. 20"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={onSave}>
            <Text style={styles.saveText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flexGrow: 1,
    // paddingTop: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 12,
  },
  backButton: {
    fontSize: 16,
    color: '#111518',
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111518',
    marginRight: 24,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111518',
    marginBottom: 6,
  },
  input: {
    height: 56,
    backgroundColor: '#f0f2f5',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#111518',
  },
  textarea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  pickerContainer: {
    backgroundColor: '#f0f2f5',
    borderRadius: 12,
    overflow: 'hidden',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 12,
    marginBottom: 64,
  },
  cancelButton: {
    flex: 1,
    height: 48,
    backgroundColor: '#f0f2f5',
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButton: {
    flex: 1,
    height: 48,
    backgroundColor: '#0b80ee',
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    color: '#111518',
    fontWeight: 'bold',
    fontSize: 16,
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
