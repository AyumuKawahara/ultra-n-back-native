import { Ionicons } from "@expo/vector-icons";
import { defaultConfig } from "@tamagui/config/v4";
import { createTamagui, TamaguiProvider } from "@tamagui/core";
import { PortalProvider } from "@tamagui/portal";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

const config = createTamagui(defaultConfig);

type Conf = typeof config;

declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

export const RootLayout = () => {
  return (
    <TamaguiProvider config={config}>
      <PortalProvider>
        <StatusBar style="light" />
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
            name="(home-stack)"
            options={{
              title: "ホーム",
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
          <Tabs.Screen
            name="rankings/index"
            options={{
              title: "ランキング",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="trophy" color={color} size={size} />
              ),
            }}
          />
          <Tabs.Screen
            name="(others-stack)/others"
            options={{
              title: "その他",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="settings" color={color} size={size} />
              ),
            }}
          />
        </Tabs>
      </PortalProvider>
    </TamaguiProvider>
  );
};
