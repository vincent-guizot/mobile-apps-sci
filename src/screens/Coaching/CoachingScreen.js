import { View, Text, FlatList, StyleSheet } from "react-native";

const coachingData = [
  { id: "1", title: "React Native Basics", status: "Pending" },
  { id: "2", title: "UI/UX Review", status: "Confirmed" },
];

export default function CoachingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Coaching Requests</Text>
      <FlatList
        data={coachingData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text
              style={[
                styles.status,
                { color: item.status === "Confirmed" ? "green" : "orange" },
              ]}
            >
              {item.status}
            </Text>
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
  cardTitle: { fontSize: 16, fontWeight: "bold" },
  status: { marginTop: 4, fontSize: 14 },
});
