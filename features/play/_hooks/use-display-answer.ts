import type { Mode } from "@/types/mode";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { generateQuestion } from "../_helpers/generate-question";
import type { Question } from "../_types/question";
import type { Status } from "../_types/status";

export const INTERVAL_DISPLAY_ANSWER_MS = 1000;

type Props = {
  status: Status;
  setStatus: (status: Status) => void;
  numOfDisplayedCharacters: number;
  setNumOfDisplayedCharacters: (numOfDisplayedCharacters: number) => void;
  setCurrentQuestion: (currentQuestion: Question) => void;
  currentQuestion: Question;
  historyQueue: Question[];
  setHistoryQueue: (historyQueue: Question[]) => void;
  selectedModes: Mode[];
  numOfQuestions: number;
  numOfCorrectAnswers: number;
  n: number;
};

export const useDisplayAnswer = ({
  status,
  setStatus,
  numOfDisplayedCharacters,
  setNumOfDisplayedCharacters,
  setCurrentQuestion,
  currentQuestion,
  historyQueue,
  setHistoryQueue,
  selectedModes,
  numOfQuestions,
  numOfCorrectAnswers,
  n,
}: Props) => {
  const router = useRouter();

  const numOfDisplayedQuestions = Math.max(numOfDisplayedCharacters - n, 0);

  useEffect(() => {
    if (status === "displayAnswer") {
      const interval = setInterval(() => {
        if (numOfDisplayedQuestions >= numOfQuestions) {
          setStatus("afterPlay");
          router.replace({
            pathname: "/result",
            params: {
              n,
              numOfQuestions,
              numOfCorrectAnswers,
            },
          });
        } else {
          setStatus("displayQuestion");
          setNumOfDisplayedCharacters(numOfDisplayedCharacters + 1);
          setHistoryQueue([...historyQueue, currentQuestion]);
          setCurrentQuestion(generateQuestion(selectedModes));
        }
      }, INTERVAL_DISPLAY_ANSWER_MS);

      return () => clearInterval(interval);
    }
  }, [
    status,
    setStatus,
    numOfDisplayedCharacters,
    setNumOfDisplayedCharacters,
    currentQuestion,
    historyQueue,
    setHistoryQueue,
    numOfQuestions,
    router,
    numOfDisplayedQuestions,
    numOfCorrectAnswers,
    n,
    setCurrentQuestion,
    selectedModes,
  ]);
};
