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
          <Stack.Screen name="setup" options={{ headerShown: false }} />
          <Stack.Screen name="play" options={{ headerShown: false }} />
          <Stack.Screen name="result" options={{ headerShown: false }} />
        </Stack>
      </PortalProvider>
    </TamaguiProvider>
  );
};
