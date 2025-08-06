import { modeLabelMap } from "@/helpers/mode-label-map";
import type { Mode } from "@/types/mode";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "tamagui";
import { ShareLinks } from "./_components/share-links";

export const ResultPage = () => {
  const router = useRouter();
  const { n, numOfQuestions, numOfCorrectAnswers, selectedModes } =
    useLocalSearchParams<{
      n: string;
      numOfQuestions: string;
      numOfCorrectAnswers: string;
      selectedModes: string;
    }>();

  const selectedModesArray = selectedModes.split(",");

  const numOfCorrectAnswersRate =
    (Number(numOfCorrectAnswers) / Number(numOfQuestions)) * 100;

  return (
    <SafeAreaView className="bg-background h-full px-4 pt-6 pb-12 justify-between">
      <View className="gap-y-8">
        <Text className="text-white text-4xl font-bold">プレイ結果</Text>
        <View className="gap-y-2">
          <View className="text-white flex-row gap-x-2">
            <Text className="text-white text-2xl font-bold w-24">N：</Text>
            <Text className="text-white text-2xl font-bold">{n}</Text>
          </View>
          <View className="text-white flex-row gap-x-2">
            <Text className="text-white text-2xl font-bold w-24">正解数：</Text>
            <Text className="text-white text-2xl font-bold">
              {numOfCorrectAnswers} / {numOfQuestions}
            </Text>
          </View>
          <View className="text-white flex-row gap-x-2">
            <Text className="text-white text-2xl font-bold w-24">正解率：</Text>
            <Text className="text-white text-2xl font-bold">
              {numOfCorrectAnswersRate.toFixed(1)}%
            </Text>
          </View>
          <View className="text-white flex-row gap-x-2">
            <Text className="text-white text-2xl font-bold w-24">モード：</Text>
            <View className="flex-row gap-x-3">
              {selectedModesArray.map((mode) => {
                const isRequired = modeLabelMap[mode as Mode].required;

                return (
                  <Text
                    key={mode}
                    className="text-white text-2xl font-bold"
                    style={{
                      color: isRequired ? "white" : "#1E90FF",
                    }}
                  >
                    {modeLabelMap[mode as Mode].label}
                  </Text>
                );
              })}
            </View>
          </View>
        </View>
      </View>
      <View className="gap-y-10">
        <ShareLinks />
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
      </View>
    </SafeAreaView>
  );
};
