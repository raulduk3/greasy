'use server';

import { sql } from '@vercel/postgres';

import type { UserData } from './types';

export async function userCreate(userData: UserData): Promise<UserData> {
    const { email, name } = userData;

    try {
        await sql`
            INSERT INTO users (email, name)
            VALUES (${email}, ${name});
        `;
        const {rows, fields} = await sql`SELECT user_id FROM users WHERE email = ${email}`;
        return {
            user_id: rows[0].user_id,
            ...userData,
        };
    } catch (error) {
        console.error('Error inserting user:', error);
        throw error;
    }
}
