'use server';

import { sql } from '@vercel/postgres';

export async function verifyEmail(email: string) {
    // Contact database of submissions.
    const { rows } = await sql`SELECT user_id FROM users WHERE email = ${email}`;
    return rows.length == 0;
}
