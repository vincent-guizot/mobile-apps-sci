import { View, Text, FlatList, StyleSheet } from "react-native";

const articles = [
  { id: "1", title: "React Tips & Tricks", category: "Free" },
  { id: "2", title: "Advanced Expo", category: "Premium" },
];

export default function ArticleListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Articles</Text>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.articleTitle}>{item.title}</Text>
            <Text
              style={[
                styles.category,
                { color: item.category === "Premium" ? "gold" : "blue" },
              ]}
            >
              {item.category}
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
  articleTitle: { fontSize: 16, fontWeight: "bold" },
  category: { marginTop: 4, fontSize: 14 },
});
