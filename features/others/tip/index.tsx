import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export const TipPage = () => {
  return (
    <View className="bg-background h-full px-4 pt-6 gap-y-6">
      <Text className="text-white text-3xl font-bold">Buy me a Coffee</Text>
      <View>
        <Text className="text-white text-lg">
          使ってよかったと思っていただけるアプリを作りたい。
        </Text>
        <Text className="text-white text-lg">
          生活がよくなったと感じていただけるアプリを世に出したい。
        </Text>
        <Text className="text-white text-lg">
          そんな思いで活動を開始しました。
        </Text>
        <Text className="text-white text-lg">
          応援してくださる方がいらっしゃいましたら、ご支援をいただけますと幸いです。
        </Text>
      </View>
      <View className="flex-row items-center gap-x-2">
        <Ionicons name="information-circle" size={24} color="white" />
        <Text className="text-white text-lg flex-1">
          よろしければ、『その他』から『外部サービス連携』後にご支援いただけますと、アプリの表示が変わっている箇所があるかもしれません。
        </Text>
      </View>
    </View>
  );
};
