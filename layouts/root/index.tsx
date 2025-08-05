import { defaultConfig } from "@tamagui/config/v4";
import { createTamagui, TamaguiProvider } from "@tamagui/core";
import { PortalProvider } from "@tamagui/portal";
import { Stack } from "expo-router";
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
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="setup/index"
            options={{
              headerStyle: { backgroundColor: "#25292E" },
              headerTintColor: "#ffd33d",
            }}
          />
          <Stack.Screen name="play/index" options={{ headerShown: false }} />
          <Stack.Screen name="result/index" options={{ headerShown: false }} />
        </Stack>
      </PortalProvider>
    </TamaguiProvider>
  );
};
