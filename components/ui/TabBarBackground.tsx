import { View, StyleSheet } from 'react-native';

export default function TabBarBackground() {
  return <View style={styles.background} />;
}

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#fff', // หรือสีเทาอ่อนเช่น '#f8f8f8'
  },
});

export function useBottomTabOverflow() {
  return 0;
}
