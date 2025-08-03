import { Text, View } from "react-native";
import { SelectNumOfQuestions } from "./_components/select-num-of-questions";

export const SetupPage = () => {
  return (
    <View>
      <View>
        <Text>問題数</Text>
        <SelectNumOfQuestions />
      </View>
      <View>
        <Text>N</Text>
      </View>
      <View>
        <Text>モード</Text>
      </View>
    </View>
  );
};
