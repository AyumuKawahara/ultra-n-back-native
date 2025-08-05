import type { Mode } from "@/types/mode";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AnswerQuestion } from "./_components/answer-question";
import { CurrentGameStatus } from "./_components/current-game-status";
import { DisplayQuestion } from "./_components/display-question";
import type { Question } from "./_types/question";

export const PlayPage = () => {
  const {
    numOfQuestions,
    n,
    selectedModes: selectedModesParam,
  } = useLocalSearchParams();

  const selectedModes = (selectedModesParam as string).split(",") as Mode[];

  const [questionQueue, setQuestionQueue] = useState<Question[]>([]);

  return (
    <SafeAreaView className="bg-background h-full px-4 pt-6 gap-y-4">
      <CurrentGameStatus />
      <DisplayQuestion />
      <AnswerQuestion selectedModes={selectedModes} />
    </SafeAreaView>
  );
};
