import { View, Text, FlatList, StyleSheet } from "react-native";

const events = [
  { id: "1", title: "React Meetup", date: "Feb 5, 2026" },
  { id: "2", title: "Expo Workshop", date: "Feb 12, 2026" },
];

export default function EventListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Events</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventDate}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f9f9f9" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  eventTitle: { fontSize: 16, fontWeight: "bold" },
  eventDate: { marginTop: 4, fontSize: 14, color: "#666" },
});
