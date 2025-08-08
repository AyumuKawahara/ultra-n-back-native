import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export const ExternalLinkagePage = () => {
  return (
    <View className="bg-background h-full px-4 pt-6 gap-y-6">
      <Text className="text-white text-3xl font-bold">外部サービス連携</Text>
      <View className="flex-row items-center gap-x-2">
        <Ionicons name="information-circle" size={24} color="white" />
        <Text className="text-white text-lg font-bold flex-1">
          外部サービスとご連携いただくことで、ランキングに参加できるようになります。
        </Text>
      </View>
    </View>
  );
};
