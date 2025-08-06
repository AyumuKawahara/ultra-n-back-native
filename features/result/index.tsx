import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "tamagui";

export const ResultPage = () => {
  const router = useRouter();
  const { n, numOfQuestions, numOfCorrectAnswers } = useLocalSearchParams<{
    n: string;
    numOfQuestions: string;
    numOfCorrectAnswers: string;
  }>();

  const numOfCorrectAnswersRate =
    (Number(numOfCorrectAnswers) / Number(numOfQuestions)) * 100;

  return (
    <SafeAreaView className="bg-background h-full px-4 pt-6 gap-y-4">
      <Text className="text-white text-3xl font-bold">プレイ結果！</Text>
      <View>
        <Text className="text-white">N： {n}</Text>
        <Text className="text-white">
          正解数：{numOfCorrectAnswers} / {numOfQuestions}
        </Text>
        <Text className="text-white">
          正解率：{numOfCorrectAnswersRate.toFixed(1)}%
        </Text>
      </View>
      <View>
        <Text className="text-white">結果をシェアする</Text>
      </View>
      <Button
        onPress={() => router.replace("/")}
        height={70}
        borderColor="#1E90FF"
        style={{
          backgroundColor: "#2F3338",
        }}
      >
        <Ionicons name="arrow-back" size={24} color="#1E90FF" />
        <Text className="text-2xl font-bold" style={{ color: "#1E90FF" }}>
          ホームに戻る
        </Text>
      </Button>
    </SafeAreaView>
  );
};
