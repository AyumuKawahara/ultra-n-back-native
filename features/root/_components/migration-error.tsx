import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const MigrationError = () => {
  return (
    <SafeAreaView className="bg-background h-full px-4 pt-14 pb-10 justify-center items-center gap-y-6">
      <View className="gap-y-3 items-center">
        <Text className="text-white text-8xl font-bold">500</Text>
        <Text className="text-white text-xl font-semibold">
          Internal Server Error
        </Text>
        <Text className="text-white text-center text-base">
          予期せぬエラーが発生しました
        </Text>
        <Text className="text-white text-center text-base">
          お手数ですが、アプリを再起動してください
        </Text>
      </View>
    </SafeAreaView>
  );
};
