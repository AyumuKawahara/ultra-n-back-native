import type { Mode } from "@/types/mode";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "tamagui";
import { SelectMode } from "./_components/select-mode";
import { SelectN } from "./_components/select-n";
import { SelectNumOfQuestions } from "./_components/select-num-of-questions";

export const SetupPage = () => {
  const router = useRouter();

  const [numOfQuestions, setNumOfQuestions] = useState<number>(5);
  const [n, setN] = useState<number>(1);
  const [selectedModes, setSelectedModes] = useState<Mode[]>([
    "place",
    "character",
  ]);

  return (
    <View className="bg-background h-full px-4 pt-6 gap-y-8">
      <Text className="text-white text-2xl font-bold text-center">
        ゲーム設定
      </Text>
      <View className="gap-y-6">
        <View className="flex-row items-center gap-x-2">
          <Text className="text-white w-[72px] text-center">問題数</Text>
          <View className="w-[250px]">
            <SelectNumOfQuestions
              numOfQuestions={numOfQuestions}
              setNumOfQuestions={setNumOfQuestions}
            />
          </View>
        </View>
        <View className="flex-row items-center gap-x-2">
          <Text className="text-white w-[72px] text-center">N</Text>
          <View className="w-[250px]">
            <SelectN n={n} setN={setN} />
          </View>
        </View>
        <View className="flex-row gap-x-2">
          <Text className="text-white w-[72px] text-center">モード</Text>
          <View className="flex-1">
            <SelectMode
              selectedModes={selectedModes}
              setSelectedModes={setSelectedModes}
            />
          </View>
        </View>
      </View>
      <Button
        onPress={() =>
          router.push({
            pathname: "/play",
            params: {
              numOfQuestions,
              n,
              selectedModes,
            },
          })
        }
      >
        <Text>プレイ</Text>
      </Button>
    </View>
  );
};
