import { useRouter } from "expo-router";
import { Pressable, Text } from "react-native";

type Props = {
  numOfQuestions: number;
  n: number;
  selectedModes: string[];
};

export const ButtonReplay = ({ numOfQuestions, n, selectedModes }: Props) => {
  const router = useRouter();

  const handleReplay = () => {
    router.replace({
      pathname: "/play",
      params: {
        numOfQuestions: Number(numOfQuestions),
        n: Number(n),
        selectedModes,
      },
    });
  };

  return (
    <Pressable
      onPress={handleReplay}
      style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.98 : 1 }] }]}
      className="rounded-2xl bg-vividBlue items-center justify-center py-6"
    >
      <Text className="text-white text-xl font-bold">同じ設定で再プレイ</Text>
    </Pressable>
  );
};
