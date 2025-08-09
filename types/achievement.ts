import type { achievements } from "@/db/schema";

export type Achievement = typeof achievements.$inferSelect;
