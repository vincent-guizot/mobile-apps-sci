import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
      screenOptions={({ navigation }) => ({
        header: () => <AppHeader navigation={navigation} />,
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
