import { defaultConfig } from "@tamagui/config/v4";
import { createTamagui, TamaguiProvider } from "@tamagui/core";
import { Stack } from "expo-router";

const config = createTamagui(defaultConfig);

type Conf = typeof config;

declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

export const RootLayout = () => {
  return (
    <TamaguiProvider config={config}>
      <Stack />
    </TamaguiProvider>
  );
};
