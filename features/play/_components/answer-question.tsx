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
  numOfDisplayedCharacters: number;
  n: number;
};

export const AnswerQuestion = ({
  selectedModes,
  answer,
  setAnswer,
  status,
  isCorrectAnswer,
  numOfDisplayedCharacters,
  n,
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

          const isBeforeQuestion = numOfDisplayedCharacters <= n;

          return (
            <View className="flex-1">
              <Button
                borderColor={
                  status === "displayAnswer"
                    ? isCorrectAnswer[item.value]
                      ? "#2ECC71"
                      : "#FF4C4C"
                    : "#1E90FF"
                }
                style={{
                  backgroundColor:
                    status === "displayAnswer"
                      ? "#2F3338"
                      : answer[item.value]
                        ? "#1E90FF"
                        : "#2F3338",
                  height: 80,
                  opacity: isBeforeQuestion ? 0.6 : 1,
                }}
                onPress={() => {
                  if (status === "displayAnswer" || isBeforeQuestion) return;
                  setAnswer({
                    ...answer,
                    [item.value]: !answer[item.value],
                  });
                }}
              >
                <Text
                  className="text-2xl font-bold"
                  style={{
                    color:
                      status === "displayAnswer"
                        ? isCorrectAnswer[item.value]
                          ? "#2ECC71"
                          : "#FF4C4C"
                        : answer[item.value]
                          ? "white"
                          : "#1E90FF",
                  }}
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
