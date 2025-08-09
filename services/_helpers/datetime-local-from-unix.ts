import { playRecords } from "@/db/schema";
import { sql } from "drizzle-orm";

export const datetimeLocalFromUnix = sql`datetime(${playRecords.createdAt}, 'unixepoch', 'localtime')`;
