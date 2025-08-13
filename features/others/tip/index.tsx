import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { wayToUseTip } from "./_helpers/way-to-use-tip";

const TIP_UNIT_JPY = 250;

export const TipPage = () => {
  return (
    <View className="bg-background flex-1 px-4 pt-6 pb-10 gap-y-6">
      <Text className="text-white text-3xl font-bold">Buy me a Coffee</Text>
      <Text className="text-white/80 text-base">
        応援してくださる方がいらっしゃいましたら、ご支援いただけますと幸いです。
      </Text>

      <View className="rounded-2xl p-5 gap-y-5 border border-white/10 bg-backgroundLight">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-x-2">
            <Ionicons name="heart" size={20} color="#FF4C4C" />
            <Text className="text-white text-xl font-bold">
              1口 {TIP_UNIT_JPY} 円
            </Text>
          </View>
          <View className="bg-vividBlue/20 border border-vividBlue rounded-md px-2 py-1">
            <Text className="text-vividBlue text-xs font-bold">TIP</Text>
          </View>
        </View>

        <View className="h-[1px] bg-white/10" />

        <View className="flex-row items-end justify-between">
          <View>
            <Text className="text-white/80">合計</Text>
            <View className="flex-row items-baseline gap-x-1">
              <Text className="text-vividBlue text-3xl font-extrabold">
                {TIP_UNIT_JPY}
              </Text>
              <Text className="text-white text-lg">円</Text>
            </View>
          </View>
          <View>
            <Text className="text-white/60">1口</Text>
          </View>
        </View>

        <Pressable
          onPress={() => {}}
          style={({ pressed }) => [
            { transform: [{ scale: pressed ? 0.98 : 1 }] },
          ]}
          className="mt-2 rounded-xl bg-vividBlue items-center justify-center px-4 py-3"
        >
          <Text className="text-white font-bold">1口で応援する</Text>
        </Pressable>
      </View>

      <View className="rounded-2xl p-5 gap-y-4 border border-white/10 bg-backgroundLight">
        <View className="flex-row items-center gap-x-2">
          <Ionicons name="information-circle" size={20} color="#1E90FF" />
          <Text className="text-white text-base font-bold">Tipの使い道</Text>
        </View>
        <View className="gap-y-2">
          {wayToUseTip.map((text) => (
            <View key={text} className="flex-row items-center gap-x-2">
              <Ionicons name="checkmark-circle" size={18} color="#2ECC71" />
              <Text className="text-white/90">{text}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text className="text-white/60 text-xs">
        いつもご利用ありがとうございます。いただいたご支援は大切に活用し、より良い体験につなげてまいります。
      </Text>
    </View>
  );
};
