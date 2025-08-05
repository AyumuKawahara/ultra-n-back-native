import { Link } from "expo-router";
import { Text, TouchableHighlight, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const RootPage = () => {
  return (
    <SafeAreaView className="bg-background h-full px-4 pt-14 pb-10 justify-between">
      <View className="gap-y-2">
        <Text className="text-white text-center text-7xl font-bold">Ultra</Text>
        <Text className="text-white text-center text-7xl font-bold">
          N Back
        </Text>
      </View>
      <View className="gap-y-4">
        <Link href="/setup" asChild>
          <TouchableHighlight className="border border-vividBlue rounded-xl py-7 bg-backgroundLight">
            <Text className="font-extrabold text-2xl text-center text-vividBlue">
              プレイする
            </Text>
          </TouchableHighlight>
        </Link>
        <Link href="/how-to-play" asChild>
          <TouchableHighlight className="border border-vividBlue rounded-xl py-7 bg-backgroundLight">
            <Text className="font-extrabold text-2xl text-center text-vividBlue">
              あそびかた
            </Text>
          </TouchableHighlight>
        </Link>
      </View>
    </SafeAreaView>
  );
};
