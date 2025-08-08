import { setAudioModeAsync, type AudioPlayer } from "expo-audio";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { BgmContext, type BgmContextValue } from "./_context/index";
import { updatePlayback } from "./_helpers/update-playback";
import { useSavedVolume } from "./_hooks/use-saved-volume";

type Props = {
  children: ReactNode;
};

export const BgmProvider = ({ children }: Props) => {
  const [volumeState, setVolumeState] = useState<number>(0.3);
  const [temporaryMuteKeys, setTemporaryMuteKeys] = useState<Set<string>>(
    new Set(),
  );
  const playerRef = useRef<AudioPlayer | null>(null);

  const isTemporarilyMuted = temporaryMuteKeys.size > 0;

  useEffect(() => {
    setAudioModeAsync({
      playsInSilentMode: true,
      interruptionMode: "duckOthers",
      interruptionModeAndroid: "duckOthers",
      allowsRecording: false,
      shouldPlayInBackground: false,
      shouldRouteThroughEarpiece: false,
    }).catch(() => {});

    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.remove();
        } catch {}
        playerRef.current = null;
      }
    };
  }, []);
  useSavedVolume({ volumeState, setVolumeState });
  useEffect(() => {
    updatePlayback({ playerRef, volumeState, isTemporarilyMuted });
  }, [volumeState, isTemporarilyMuted]);

  const setVolume = useCallback(
    (volume: number) => setVolumeState(Math.min(1, Math.max(0, volume))),
    [],
  );

  const pushTemporaryMute = useCallback((id: string) => {
    setTemporaryMuteKeys((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }, []);

  const popTemporaryMute = useCallback((id: string) => {
    setTemporaryMuteKeys((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const value = useMemo<BgmContextValue>(
    () => ({
      volume: volumeState,
      setVolume,
      pushTemporaryMute,
      popTemporaryMute,
      isTemporarilyMuted,
    }),
    [
      volumeState,
      setVolume,
      pushTemporaryMute,
      popTemporaryMute,
      isTemporarilyMuted,
    ],
  );

  return <BgmContext.Provider value={value}>{children}</BgmContext.Provider>;
};
