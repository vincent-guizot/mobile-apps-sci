import { View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AppHeader({ navigation }) {
  return (
    <View
      style={{
        height: 56,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Image
        source={require("../../assets/images/logo.png")}
        style={{ width: 120, height: 30, resizeMode: "contain" }}
      />

      <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
        <Ionicons name="notifications-outline" size={24} />
      </TouchableOpacity>
    </View>
  );
}
