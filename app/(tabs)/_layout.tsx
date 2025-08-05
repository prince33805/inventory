import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Platform, SafeAreaView } from 'react-native';

import TabBarBackground from '@/components/ui/TabBarBackground'; // ปรับได้ตามโปรเจกต์คุณ

export default function TabLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          // tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarActiveTintColor: Platform.select({ ios: '#000', web: '#000' }),
          tabBarInactiveTintColor: '#8e8e93',
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
              bottom: 0,
              height: 60,
              backgroundColor: '#fff',
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Dashboard',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bar-chart" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="inventory"
          options={{
            title: 'Inventory',
            tabBarLabel: 'Inventory',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cube" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="logistics"
          options={{
            title: 'Logistics',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="car" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="requisition"
          options={{
            title: 'Requisition',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="receipt" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
