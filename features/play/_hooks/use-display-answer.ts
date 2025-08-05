import type { Mode } from "@/types/mode";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { generateNextQueue } from "../_helpers/generate-next-queue";
import type { Question } from "../_types/question";
import type { Status } from "../_types/status";

export const INTERVAL_DISPLAY_ANSWER_MS = 1000;

type Props = {
  status: Status;
  setStatus: (status: Status) => void;
  numOfDisplayedCharacters: number;
  setNumOfDisplayedCharacters: (numOfDisplayedCharacters: number) => void;
  questionQueue: Question[];
  setQuestionQueue: (questionQueue: Question[]) => void;
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
  questionQueue,
  setQuestionQueue,
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
          setQuestionQueue(generateNextQueue(questionQueue, selectedModes));
        }
      }, INTERVAL_DISPLAY_ANSWER_MS);

      return () => clearInterval(interval);
    }
  }, [
    status,
    setStatus,
    numOfDisplayedCharacters,
    setNumOfDisplayedCharacters,
    questionQueue,
    selectedModes,
    setQuestionQueue,
    numOfQuestions,
    router,
    numOfDisplayedQuestions,
    numOfCorrectAnswers,
    n,
  ]);
};
