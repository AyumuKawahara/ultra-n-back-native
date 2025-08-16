import { BannerAdCustom } from "@/components/banner-ad-custom";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { plansDetail } from "./_helpers/plans-detail";

export const PlansPage = () => {
  const [currentPlan, setCurrentPlan] = useState<string>("free");

  return (
    <ScrollView
      className="bg-background flex-1"
      contentContainerClassName="px-4 pt-6 pb-10 gap-y-6"
    >
      <Text className="text-white text-3xl font-bold">プラン一覧</Text>
      <View className="gap-y-5">
        {plansDetail.map((plan) => {
          const isCurrentPlan = plan.id === currentPlan;

          return (
            <Pressable
              key={plan.id}
              onPress={() => setCurrentPlan(plan.id)}
              style={({ pressed }) => [
                { transform: [{ scale: pressed ? 0.98 : 1 }] },
              ]}
              className={`rounded-2xl p-5 gap-y-4 border ${
                isCurrentPlan
                  ? "border-vividBlue bg-backgroundLight/70"
                  : "border-white/10 bg-backgroundLight"
              }`}
            >
              <View className="flex-row justify-between items-center">
                <Text className="text-white text-2xl font-bold">
                  {plan.name}
                </Text>
                {isCurrentPlan && (
                  <View className="bg-vividBlue/20 border border-vividBlue rounded-md px-2 py-1">
                    <Text className="text-vividBlue text-sm font-bold">
                      現在のプラン
                    </Text>
                  </View>
                )}
              </View>

              <View className="h-[1px] bg-white/10" />

              <Text className="text-white text-base">月額</Text>
              <View className="flex-row items-baseline gap-x-1">
                <Text className="text-3xl font-extrabold text-vividBlue">
                  {plan.monthlyFee === 0 ? "無料" : plan.monthlyFee}
                </Text>
                {plan.monthlyFee !== 0 && (
                  <Text className="text-white text-lg">円</Text>
                )}
              </View>

              <View className="h-[1px] bg-white/10" />

              <View className="gap-y-2">
                <Text className="text-white text-base">おすすめの方</Text>
                <Text className="text-white text-lg font-medium">
                  {plan.recommendFor}
                </Text>
              </View>

              {Array.isArray(plan.functions) && plan.functions.length > 0 && (
                <View className="gap-y-2 mt-1">
                  <Text className="text-white text-base">含まれる機能</Text>
                  <View className="gap-y-2">
                    {plan.functions.map((fn) => (
                      <View key={fn} className="flex-row items-center gap-x-2">
                        <Ionicons
                          name="checkmark-circle"
                          size={20}
                          color="#2ECC71"
                        />
                        <Text className="text-white text-base">{fn}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}

              <View className="h-[1px] bg-white/10" />

              <Text className="text-white text-base">{plan.comment}</Text>
            </Pressable>
          );
        })}
      </View>
      <View className="mt-2">
        <BannerAdCustom />
      </View>
    </ScrollView>
  );
};
