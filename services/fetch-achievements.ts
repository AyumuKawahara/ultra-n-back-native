import { achievements } from "@/db/schema";
import { db } from "@/features/root";
import { asc } from "drizzle-orm";

export const fetchAchievements = async () => {
  return await db.select().from(achievements).orderBy(asc(achievements.n));
};
