'use server';

import { sql } from '@vercel/postgres';

export async function verifyNewUser(email: string) {
    const { rows } = await sql`SELECT user_id FROM users WHERE email = ${email}`;
    return rows.length == 0;
}
