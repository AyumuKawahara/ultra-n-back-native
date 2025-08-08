import { TabbarCustom } from "@/components/tabbar-custom";
import { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Separator } from "tamagui";
import { NStats } from "./_components/n-stats";
import { NumOfQuestionsStats } from "./_components/num-of-questions-stats";
import { generateSelectYMOptions } from "./_helpers/generate-select-ym-options";
import { periodList } from "./_helpers/period-list";
import { statsTypeList } from "./_helpers/stats-type-list";

export const StatsPage = () => {
  const [selectedStatsType, setSelectedStatsType] = useState<string>(
    statsTypeList[0].id,
  );
  const [selectedPeriod, setSelectedPeriod] = useState<string>(
    periodList[0].id,
  );

  const calculateDefaultYM = useCallback(() => {
    return ["day", "month"].includes(selectedPeriod)
      ? generateSelectYMOptions({ selectedPeriod })[0].id
      : "";
  }, [selectedPeriod]);

  const [selectedYM, setSelectedYM] = useState<string>(calculateDefaultYM());

  useEffect(() => {
    setSelectedYM(calculateDefaultYM());
  }, [calculateDefaultYM]);

  return (
    <SafeAreaView className="bg-background h-full px-4 pt-6 gap-y-7">
      <View className="gap-y-7">
        <Text className="text-white text-3xl font-bold">成長の記録</Text>
        <TabbarCustom
          selectedItem={selectedStatsType}
          setSelectedItem={setSelectedStatsType}
          items={statsTypeList}
        />
        <Separator />
      </View>
      {selectedStatsType === "numOfQuestions" && (
        <NumOfQuestionsStats
          selectedPeriod={selectedPeriod}
          setSelectedPeriod={setSelectedPeriod}
          selectedYM={selectedYM}
          setSelectedYM={setSelectedYM}
        />
      )}
      {selectedStatsType === "n" && (
        <NStats
          selectedPeriod={selectedPeriod}
          setSelectedPeriod={setSelectedPeriod}
        />
      )}
    </SafeAreaView>
  );
};
