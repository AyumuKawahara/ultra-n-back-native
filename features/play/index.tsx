import type { Mode } from "@/types/mode";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AnswerQuestion } from "./_components/answer-question";
import { CurrentGameStatus } from "./_components/current-game-status";
import { DisplayQuestion } from "./_components/display-question";
import { generateInitialQuestionQueue } from "./_helpers/generate-initial-question-queue/index";
import type { Question } from "./_types/question";

export const PlayPage = () => {
  const {
    numOfQuestions,
    n,
    selectedModes: selectedModesParam,
  } = useLocalSearchParams();

  const selectedModes = (selectedModesParam as string).split(",") as Mode[];

  const [questionQueue, setQuestionQueue] = useState<Question[]>(
    generateInitialQuestionQueue(Number(n)),
  );
  const [questionNumber, setQuestionNumber] = useState(1);
  const [numOfCorrectAnswers, setNumOfCorrectAnswers] = useState(0);

  return (
    <SafeAreaView className="bg-background h-full px-4 pt-6 gap-y-4">
      <CurrentGameStatus
        questionNumber={questionNumber}
        n={Number(n)}
        numOfQuestions={Number(numOfQuestions)}
        numOfCorrectAnswers={numOfCorrectAnswers}
      />
      <DisplayQuestion question={questionQueue[0]} />
      <AnswerQuestion selectedModes={selectedModes} />
    </SafeAreaView>
  );
};
