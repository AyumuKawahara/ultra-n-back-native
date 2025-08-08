import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { settingsLinks } from "./_helpers/settings-links";

export const OthersPage = () => {
  return (
    <SafeAreaView className="bg-background h-full px-4 pt-6 gap-y-8">
      <Text className="text-white text-3xl font-bold">その他・設定</Text>
      <View className="gap-y-5">
        {settingsLinks.map((link) => (
          <Link key={link.title} href={link.href} asChild>
            <TouchableOpacity className="bg-backgroundLight rounded-lg py-6 border border-vividBlue justify-center items-center">
              <Text className="text-vividBlue text-xl font-bold">
                {link.title}
              </Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </SafeAreaView>
  );
};
