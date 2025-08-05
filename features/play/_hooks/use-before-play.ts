import { useEffect } from "react";
import type { Status } from "../_types/status";

const INTERVAL_BEFORE_PLAY_MS = 1000;

type Props = {
  setNumOfDisplayedCharacters: (numOfDisplayedCharacters: number) => void;
  setStatus: (status: Status) => void;
};

export const useBeforePlay = ({
  setNumOfDisplayedCharacters,
  setStatus,
}: Props) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setNumOfDisplayedCharacters(1);
      setStatus("displayQuestion");
    }, INTERVAL_BEFORE_PLAY_MS);

    return () => clearTimeout(timeout);
  }, [setNumOfDisplayedCharacters, setStatus]);
};
