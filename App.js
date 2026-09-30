import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import WordsNavigation from "./components/WordsNavigation";
import LearningNavigation from "./components/LearningNavigation";
import Settings from "./screens/Settings";
import { COLORS } from "./constants";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={COLORS.appBackground}
        barStyle="light-content"
      />

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: COLORS.primary900,
            tabBarInactiveTintColor: COLORS.fontMain,

            tabBarActiveBackgroundColor: COLORS.appBackground,
            tabBarInactiveBackgroundColor: COLORS.appBackground,

            headerStyle: {
              backgroundColor: COLORS.appBackground,
            },

            headerTintColor: COLORS.primary900,

            headerTitleStyle: {
              fontWeight: "800",
            },

            headerTitleAlign: "center",
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
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}