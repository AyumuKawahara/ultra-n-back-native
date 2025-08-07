import { integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const playRecords = sqliteTable("play_records", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  numOfQuestions: integer("num_of_questions").notNull(),
  n: integer("n").notNull(),
  numOfCorrectAnswers: integer("num_of_correct_answers").notNull(),
  isActiveColor: integer("is_active_color", { mode: "boolean" }).notNull(),
  isActiveShape: integer("is_active_shape", { mode: "boolean" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});
