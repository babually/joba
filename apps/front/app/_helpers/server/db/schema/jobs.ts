import { pgTable, serial, text, boolean } from "drizzle-orm/pg-core";

export const jobs = pgTable('jobs', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    description: text('description'),
    published: boolean('published'),
});