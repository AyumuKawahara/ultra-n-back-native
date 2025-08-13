import type { Mode } from "@/types/mode";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
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

  useEffect(() => {
    AsyncStorage.getItem("numOfQuestions").then((num) => {
      if (num) setNumOfQuestions(Number(num));
    });
    AsyncStorage.getItem("n").then((storedN) => {
      if (storedN) setN(Number(storedN));
    });
    AsyncStorage.getItem("selectedModes").then((modes) => {
      if (modes) setSelectedModes(JSON.parse(modes));
    });
  }, []);

  const handleStart = () => {
    router.push({
      pathname: "/play",
      params: { numOfQuestions, n, selectedModes },
    });
    AsyncStorage.setItem("numOfQuestions", numOfQuestions.toString());
    AsyncStorage.setItem("n", n.toString());
    AsyncStorage.setItem("selectedModes", JSON.stringify(selectedModes));
  };

  return (
    <View className="bg-background flex-1 px-4 pt-10 pb-20 justify-between">
      <View className="rounded-2xl p-5 gap-y-6 border border-white/10 bg-backgroundLight">
        <View className="gap-y-3">
          <View className="flex-row items-center gap-x-2">
            <Ionicons name="list" size={20} color="#1E90FF" />
            <Text className="text-white text-base font-bold">問題数</Text>
          </View>
          <SelectNumOfQuestions
            numOfQuestions={numOfQuestions}
            setNumOfQuestions={setNumOfQuestions}
          />
        </View>

        <View className="h-[1px] bg-white/10" />

        <View className="gap-y-3">
          <View className="flex-row items-center gap-x-2">
            <Ionicons name="trail-sign" size={20} color="#A64DFF" />
            <Text className="text-white text-base font-bold">N</Text>
          </View>
          <SelectN n={n} setN={setN} />
        </View>

        <View className="h-[1px] bg-white/10" />

        <View className="gap-y-3">
          <View className="flex-row items-center gap-x-2">
            <Ionicons name="shapes" size={20} color="#2ECC71" />
            <Text className="text-white text-base font-bold">モード</Text>
          </View>
          <View className="gap-y-3">
            <SelectMode
              selectedModes={selectedModes}
              setSelectedModes={setSelectedModes}
            />
            <View className="flex-row items-center gap-x-1">
              <Ionicons
                name="information-circle-outline"
                size={18}
                color="#FFFFFF"
              />
              <Text className="text-white/90">場所・文字は必須です</Text>
            </View>
          </View>
        </View>
      </View>

      <Pressable
        onPress={handleStart}
        style={({ pressed }) => [
          { transform: [{ scale: pressed ? 0.98 : 1 }] },
        ]}
        className="rounded-2xl bg-vividBlue items-center justify-center py-7"
      >
        <Text className="text-white text-xl font-bold">Start</Text>
      </Pressable>
    </View>
  );
};
