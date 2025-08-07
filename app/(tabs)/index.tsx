import { RootPage } from "@/features/root";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";

const expo = openDatabaseSync("ultra-n-back.db", {
  enableChangeListener: true,
});
export const db = drizzle(expo);

export default RootPage;
