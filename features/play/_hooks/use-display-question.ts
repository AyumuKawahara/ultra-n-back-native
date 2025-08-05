import { useEffect } from "react";
import type { Status } from "../_types/status";

const INTERVAL_DISPLAY_QUESTION_MS = 1000;

type Props = {
  setStatus: (status: Status) => void;
  status: Status;
};

export const useDisplayQuestion = ({ setStatus, status }: Props) => {
  useEffect(() => {
    if (status === "displayQuestion") {
      const interval = setInterval(() => {
        setStatus("answerQuestion");
      }, INTERVAL_DISPLAY_QUESTION_MS);

      return () => clearInterval(interval);
    }
  }, [status, setStatus]);
};
