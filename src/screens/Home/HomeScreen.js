import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>

      {/* Highlight Coaching */}
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Your Coaching Sessions</Text>
        <Text style={styles.cardSubtitle}>3 upcoming sessions</Text>
      </TouchableOpacity>

      {/* Highlight Events */}
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Upcoming Events</Text>
        <Text style={styles.cardSubtitle}>2 events this week</Text>
      </TouchableOpacity>

      {/* Highlight Articles */}
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>New Articles</Text>
        <Text style={styles.cardSubtitle}>5 new articles for you</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f9f9f9" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardTitle: { fontSize: 18, fontWeight: "bold" },
  cardSubtitle: { fontSize: 14, color: "#666", marginTop: 4 },
});
