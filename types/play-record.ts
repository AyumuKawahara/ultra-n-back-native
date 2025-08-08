import type { playRecords } from "@/db/schema";

export type PlayRecord = typeof playRecords.$inferSelect;
