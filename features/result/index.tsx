import { modeLabelMap } from "@/helpers/mode-label-map";
import type { Mode } from "@/types/mode";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ShareLinks } from "./_components/share-links";
import { calcEvaluation } from "./_helpers/calc-evaluation";

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

  const modeIconMap: Record<Mode, keyof typeof Ionicons.glyphMap> = {
    place: "location",
    character: "text",
    color: "color-palette",
    shape: "shapes",
  };

  const numOfCorrectAnswersRate =
    (Number(numOfCorrectAnswers) / Number(numOfQuestions)) * 100;

  const rate = Number.isFinite(numOfCorrectAnswersRate)
    ? numOfCorrectAnswersRate
    : 0;

  const { text: evaluationText, color: evaluationColor } = calcEvaluation(rate);

  const handleReplay = () => {
    router.replace({
      pathname: "/play",
      params: {
        numOfQuestions: Number(numOfQuestions),
        n: Number(n),
        selectedModes: selectedModesArray,
      },
    });
  };

  return (
    <SafeAreaView className="bg-background h-full px-4 pt-10 pb-12 justify-between">
      <View className="gap-y-7">
        <View className="rounded-2xl px-5 py-6 gap-y-6 border border-white/10 bg-backgroundLight">
          <View className="items-center gap-y-2">
            <Ionicons name="trophy" size={28} color={evaluationColor} />
            <Text className="text-white text-5xl font-extrabold">
              {rate.toFixed(1)}%
            </Text>
            <Text
              className="text-white text-base"
              style={{ color: evaluationColor }}
            >
              {evaluationText}
            </Text>
          </View>

          <View className="h-[1px] bg-white/10" />

          <View className="gap-y-4">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-x-2">
                <Ionicons name="trail-sign" size={20} color="#A64DFF" />
                <Text className="text-white text-base font-bold">N</Text>
              </View>
              <Text className="text-white text-xl font-bold">{n}</Text>
            </View>

            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-x-2">
                <Ionicons name="checkmark-circle" size={20} color="#2ECC71" />
                <Text className="text-white text-base font-bold">正解数</Text>
              </View>
              <Text className="text-white text-xl font-bold">
                {numOfCorrectAnswers} / {numOfQuestions}
              </Text>
            </View>

            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-x-2">
                <Ionicons name="speedometer" size={20} color="#F1C40F" />
                <Text className="text-white text-base font-bold">正解率</Text>
              </View>
              <Text className="text-white text-xl font-bold">
                {rate.toFixed(1)}%
              </Text>
            </View>

            <View className="gap-y-2">
              <View className="flex-row items-center gap-x-2">
                <Ionicons name="shapes" size={20} color="#2ECC71" />
                <Text className="text-white text-base font-bold">モード</Text>
              </View>
              <View className="flex-row flex-wrap gap-x-2 gap-y-2">
                {selectedModesArray.map((mode) => {
                  const typedMode = mode as Mode;
                  const isRequired = modeLabelMap[typedMode].required;
                  const iconName = modeIconMap[typedMode];

                  return (
                    <View
                      key={mode}
                      className="flex-row items-center rounded-full border px-3 py-1 gap-x-1"
                      style={{
                        backgroundColor: isRequired
                          ? "rgba(255,255,255,0.06)"
                          : "rgba(30,144,255,0.12)",
                        borderColor: isRequired
                          ? "rgba(255,255,255,0.2)"
                          : "#1E90FF",
                      }}
                    >
                      <Ionicons
                        name={iconName}
                        size={14}
                        color={isRequired ? "white" : "#1E90FF"}
                      />
                      <Text
                        className="text-white text-sm font-bold"
                        style={{ color: isRequired ? "white" : "#1E90FF" }}
                      >
                        {modeLabelMap[typedMode].label}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </View>

        <ShareLinks
          rate={rate}
          n={Number(n)}
          numOfCorrectAnswers={Number(numOfCorrectAnswers)}
          numOfQuestions={Number(numOfQuestions)}
          selectedModes={selectedModesArray}
        />
      </View>

      <View className="gap-y-4">
        <Pressable
          onPress={handleReplay}
          style={({ pressed }) => [
            { transform: [{ scale: pressed ? 0.98 : 1 }] },
          ]}
          className="rounded-2xl bg-vividBlue items-center justify-center py-6"
        >
          <Text className="text-white text-xl font-bold">
            同じ設定で再プレイ
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.replace("/")}
          style={({ pressed }) => [
            { transform: [{ scale: pressed ? 0.98 : 1 }] },
          ]}
          className="rounded-2xl border border-white/20 items-center justify-center py-6"
        >
          <View className="flex-row items-center gap-x-2">
            <Ionicons name="arrow-back" size={20} color="#1E90FF" />
            <Text className="text-xl font-bold" style={{ color: "#1E90FF" }}>
              ホームに戻る
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
