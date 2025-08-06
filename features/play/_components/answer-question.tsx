import { modeLabelMap } from "@/helpers/mode-label-map";
import type { Mode } from "@/types/mode";
import { FlatList, Text, View } from "react-native";
import { Button } from "tamagui";
import type { Answer } from "../_types/answer";
import type { Status } from "../_types/status";

type Props = {
  selectedModes: Mode[];
  answer: Answer;
  setAnswer: (answer: Answer) => void;
  status: Status;
  isCorrectAnswer: Answer;
};

export const AnswerQuestion = ({
  selectedModes,
  answer,
  setAnswer,
  status,
  isCorrectAnswer,
}: Props) => {
  const modeOptions = Object.entries(modeLabelMap).map(([key, value]) => ({
    value: key as Mode,
    label: value.label,
  }));

  return (
    <View>
      <FlatList
        data={modeOptions}
        numColumns={2}
        columnWrapperClassName="gap-x-3"
        contentContainerClassName="gap-y-3"
        renderItem={({ item }) => {
          const isSelected = selectedModes.includes(item.value);

          if (!isSelected) return <View className="flex-1 h-20" />;

          return (
            <View className="flex-1">
              <Button
                borderColor="#1E90FF"
                style={{
                  backgroundColor:
                    status === "displayAnswer"
                      ? isCorrectAnswer[item.value]
                        ? "green"
                        : "red"
                      : answer[item.value]
                        ? "blue"
                        : "#2F3338",
                  height: 80,
                }}
                onPress={() => {
                  setAnswer({
                    ...answer,
                    [item.value]: !answer[item.value],
                  });
                }}
              >
                <Text
                  className="text-2xl font-bold"
                  style={{ color: "#1E90FF" }}
                >
                  {item.label}
                </Text>
              </Button>
            </View>
          );
        }}
      />
    </View>
  );
};
