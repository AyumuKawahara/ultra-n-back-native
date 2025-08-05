import type { Mode } from "@/types/mode";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
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
    <SafeAreaView className="bg-background h-full">
      <DisplayQuestion />
      <AnswerQuestion selectedModes={selectedModes} />
    </SafeAreaView>
  );
};
