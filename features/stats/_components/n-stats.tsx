import { fetchAchievements } from "@/services/fetch-achievements";
import type { Achievement } from "@/types/achievement";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { checkDatasets } from "../_helpers/check-datasets";
import { checkXLabels } from "../_helpers/check-x-labels";
import { generateInitialDatasets } from "../_helpers/generate-initial-datasets";
import { generateXLabels } from "../_helpers/generate-x-labels";
import { updateNDatasets } from "../_helpers/update-n-datasets";
import type { Period } from "../_types/period";
import { LineChartCustom } from "./line-chart-custom";
import { SelectPeriod } from "./select-period";
import { SelectYM } from "./select-ym";

type Props = {
  selectedPeriod: Period;
  setSelectedPeriod: (period: Period) => void;
  selectedYM: string;
  setSelectedYM: (ym: string) => void;
};

export const NStats = ({
  selectedPeriod,
  setSelectedPeriod,
  selectedYM,
  setSelectedYM,
}: Props) => {
  const [chartRawData, setChartRawData] = useState<Achievement[]>([]);

  useEffect(() => {
    const loadAchievements = async () => {
      const achievements = await fetchAchievements();
      setChartRawData(achievements);
    };
    loadAchievements();
  }, []);

  const xLabels = generateXLabels({ selectedPeriod, selectedYM });
  const datasets = chartRawData.length
    ? updateNDatasets(chartRawData, selectedPeriod, selectedYM)
    : generateInitialDatasets({ xLabels });

  const checkedXLabels = checkXLabels(xLabels);
  const checkedDatasets = checkDatasets(datasets);

  return (
    <View className="gap-y-6">
      <SelectPeriod
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
      />
      {["day", "month"].includes(selectedPeriod) && (
        <View className="w-[50%]">
          <SelectYM
            selectedPeriod={selectedPeriod}
            selectedYM={selectedYM}
            setSelectedYM={setSelectedYM}
          />
        </View>
      )}
      <View className="flex-row items-center gap-x-1">
        <Ionicons name="information-circle" size={20} color="white" />
        <Text className="text-white">
          10問以上・正答率90%以上でクリアすると記録されます。
        </Text>
      </View>
      <LineChartCustom xLabels={checkedXLabels} datasets={checkedDatasets} />
    </View>
  );
};
