import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
// import { Svg, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import { BarChart, LineChart } from 'react-native-chart-kit';

export default function DashboardScreen() {
  const screenWidth = Dimensions.get('screen').width;
  const chartWidth = Math.max(screenWidth, 0);
  const chartWidthBar = Math.max(screenWidth - 64, 0);
  type IconName =
    | 'warehouse'
    | 'clock-check-outline'
    | 'alert-circle-outline'
    | 'truck-delivery';

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    // backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#fff',
    // backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 1.45,
    useShadowColorFromDataset: false, // optional
    decimalPlaces: 0,
  };

  const packagingData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        data: [93, 92, 95, 93, 94],
        strokeWidth: 2,
      },
    ],
  };

  const materialData = {
    labels: ['Boxes', 'Tape', 'Labels', 'Filler'],
    datasets: [
      {
        data: [35, 45, 60, 55],
      },
    ],
  };

  const dashboardData: {
    label: string;
    value: string;
    change: string;
    changePositive: boolean;
    icon: IconName;
  }[] = [
    {
      label: 'Total Inventory Value',
      value: '$125,000',
      icon: 'warehouse',
      change: '+3.5%',
      changePositive: true,
    },
    {
      label: 'On-Time Delivery Rate',
      value: '95%',
      icon: 'clock-check-outline',
      change: '+1.2%',
      changePositive: true,
    },
    {
      label: 'Low Stock Alerts',
      value: '12 Items',
      icon: 'alert-circle-outline',
      change: '-8.3%',
      changePositive: false,
    },
    {
      label: 'Shipments in Transit',
      value: '5 Shipments',
      icon: 'truck-delivery',
      change: '+16.7%',
      changePositive: true,
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <View style={{ width: 48 }} />
      </View>

      <View style={styles.containerCard}>
        {dashboardData.map((item) => (
          <View key={item.label} style={styles.card}>
            <View style={styles.iconWrapper}>
              <MaterialCommunityIcons
                name={item.icon}
                size={28}
                color="#4f46e5"
              />
            </View>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
            <Text
              style={[
                styles.change,
                { color: item.changePositive ? '#16a34a' : '#dc2626' },
              ]}
            >
              {item.change}
            </Text>
          </View>
        ))}
      </View>

      {[{ label: 'Packaging Success Rate', value: '98%', percent: 98 }].map(
        (item) => (
          <View key={item.label} style={styles.progressContainer}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressLabel}>{item.label}</Text>
              <Text style={styles.progressValue}>{item.value}</Text>
            </View>
            <View style={styles.progressBarBg}>
              <View
                style={[styles.progressBarFill, { width: `${item.percent}%` }]}
              />
            </View>
          </View>
        ),
      )}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Avg. Packaging Per Person/Day</Text>
        <Text style={styles.sectionValue}>500 Units</Text>
        <View style={styles.sectionChangeRow}>
          <Text style={styles.sectionSubLabel}>Last 7 Days</Text>
          <Text style={styles.sectionChangeValue}>+10%</Text>
        </View>
        <View style={styles.weekDaysRow}>
          <LineChart
            fromNumber={100}
            fromZero={true}
            data={packagingData}
            width={chartWidth}
            height={256}
            yLabelsOffset={20}
            // verticalLabelRotation={30}
            chartConfig={chartConfig}
            bezier
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Materials Used Today</Text>
        <Text style={styles.sectionValue}>1500 Boxes</Text>
        <View style={styles.sectionChangeRow}>
          <Text style={styles.sectionSubLabel}>Today</Text>
          <Text style={styles.sectionChangeValue}>+5%</Text>
        </View>
        <View style={styles.materialsChart}>
          <BarChart
            style={styles.barChartStyle}
            fromNumber={100}
            fromZero={true}
            data={materialData}
            width={chartWidthBar}
            height={220}
            yAxisLabel=""
            chartConfig={chartConfig}
            yLabelsOffset={10}
            // verticalLabelRotation={30}
            yAxisSuffix={''}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
   containerCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    padding: 12,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    justifyContent: 'space-between',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111418',
    paddingLeft: 48,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  icon: {
    marginRight: 8,
  },
  filterRow: {
    flexDirection: 'row',
    gap: 8,
    padding: 12,
    paddingRight: 16,
    flexWrap: 'wrap',
  },
  filterChip: {
    backgroundColor: '#f0f2f4',
    paddingHorizontal: 16,
    height: 32,
    borderRadius: 999,
    justifyContent: 'center',
  },
  filterText: { color: '#111518', fontSize: 14, fontWeight: '500' },
  card: {
    width: '48%',
    backgroundColor: '#f9fafb',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
  },
  iconWrapper: {
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  change: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: '600',
  },
  cardTitle: { fontSize: 16, color: '#111518', fontWeight: '500' },
  cardValue: { fontSize: 24, color: '#111518', fontWeight: 'bold' },
  progressContainer: { paddingHorizontal: 16, paddingTop: 0, marginTop: 0 },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  progressLabel: { color: '#111518', fontSize: 16, fontWeight: '500' },
  progressValue: { color: '#111518', fontSize: 14 },
  progressBarBg: { height: 8, borderRadius: 4, backgroundColor: '#dbe1e6' },
  progressBarFill: { height: 8, borderRadius: 4, backgroundColor: '#16a34a' },
  section: { paddingHorizontal: 16, paddingVertical: 24 },
  sectionTitle: { color: '#111518', fontSize: 16, fontWeight: '500' },
  sectionValue: { color: '#111518', fontSize: 32, fontWeight: 'bold' },
  sectionChangeRow: { flexDirection: 'row', gap: 4, marginTop: 4 },
  sectionSubLabel: { color: '#617789', fontSize: 16 },
  sectionChangeValue: { color: '#16a34a', fontSize: 16, fontWeight: '500' },
  weekDaysRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  weekDayLabel: { color: '#617789', fontSize: 13, fontWeight: 'bold' },
  materialsChart: {
    flexDirection: 'row',
    // marginRight:0,
    // paddingHorizontal: -100,
    // paddingLeft: -10,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 180,
    marginTop: 56,
  },
  barChartStyle: {
    // padding:16,
    // paddingRight:1,
    marginRight: 50,
  },
  materialBarWrapper: { alignItems: 'center', flex: 1 },
  materialBar: {
    width: '100%',
    backgroundColor: '#f0f2f4',
    borderTopWidth: 2,
    borderTopColor: '#617789',
  },
  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#f0f2f4',
    padding: 12,
    backgroundColor: '#fff',
  },
  tabItem: { alignItems: 'center' },
  tabLabel: { color: '#617789', fontSize: 12, fontWeight: '500' },
});
