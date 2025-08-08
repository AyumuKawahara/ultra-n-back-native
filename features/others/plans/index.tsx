import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { plansDetail } from "./_helpers/plans-detail";

export const PlansPage = () => {
  const [currentPlan, setCurrentPlan] = useState<string>("free");

  return (
    <View className="bg-background h-full px-4 pt-6 gap-y-6">
      <Text className="text-white text-3xl font-bold">プラン一覧</Text>
      <View className="gap-y-5">
        {plansDetail.map((plan) => {
          const isCurrentPlan = plan.id === currentPlan;

          return (
            <TouchableOpacity
              key={plan.id}
              className="border border-white border-dashed rounded-xl p-4 gap-y-3"
            >
              <View className="flex-row justify-between items-center">
                <Text className="text-white text-2xl font-bold">
                  {plan.name}
                </Text>
                {isCurrentPlan && (
                  <View className="bg-vividBlue rounded-md px-2 py-1">
                    <Text className="text-white text-lg font-bold">
                      現在のプラン
                    </Text>
                  </View>
                )}
              </View>
              <Text className="text-white text-lg font-bold">
                月額
                <Text className="text-2xl text-vividBlue">
                  {plan.monthlyFee}
                </Text>
                円
              </Text>
              <View>
                <Text className="text-white text-xl">おすすめの方：</Text>
                <Text className="text-white text-lg">{plan.recommendFor}</Text>
              </View>
              <Text className="text-white text-lg">{plan.comment}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
