import type { Mode } from "@/types/mode";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AnswerQuestion } from "./_components/answer-question";
import { CurrentGameStatus } from "./_components/current-game-status";
import { DisplayQuestion } from "./_components/display-question";
import { generateInitialQuestionQueue } from "./_helpers/generate-initial-question-queue/index";
import { useAnswerQuestion } from "./_hooks/use-answer-question";
import { useBeforePlay } from "./_hooks/use-before-play";
import { useCheckAnswer } from "./_hooks/use-check-answer";
import { useDisplayQuestion } from "./_hooks/use-display-question";
import type { Answer } from "./_types/answer";
import type { Question } from "./_types/question";
import type { Status } from "./_types/status";

export const PlayPage = () => {
  const {
    numOfQuestions,
    n,
    selectedModes: selectedModesParam,
  } = useLocalSearchParams();

  const selectedModes = (selectedModesParam as string).split(",") as Mode[];

  const [questionQueue, setQuestionQueue] = useState<Question[]>(
    generateInitialQuestionQueue(Number(n), selectedModes),
  );
  const [answer, setAnswer] = useState<Answer>({
    place: false,
    character: false,
    color: false,
    shape: false,
  });
  const [questionNumber, setQuestionNumber] = useState(0);
  const [numOfCorrectAnswers, setNumOfCorrectAnswers] = useState(0);
  const [status, setStatus] = useState<Status>("beforePlay");

  useBeforePlay({ setQuestionNumber, setStatus });
  useDisplayQuestion({ setStatus, status });
  useAnswerQuestion({ status });
  useCheckAnswer({ status });

  return (
    <SafeAreaView className="bg-background h-full px-4 pt-6 gap-y-4">
      <CurrentGameStatus
        questionNumber={questionNumber}
        n={Number(n)}
        numOfQuestions={Number(numOfQuestions)}
        numOfCorrectAnswers={numOfCorrectAnswers}
      />
      <DisplayQuestion question={questionQueue[0]} status={status} />
      <AnswerQuestion
        selectedModes={selectedModes}
        answer={answer}
        setAnswer={setAnswer}
      />
    </SafeAreaView>
  );
};
