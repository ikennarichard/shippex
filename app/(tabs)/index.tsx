import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const shipments = [
  {
    id: "1",
    title: "Order #12345",
    status: "In Transit",
    date: "2025-07-28",
  },
  {
    id: "2",
    title: "Order #12346",
    status: "Delivered",
    date: "2025-07-25",
  },
  {
    id: "3",
    title: "Order #12347",
    status: "Pending",
    date: "2025-07-30",
  },
];

const ShipmentScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Shipments</Text>
      <FlatList
        data={shipments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.shipmentCard}>
            <View style={styles.headerRow}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={[styles.status, getStatusStyle(item.status)]}>
                {item.status}
              </Text>
            </View>
            <Text style={styles.date}>Expected: {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Delivered":
      return { color: "#28A745" };
    case "In Transit":
      return { color: "#007BFF" };
    case "Pending":
      return { color: "#FFC107" };
    default:
      return { color: "#6C757D" };
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F9F9F9",
  },
  heading: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 16,
    color: "#222",
  },
  shipmentCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  status: {
    fontSize: 14,
    fontWeight: "500",
  },
  date: {
    fontSize: 13,
    color: "#888",
  },
});

export default ShipmentScreen;
