import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const RankingsPage = () => {
  return (
    <SafeAreaView className="bg-background h-full px-4 pt-6 gap-y-6">
      <Text className="text-white text-3xl font-bold">ランキング</Text>
    </SafeAreaView>
  );
};
