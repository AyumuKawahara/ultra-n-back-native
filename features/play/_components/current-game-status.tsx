import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
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
  const router = useRouter();

  return (
    <View className="gap-y-4">
      <View className="flex-row justify-end">
        <Feather
          name="x-circle"
          size={24}
          color="#fff"
          onPress={() => router.back()}
        />
      </View>
      <View className="flex-row justify-between items-center">
        <Text className="text-white text-lg">
          問題：{Math.max(numOfDisplayedCharacters - n, 0)} / {numOfQuestions}
        </Text>
        <Text className="text-white text-lg">N：{n}</Text>
        <Text className="text-white text-lg">
          正解数：{numOfCorrectAnswers} / {numOfQuestions}
        </Text>
      </View>
    </View>
  );
};
