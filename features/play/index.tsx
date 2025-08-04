import type { Mode } from "@/types/mode";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { AnswerQuestion } from "./_components/answer-question";
import { DisplayQuestion } from "./_components/display-question";

export const PlayPage = () => {
  const {
    numOfQuestions,
    n,
    selectedModes: selectedModesParam,
  } = useLocalSearchParams();

  const selectedModes = (selectedModesParam as string).split(",") as Mode[];

  return (
    <View>
      <DisplayQuestion />
      <AnswerQuestion selectedModes={selectedModes} />
    </View>
  );
};
