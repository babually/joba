import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const candidates = pgTable('candidates', {
    id: serial('id').primaryKey(),
    fullName: text('full_name'),
    email: text('email'),
    phone: varchar('phone', { length: 256 }),
});