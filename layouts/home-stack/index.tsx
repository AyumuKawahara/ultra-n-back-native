import { Stack } from "expo-router";

export const HomeStackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "ホーム", headerShown: false }}
      />
      <Stack.Screen
        name="setup/index"
        options={{
          title: "ゲーム設定",
          headerStyle: { backgroundColor: "#1A1D21" },
          headerTintColor: "#1E90FF",
        }}
      />
      <Stack.Screen name="play/index" options={{ headerShown: false }} />
      <Stack.Screen name="result/index" options={{ headerShown: false }} />
      <Stack.Screen
        name="how-to-play/index"
        options={{
          title: "あそびかた",
          headerStyle: { backgroundColor: "#1A1D21" },
          headerTintColor: "#1E90FF",
        }}
      />
    </Stack>
  );
};
