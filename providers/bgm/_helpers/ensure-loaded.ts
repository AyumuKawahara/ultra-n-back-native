import { createAudioPlayer, type AudioPlayer } from "expo-audio";
import { BGM_FILE } from "../_const/bgm-file";

type Props = {
  playerRef: React.RefObject<AudioPlayer | null>;
};

export const ensureLoaded = ({ playerRef }: Props) => {
  if (playerRef.current) return playerRef.current;
  const player = createAudioPlayer(BGM_FILE);
  playerRef.current = player;

  return player;
};
