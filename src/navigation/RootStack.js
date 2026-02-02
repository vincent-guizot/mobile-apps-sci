import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import NotificationScreen from "../screens/Notification/NotificationScreen";

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{ title: "Notifications" }}
      />
    </Stack.Navigator>
  );
}
