import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import WordsNavigation from "./WordsNavigation";
import LearningNavigation from "./LearningNavigation";
import Settings from "../screens/Settings";

import { COLORS } from "../constants";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary900,
        tabBarInactiveTintColor: COLORS.fontMain,

        tabBarActiveBackgroundColor: COLORS.appBackground,
        tabBarInactiveBackgroundColor: COLORS.appBackground,

        headerStyle: {
          backgroundColor: COLORS.appBackground,
        },
        headerTitleStyle: {
          color: COLORS.primary900,
          fontWeight: "800",
        },
        headerTitleAlign: "center",

        tabBarStyle: {
          backgroundColor: COLORS.appBackground,
        },
      }}
    >
      <Tab.Screen
        name="Words"
        component={WordsNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="list-outline"
              size={15}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Learning"
        component={LearningNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="book-outline"
              size={15}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="settings-outline"
              size={15}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;