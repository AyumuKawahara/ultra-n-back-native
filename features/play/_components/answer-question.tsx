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
    <FlatList
      data={modeOptions}
      numColumns={2}
      columnWrapperClassName="gap-x-2"
      contentContainerClassName="gap-y-2"
      renderItem={({ item }) => {
        const isSelected = selectedModes.includes(item.value);

        if (!isSelected) return <View className="flex-1" />;

        return (
          <View className="flex-1">
            <Button
              style={{
                backgroundColor:
                  status === "displayAnswer"
                    ? isCorrectAnswer[item.value]
                      ? "green"
                      : "red"
                    : answer[item.value]
                      ? "blue"
                      : "white",
              }}
              onPress={() => {
                setAnswer({
                  ...answer,
                  [item.value]: !answer[item.value],
                });
              }}
            >
              <Text>{item.label}</Text>
            </Button>
          </View>
        );
      }}
    />
  );
};
