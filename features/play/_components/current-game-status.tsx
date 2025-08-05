import { Text, View } from "react-native";

type Props = {
  questionNumber: number;
  n: number;
  numOfQuestions: number;
  numOfCorrectAnswers: number;
};

export const CurrentGameStatus = ({
  questionNumber,
  n,
  numOfQuestions,
  numOfCorrectAnswers,
}: Props) => {
  return (
    <View className="flex-row justify-between items-center">
      <Text className="text-white">
        問題：{questionNumber} / {numOfQuestions}
      </Text>
      <Text className="text-white">N：{n}</Text>
      <Text className="text-white">
        正解数：{numOfCorrectAnswers} / {numOfQuestions}
      </Text>
    </View>
  );
};
