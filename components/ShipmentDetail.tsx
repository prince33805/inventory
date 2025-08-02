import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ShipmentDetail = ({ onClose }: any) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Feather
          name="arrow-left"
          size={24}
          color="#121416"
          onPress={onClose}
        />
        <Text style={styles.headerText}>Shipment Detail</Text>
      </View>

      {/* Section: Info */}
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Tracking Number</Text>
          <Text style={styles.infoValue}>ABC123456789TH</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Status</Text>
          <Text style={[styles.status, styles.statusInTransit]}>
            In Transit
          </Text>
        </View>
      </View>

      {/* Section: Sender */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sender</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Name</Text>
          <Text style={styles.infoValue}>John Doe</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Phone</Text>
          <Text style={styles.infoValue}>091-234-5678</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Address</Text>
          <Text style={styles.infoValue}>123 Bangkok Rd, Thailand</Text>
        </View>
      </View>

      {/* Section: Receiver */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Receiver</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Name</Text>
          <Text style={styles.infoValue}>Jane Smith</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Phone</Text>
          <Text style={styles.infoValue}>089-765-4321</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Address</Text>
          <Text style={styles.infoValue}>456 Chiang Mai Rd, Thailand</Text>
        </View>
      </View>

      {/* Section: Shipment Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shipment Details</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Weight</Text>
          <Text style={styles.infoValue}>2.5 kg</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Dimensions</Text>
          <Text style={styles.infoValue}>30x20x10 cm</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Type</Text>
          <Text style={styles.infoValue}>Parcel</Text>
        </View>
      </View>

      {/* Section: Delivery Timeline */}
      <View style={styles.lastSection}>
        <Text style={styles.sectionTitle}>Delivery Timeline</Text>
        <View style={styles.timelineItem}>
          <View style={styles.bullet} />
          <View>
            <Text style={styles.timelineText}>
              01 Aug 2025 - Arrived at sorting facility, Bangkok
            </Text>
          </View>
        </View>
        <View style={styles.timelineItem}>
          <View style={styles.bullet} />
          <View>
            <Text style={styles.timelineText}>
              02 Aug 2025 - Departed from Bangkok
            </Text>
          </View>
        </View>
        <View style={styles.timelineItem}>
          <View style={styles.bullet} />
          <View>
            <Text style={styles.timelineText}>
              03 Aug 2025 - In transit to Chiang Mai
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9FAFB',
    // padding: 16,
    // paddingHorizontal: 16,
    flex: 1,
  },
  header: { flexDirection: 'row', alignItems: 'center', padding: 16 },
  headerText: {
    paddingRight: 32,
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  // header: {
  //   paddingTop: 16,
  //   paddingHorizontal: 1,
  //   paddingBottom: 8,
  //   alignItems: 'center',
  //   flexDirection: 'row',
  // },
  // headerText: {
  //   paddingRight: 32,
  //   paddingTop: 8,
  //   // marginBottom: 16,
  //   flex: 1,
  //   textAlign: 'center',
  //   fontWeight: 'bold',
  //   fontSize: 18,
  // },
  infoContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 32,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  infoRow: {
    marginBottom: 12,
  },
  infoLabel: {
    color: '#6B7280',
    fontSize: 14,
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 16,
    color: '#111827',
  },
  status: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    alignSelf: 'flex-start',
    fontSize: 14,
    fontWeight: '500',
  },
  statusInTransit: {
    backgroundColor: '#E0F2FE',
    color: '#0284C7',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 32,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  lastSection: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 32,
    marginBottom: 72,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#111827',
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  bullet: {
    width: 8,
    height: 8,
    backgroundColor: '#9CA3AF',
    borderRadius: 4,
    marginRight: 10,
    marginTop: 6,
  },
  timelineText: {
    fontSize: 14,
    color: '#374151',
    flexShrink: 1,
  },
});

export default ShipmentDetail;
