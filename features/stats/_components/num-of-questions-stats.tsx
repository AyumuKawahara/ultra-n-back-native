import { useState } from "react";
import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { SelectCumulate } from "./select-cumulate";
import { SelectPeriod } from "./select-period";

type Props = {
  selectedPeriod: string;
  setSelectedPeriod: (period: string) => void;
};

export const NumOfQuestionsStats = ({
  selectedPeriod,
  setSelectedPeriod,
}: Props) => {
  const [isCumulate, setIsCumulate] = useState(false);

  return (
    <View>
      <View className="flex-row justify-between items-center">
        <SelectPeriod
          selectedPeriod={selectedPeriod}
          setSelectedPeriod={setSelectedPeriod}
        />
        <SelectCumulate isCumulate={isCumulate} setIsCumulate={setIsCumulate} />
      </View>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
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
      />
    </View>
  );
};
