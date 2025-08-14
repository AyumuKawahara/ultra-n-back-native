import { drizzle } from "drizzle-orm/expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { Link } from "expo-router";
import { openDatabaseSync } from "expo-sqlite";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import migrations from "../../drizzle/migrations";

const DATABASE_NAME = "ultra-n-back.db";

const databaseForStudio = openDatabaseSync(DATABASE_NAME);
const expo = openDatabaseSync(DATABASE_NAME, {
  enableChangeListener: true,
});
export const db = drizzle(expo);

export const RootPage = () => {
  useDrizzleStudio(databaseForStudio);
  const { success, error } = useMigrations(db, migrations);

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
          <TouchableOpacity className="border border-vividBlue rounded-xl py-7 bg-backgroundLight">
            <Text className="font-bold text-2xl text-center text-vividBlue">
              プレイする
            </Text>
          </TouchableOpacity>
        </Link>
        <Link href="/how-to-play" asChild>
          <TouchableOpacity className="border border-vividBlue rounded-xl py-7 bg-backgroundLight">
            <Text className="font-bold text-2xl text-center text-vividBlue">
              あそびかた
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
};
