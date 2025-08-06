import type { Mode } from "@/types/mode";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
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
    <View className="bg-background h-full px-4 pt-10 pb-24 gap-y-8 justify-between">
      <View className="gap-y-10">
        <View className="flex-row items-center gap-x-4">
          <Text className="text-white w-20 text-center font-bold text-xl">
            問題数
          </Text>
          <View className="w-[230px]">
            <SelectNumOfQuestions
              numOfQuestions={numOfQuestions}
              setNumOfQuestions={setNumOfQuestions}
            />
          </View>
        </View>
        <View className="flex-row items-center gap-x-4">
          <Text className="text-white w-20 text-center font-bold text-xl">
            N
          </Text>
          <View className="w-[230px]">
            <SelectN n={n} setN={setN} />
          </View>
        </View>
        <View className="flex-row gap-x-4">
          <Text className="text-white w-20 text-center font-bold text-xl">
            モード
          </Text>
          <View className="flex-1 gap-y-3">
            <SelectMode
              selectedModes={selectedModes}
              setSelectedModes={setSelectedModes}
            />
            <View className="flex-row items-center gap-x-1">
              <Ionicons
                name="information-circle-outline"
                size={20}
                color="white"
              />
              <Text className="text-white font-medium text-lg">
                場所・文字は必須です
              </Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableHighlight
        className="border rounded-2xl py-7 items-center justify-center"
        style={{
          backgroundColor: "#2F3338",
          borderColor: "#1E90FF",
        }}
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
        <Text className="text-2xl font-bold" style={{ color: "#1E90FF" }}>
          Start
        </Text>
      </TouchableHighlight>
    </View>
  );
};
