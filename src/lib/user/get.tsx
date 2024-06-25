'use server';

import { sql } from '@vercel/postgres';
import type { UserData } from './types';

export async function getUser(userData: UserData): Promise<UserData> {
    const { email, name } = userData;

    try {
        // Check if the user already exists
        let { rows } = await sql`SELECT user_id FROM users WHERE email = ${email}`;
        if (rows.length > 0) {
            // If user exists, return the existing user ID
            return {
                user_id: rows[0].user_id,
                ...userData,
            };
        }

        // Insert new user
        let insertResult = await sql`
            INSERT INTO users (email, name)
            VALUES (${email}, ${name})
            RETURNING user_id;
        `;

        return {
            user_id: insertResult.rows[0].user_id,
            ...userData,
        };
    } catch (error) {
        console.error('Error inserting user:', error);
        throw error;
    }
}
