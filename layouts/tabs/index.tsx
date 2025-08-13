import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1E90FF",
        tabBarStyle: {
          borderTopWidth: 1,
          borderColor: "#1E90FF",
          backgroundColor: "#1A1D21",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "ホーム",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="stats/index"
        options={{
          title: "成長",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="stats-chart" color={color} size={size} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="rankings/index"
        options={{
          title: "ランキング",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy" color={color} size={size} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="others/index"
        options={{
          title: "その他",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};
