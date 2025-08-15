import { BannerAdCustom } from "@/components/banner-ad-custom";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { settingsLinks } from "./_helpers/settings-links";

export const OthersPage = () => {
  return (
    <SafeAreaView className="bg-background h-full justify-between">
      <View className="flex-1 px-4 pt-6 pb-10 gap-y-6">
        <Text className="text-white text-3xl font-bold">その他・設定</Text>
        <View className="gap-y-4">
          {settingsLinks.map((link) => (
            <Link key={link.title} href={link.href} asChild>
              <Pressable
                style={({ pressed }) => [
                  { transform: [{ scale: pressed ? 0.98 : 1 }] },
                ]}
                className="bg-backgroundLight rounded-xl px-4 py-6 border border-white/10 flex-row items-center justify-between"
              >
                <View className="flex-row items-center gap-x-3">
                  <Ionicons name={link.iconName} size={20} color="#1E90FF" />
                  <Text className="text-white text-lg font-medium">
                    {link.title}
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#1E90FF" />
              </Pressable>
            </Link>
          ))}
        </View>
      </View>

      <BannerAdCustom />
    </SafeAreaView>
  );
};
