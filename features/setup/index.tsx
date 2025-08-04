import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { Button } from "tamagui";
import { SelectMode } from "./_components/select-mode";
import { SelectN } from "./_components/select-n";
import { SelectNumOfQuestions } from "./_components/select-num-of-questions";

export const SetupPage = () => {
  const router = useRouter();

  return (
    <View>
      <View className="flex-row items-center">
        <Text>問題数</Text>
        <SelectNumOfQuestions />
      </View>
      <View className="flex-row items-center">
        <Text>N</Text>
        <SelectN />
      </View>
      <View>
        <Text>モード</Text>
        <SelectMode />
      </View>
      <Button onPress={() => router.push("/play")}>
        <Text>プレイ</Text>
      </Button>
    </View>
  );
};
