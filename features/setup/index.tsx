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
    <View>
      <View className="flex-row items-center">
        <Text>問題数</Text>
        <SelectNumOfQuestions
          numOfQuestions={numOfQuestions}
          setNumOfQuestions={setNumOfQuestions}
        />
      </View>
      <View className="flex-row items-center">
        <Text>N</Text>
        <SelectN n={n} setN={setN} />
      </View>
      <View className="flex-row">
        <Text>モード</Text>
        <SelectMode
          selectedModes={selectedModes}
          setSelectedModes={setSelectedModes}
        />
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
