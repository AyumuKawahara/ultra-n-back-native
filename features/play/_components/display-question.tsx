import { FlatList, Text, View } from "react-native";
import type { Question } from "../_types/question";
import type { Status } from "../_types/status";

type Props = {
  question: Question;
  status: Status;
};

export const DisplayQuestion = ({ question, status }: Props) => {
  const numbers = Array.from({ length: 9 }, (_, i) => i);

  return (
    <FlatList
      data={numbers}
      numColumns={3}
      columnWrapperClassName="flex gap-x-0.5"
      contentContainerClassName="gap-y-0.5"
      renderItem={({ index }) => {
        const isActive = index === question.place;

        if (!isActive || status !== "displayQuestion") {
          return <View className="flex-1 aspect-square" />;
        }

        return (
          <View
            className="flex-1 aspect-square flex items-center justify-center border rounded-xl"
            style={{
              borderColor: question.color,
            }}
          >
            <Text className="text-4xl" style={{ color: question.color }}>
              {question.character}
            </Text>
          </View>
        );
      }}
    />
  );
};
