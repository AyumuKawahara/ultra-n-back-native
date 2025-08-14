import { useBgm } from "@/providers/bgm/_hooks/use-bgm";
import { useSoundEffectsVolume } from "@/providers/bgm/_hooks/use-sound-effects-volume";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { useMemo } from "react";
import { ScrollView, Text, View } from "react-native";

export const SettingsVolumePage = () => {
  const { volume, setVolume } = useBgm();
  const { soundEffectsVolume, setSoundEffectsVolume } = useSoundEffectsVolume();

  const displayBgmPercent = useMemo(() => Math.round(volume * 100), [volume]);
  const displaySoundEffectsPercent = useMemo(
    () => Math.round(soundEffectsVolume * 100),
    [soundEffectsVolume],
  );

  return (
    <ScrollView
      className="bg-background flex-1"
      contentContainerClassName="px-4 pt-6 pb-10 gap-y-6"
    >
      <Text className="text-white text-3xl font-bold">音量設定</Text>

      <View className="rounded-2xl p-5 gap-y-5 border border-white/10 bg-backgroundLight">
        <View className="flex-row items-center gap-x-2">
          <Ionicons name="musical-notes" size={20} color="#1E90FF" />
          <Text className="text-white text-xl font-bold">BGM</Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-white text-base">音量</Text>
          <Text className="text-white text-base">{displayBgmPercent}%</Text>
        </View>
        <Slider
          minimumValue={0}
          maximumValue={1}
          step={0.05}
          value={volume}
          onValueChange={setVolume}
          minimumTrackTintColor="#1E90FF"
          maximumTrackTintColor="#666"
          thumbTintColor="#1E90FF"
        />

        <View className="h-[1px] bg-white/10" />

        <View className="flex-row items-center gap-x-2">
          <Ionicons name="volume-high" size={20} color="#2ECC71" />
          <Text className="text-white text-xl font-bold">効果音</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-white text-base">音量</Text>
          <Text className="text-white text-base">
            {displaySoundEffectsPercent}%
          </Text>
        </View>
        <Slider
          minimumValue={0}
          maximumValue={1}
          step={0.05}
          value={soundEffectsVolume}
          onValueChange={setSoundEffectsVolume}
          minimumTrackTintColor="#2ECC71"
          maximumTrackTintColor="#666"
          thumbTintColor="#2ECC71"
        />
      </View>
    </ScrollView>
  );
};
