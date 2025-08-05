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
import { useBetweenDisplayQuestion } from "./_hooks/use-between-display-question";
import { useDisplayAnswer } from "./_hooks/use-display-answer";
import { useDisplayQuestion } from "./_hooks/use-display-question";
import type { Answer } from "./_types/answer";
import type { Question } from "./_types/question";
import type { Status } from "./_types/status";

export const PlayPage = () => {
  const {
    numOfQuestions,
    n,
    selectedModes: selectedModesParam,
  } = useLocalSearchParams<{
    numOfQuestions: string;
    n: string;
    selectedModes: string;
  }>();

  const selectedModes = selectedModesParam.split(",") as Mode[];

  const [questionQueue, setQuestionQueue] = useState<Question[]>(
    generateInitialQuestionQueue(Number(n), selectedModes),
  );
  const [answer, setAnswer] = useState<Answer>({
    place: false,
    character: false,
    color: false,
    shape: false,
  });
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<Answer>({
    place: false,
    character: false,
    color: false,
    shape: false,
  });
  const [numOfDisplayedCharacters, setNumOfDisplayedCharacters] = useState(0);
  const [numOfCorrectAnswers, setNumOfCorrectAnswers] = useState(0);
  const [status, setStatus] = useState<Status>("beforePlay");

  useBeforePlay({ setNumOfDisplayedCharacters, setStatus });

  useDisplayQuestion({
    setStatus,
    status,
    numOfDisplayedCharacters,
    n: Number(n),
  });
  useBetweenDisplayQuestion({
    setStatus,
    status,
    numOfDisplayedCharacters,
    setNumOfDisplayedCharacters,
    questionQueue,
    setQuestionQueue,
    selectedModes,
  });
  useAnswerQuestion({
    status,
    setStatus,
    answer,
    setAnswer,
    setIsCorrectAnswer,
    questionQueue,
    numOfCorrectAnswers,
    setNumOfCorrectAnswers,
    selectedModes,
  });
  useDisplayAnswer({
    status,
    setStatus,
    numOfDisplayedCharacters,
    setNumOfDisplayedCharacters,
    questionQueue,
    setQuestionQueue,
    selectedModes,
    numOfQuestions: Number(numOfQuestions),
    numOfCorrectAnswers,
    n: Number(n),
  });

  return (
    <SafeAreaView className="bg-background h-full px-4 pt-6 gap-y-4">
      <CurrentGameStatus
        numOfDisplayedCharacters={numOfDisplayedCharacters}
        n={Number(n)}
        numOfQuestions={Number(numOfQuestions)}
        numOfCorrectAnswers={numOfCorrectAnswers}
      />
      <DisplayQuestion question={questionQueue[0]} status={status} />
      <AnswerQuestion
        selectedModes={selectedModes}
        answer={answer}
        setAnswer={setAnswer}
        status={status}
        isCorrectAnswer={isCorrectAnswer}
      />
    </SafeAreaView>
  );
};
