import { View, Text, FlatList, StyleSheet } from "react-native";

const notifications = [
  { id: "1", title: "New Coaching Request", read: false },
  { id: "2", title: "Event Approved", read: true },
  { id: "3", title: "New Article Published", read: false },
];

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.card,
              { backgroundColor: item.read ? "#eee" : "#fff" },
            ]}
          >
            <Text style={{ fontWeight: item.read ? "normal" : "bold" }}>
              {item.title}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f9f9f9" },
  card: {
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
});
