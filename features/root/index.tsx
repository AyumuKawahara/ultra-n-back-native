import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "tamagui";

export const RootPage = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="bg-background h-full">
      <Button onPress={() => router.push("/setup")}>ゲームをプレイする</Button>
    </SafeAreaView>
  );
};
