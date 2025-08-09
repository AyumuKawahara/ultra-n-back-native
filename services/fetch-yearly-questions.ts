import { playRecords } from "@/db/schema";
import { db } from "@/features/root";
import type { AggregatedQuestionsRow } from "@/types/aggregated-questions-row";
import { sql } from "drizzle-orm";
import { datetimeLocalFromUnix } from "./_helpers/datetime-local-from-unix";

export const fetchYearlyQuestions = async (): Promise<
  AggregatedQuestionsRow[]
> => {
  const labelExpr = sql<string>`strftime('%Y', ${datetimeLocalFromUnix})`;
  const rows = await db
    .select({
      label: labelExpr.as("label"),
      total: sql<number>`sum(${playRecords.numOfQuestions})`.as("total"),
    })
    .from(playRecords)
    .groupBy(labelExpr)
    .orderBy(sql`label`);

  return rows as AggregatedQuestionsRow[];
};
