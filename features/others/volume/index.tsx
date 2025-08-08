import { useBgm } from "@/providers/bgm";
import Slider from "@react-native-community/slider";
import { useMemo } from "react";
import { Text, View } from "react-native";

export const SettingsVolumePage = () => {
  const { volume, setVolume } = useBgm();
  const displayPercent = useMemo(() => Math.round(volume * 100), [volume]);

  return (
    <View className="bg-background h-full px-4 pt-6 gap-y-6">
      <Text className="text-white text-3xl font-bold">音量設定</Text>

      <View>
        <View className="flex-row justify-between">
          <Text className="text-white text-lg">BGM 音量</Text>
          <Text className="text-white text-lg">{displayPercent}%</Text>
        </View>
        <Slider
          minimumValue={0}
          maximumValue={1}
          step={0.01}
          value={volume}
          onValueChange={setVolume}
          minimumTrackTintColor="#1E90FF"
          maximumTrackTintColor="#666"
          thumbTintColor="#1E90FF"
        />
      </View>
    </View>
  );
};
