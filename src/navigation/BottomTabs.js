import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // <-- import icons
import HomeScreen from "../screens/Home/HomeScreen";
import CoachingScreen from "../screens/Coaching/CoachingScreen";
import EventListScreen from "../screens/Event/EventScreen";
import ArticleListScreen from "../screens/Article/ArticleScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import AppHeader from "../components/AppHeader";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        header: () => <AppHeader navigation={navigation} />,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Coaching":
              iconName = "school-outline";
              break;
            case "Events":
              iconName = "calendar-outline";
              break;
            case "Articles":
              iconName = "document-text-outline";
              break;
            case "Profile":
              iconName = "person-outline";
              break;
          }

          return <Ionicons name={iconName} size={16} color={color} />;
        },
        tabBarActiveTintColor: "#d70202",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Coaching" component={CoachingScreen} />
      <Tab.Screen name="Events" component={EventListScreen} />
      <Tab.Screen name="Articles" component={ArticleListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
