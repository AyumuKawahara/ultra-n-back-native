import type { AudioPlayer } from "expo-audio";
import { ensureLoaded } from "./ensure-loaded";

type Props = {
  playerRef: React.RefObject<AudioPlayer | null>;
  volumeState: number;
  isTemporarilyMuted: boolean;
};

export const updatePlayback = ({
  playerRef,
  volumeState,
  isTemporarilyMuted,
}: Props) => {
  const shouldPlay = volumeState > 0 && !isTemporarilyMuted;

  const player = ensureLoaded({ playerRef });
  if (!player) return;
  player.volume = volumeState;
  player.loop = true;

  if (shouldPlay) {
    if (!player.playing) player.play();
  } else {
    if (player.playing) player.pause();
  }
};
