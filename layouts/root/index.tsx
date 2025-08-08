import { BgmProvider } from "@/providers/bgm";
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
        <BgmProvider>
          <StatusBar style="light" />
          <Stack>
            <Stack.Screen
              name="(tabs)"
              options={{
                title: "ホーム",
                headerShown: false,
              }}
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
            <Stack.Screen
              name="others/volume/index"
              options={{
                title: "音量設定",
                headerStyle: { backgroundColor: "#1A1D21" },
                headerTintColor: "#1E90FF",
                headerBackTitle: "戻る",
              }}
            />
            <Stack.Screen
              name="others/plans/index"
              options={{
                title: "アップグレード",
                headerStyle: { backgroundColor: "#1A1D21" },
                headerTintColor: "#1E90FF",
                headerBackTitle: "戻る",
              }}
            />
            <Stack.Screen
              name="others/tip/index"
              options={{
                title: "Buy Me a Coffee",
                headerStyle: { backgroundColor: "#1A1D21" },
                headerTintColor: "#1E90FF",
                headerBackTitle: "戻る",
              }}
            />
            <Stack.Screen
              name="others/external-linkage/index"
              options={{
                title: "外部サービス連携",
                headerStyle: { backgroundColor: "#1A1D21" },
                headerTintColor: "#1E90FF",
                headerBackTitle: "戻る",
              }}
            />
          </Stack>
        </BgmProvider>
      </PortalProvider>
    </TamaguiProvider>
  );
};
