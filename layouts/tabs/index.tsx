import { Tabs } from "expo-router";

export const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ffd33d",
        tabBarStyle: {
          backgroundColor: "#25292E",
        },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "ホーム" }} />
      <Tabs.Screen name="stats/index" options={{ title: "統計" }} />
      <Tabs.Screen name="settings/index" options={{ title: "設定" }} />
    </Tabs>
  );
};
