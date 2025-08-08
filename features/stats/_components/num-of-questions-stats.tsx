import { playRecords } from "@/db/schema";
import { db } from "@/features/root";
import { dayjsJST } from "@/lib/dayjs";
import type { PlayRecord } from "@/types/play-record";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { SelectCumulate } from "./select-cumulate";
import { SelectPeriod } from "./select-period";
import { SelectYM } from "./select-ym";

type Props = {
  selectedPeriod: string;
  setSelectedPeriod: (period: string) => void;
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
  const [chartRawData, setChartRawData] = useState<PlayRecord[]>([]);

  useEffect(() => {
    const loadNumOfQuestionsStats = async () => {
      const data = await db.select().from(playRecords);
      setChartRawData(data);
    };
    loadNumOfQuestionsStats();
  }, []);

  const xLabels = chartRawData.map((data) =>
    dayjsJST(data.createdAt).format("D"),
  );
  const datasets = chartRawData.map((data) => data.numOfQuestions);

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
      {/* <LineChart
        data={{
          labels: xLabels,
          datasets: [
            {
              data: datasets,
            },
          ],
        }}
        formatXLabel={(label) => {
          if (label === "January") {
            return "1月";
          }
          return label;
        }}
        width={Dimensions.get("window").width - 16}
        height={220}
        yAxisInterval={1}
        fromZero={true}
        chartConfig={{
          backgroundGradientFrom: "#25292E",
          backgroundGradientTo: "#25292E",
          color: (opacity = 1) => `rgba(30, 144, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: "3",
            strokeWidth: "1.5",
            stroke: "white",
          },
        }}
        style={{
          transform: [{ translateX: -16 }],
        }}
        bezier
      /> */}
    </View>
  );
};
