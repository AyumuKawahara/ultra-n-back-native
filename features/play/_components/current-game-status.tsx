import { Text, View } from "react-native";

type Props = {
  numOfDisplayedCharacters: number;
  n: number;
  numOfQuestions: number;
  numOfCorrectAnswers: number;
};

export const CurrentGameStatus = ({
  numOfDisplayedCharacters,
  n,
  numOfQuestions,
  numOfCorrectAnswers,
}: Props) => {
  return (
    <View className="flex-row justify-between items-center">
      <Text className="text-white">
        問題：{Math.max(numOfDisplayedCharacters - n, 0)} / {numOfQuestions}
      </Text>
      <Text className="text-white">N：{n}</Text>
      <Text className="text-white">
        正解数：{numOfCorrectAnswers} / {numOfQuestions}
      </Text>
    </View>
  );
};
