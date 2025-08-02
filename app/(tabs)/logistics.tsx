import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  ArrowLeft,
  Truck,
  Tray,
  PresentationChart,
} from 'phosphor-react-native';
// import { TouchableOpacity } from 'nativewind';

import ShipmentDetail from '@/components/ShipmentDetail';

const logisticsData = [
  {
    date: '2024-07-20',
    name: 'Sarah Johnson',
    status: 'In Transit',
  },
  {
    date: '2024-07-22',
    name: 'Michael Brown',
    status: 'Shipped',
  },
  {
    date: '2024-07-25',
    name: 'Emily Davis',
    status: 'Delivered',
  },
];

export default function LogisticsScreen() {
  const [showDeliveryList, setShowDeliveryList] = useState(false);

  return (
    <View style={styles.container}>
      {showDeliveryList ? (
        <ShipmentDetail onClose={() => setShowDeliveryList(false)} />
      ) : (
        <>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Logistics</Text>
            <View style={{ width: 24 }} />
          </View>

          <View style={styles.tabs}>
            <Text style={[styles.tabText, styles.activeTab]}>Outgoing</Text>
            <Text style={styles.tabTextInactive}>Incoming</Text>
          </View>

          <ScrollView>
            {logisticsData.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.touchableCard}
                onPress={() => setShowDeliveryList(!showDeliveryList)}
              >
                <View key={index} style={styles.card}>
                  <View style={styles.cardLeft}>
                    <View style={styles.iconWrapper}>
                      <Truck size={24} color="#121416" />
                    </View>
                    <View>
                      <Text style={styles.deliveryText}>
                        Estimated Delivery: {item.date}
                      </Text>
                      <Text style={styles.recipientText}>To: {item.name}</Text>
                    </View>
                  </View>
                  <Text style={styles.statusText}>{item.status}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // padding: 16
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 8,
    paddingHorizontal: 16,
    // padding: 16,
    justifyContent: 'space-between',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#121416',
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#dde1e3',
    paddingHorizontal: 16,
    gap: 32,
  },
  tabText: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 12,
    borderBottomWidth: 3,
    borderBottomColor: '#121416',
    color: '#121416',
  },
  tabTextInactive: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 12,
    color: '#6a7681',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 12,
    color: '#121416',
    borderBottomWidth: 3,
    borderBottomColor: '#121416',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f2f4',
  },
  cardLeft: {
    flexDirection: 'row',
    gap: 12,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    backgroundColor: '#f1f2f4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  deliveryText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#121416',
  },
  recipientText: {
    fontSize: 14,
    color: '#6a7681',
  },
  statusText: {
    fontSize: 16,
    color: '#121416',
  },
  navbar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#f1f2f4',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
  navItem: {
    alignItems: 'center',
  },
  navTextActive: {
    fontSize: 12,
    fontWeight: '500',
    color: '#121416',
  },
  navTextInactive: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6a7681',
  },
  touchableCard: {
    // backgroundColor: '#2563eb', // Tailwind's bg-blue-600
    // paddingHorizontal: 16,
    // paddingVertical: 8,
    // borderRadius: 12,
    // marginBottom: 16,
  },
});
