import { useRouter } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "tamagui";

export const ResultPage = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="bg-background h-full px-4 pt-6 gap-y-4">
      <Button onPress={() => router.replace("/")}>
        <Text>ホームに戻る</Text>
      </Button>
    </SafeAreaView>
  );
};
