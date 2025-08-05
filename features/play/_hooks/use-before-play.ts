import { useEffect } from "react";
import type { Status } from "../_types/status";

const INTERVAL_BEFORE_PLAY_MS = 1000;

type Props = {
  setQuestionNumber: (questionNumber: number) => void;
  setStatus: (status: Status) => void;
};

export const useBeforePlay = ({ setQuestionNumber, setStatus }: Props) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setQuestionNumber(1);
      setStatus("displayQuestion");
    }, INTERVAL_BEFORE_PLAY_MS);

    return () => clearTimeout(timeout);
  }, [setQuestionNumber, setStatus]);
};
