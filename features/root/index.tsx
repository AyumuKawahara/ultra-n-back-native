import { useRouter } from "expo-router";
import { View } from "react-native";
import { Button } from "tamagui";

export const RootPage = () => {
  const router = useRouter();

  return (
    <View>
      <Button onPress={() => router.push("/setup")}>ゲームをプレイする</Button>
    </View>
  );
};
