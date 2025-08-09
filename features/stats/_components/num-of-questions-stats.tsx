import { fetchDailyQuestions } from "@/services/fetch-daily-questions";
import { fetchMonthlyQuestions } from "@/services/fetch-monthly-questions";
import { fetchYearlyQuestions } from "@/services/fetch-yearly-questions";
import type { AggregatedQuestionsRow } from "@/types/aggregated-questions-row";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { checkDatasets } from "../_helpers/check-datasets";
import { checkXLabels } from "../_helpers/check-x-labels";
import { generateInitialDatasets } from "../_helpers/generate-initial-datasets";
import { generateXLabels } from "../_helpers/generate-x-labels";
import { updateDatasets } from "../_helpers/update-datasets";
import type { Period } from "../_types/period";
import { LineChartCustom } from "./line-chart-custom";
import { SelectCumulate } from "./select-cumulate";
import { SelectPeriod } from "./select-period";
import { SelectYM } from "./select-ym";

const fetcher = {
  day: fetchDailyQuestions,
  month: fetchMonthlyQuestions,
  year: fetchYearlyQuestions,
} as const;

type Props = {
  selectedPeriod: Period;
  setSelectedPeriod: (period: Period) => void;
  selectedYM: string;
  setSelectedYM: (ym: string) => void;
};

export const NumOfQuestionsStats = ({
  selectedPeriod,
  setSelectedPeriod,
  selectedYM,
  setSelectedYM,
}: Props) => {
  const [isCumulate, setIsCumulate] = useState(false);
  const [chartRawData, setChartRawData] = useState<AggregatedQuestionsRow[]>(
    [],
  );

  useEffect(() => {
    const loadNumOfQuestionsStats = async () => {
      const data = await fetcher[selectedPeriod](selectedYM);
      setChartRawData(data);
    };
    loadNumOfQuestionsStats();
  }, [selectedYM, selectedPeriod]);

  const xLabels = generateXLabels({ selectedPeriod, selectedYM });
  const datasets = chartRawData.length
    ? updateDatasets({
        chartRawData,
        selectedYM,
        selectedPeriod,
        isCumulative: isCumulate,
      })
    : generateInitialDatasets({ xLabels });

  const checkedXLabels = checkXLabels(xLabels);
  const checkedDatasets = checkDatasets(datasets);

  return (
    <View className="gap-y-6">
      <View className="flex-row justify-between items-center">
        <SelectPeriod
          selectedPeriod={selectedPeriod}
          setSelectedPeriod={setSelectedPeriod}
        />
        <SelectCumulate isCumulate={isCumulate} setIsCumulate={setIsCumulate} />
      </View>
      {["day", "month"].includes(selectedPeriod) && (
        <View className="w-[50%]">
          <SelectYM
            selectedPeriod={selectedPeriod}
            selectedYM={selectedYM}
            setSelectedYM={setSelectedYM}
          />
        </View>
      )}
      <LineChartCustom xLabels={checkedXLabels} datasets={checkedDatasets} />
    </View>
  );
};
