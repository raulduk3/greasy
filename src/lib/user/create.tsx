'use server';

import { sql } from '@vercel/postgres';

export async function userCreate(formData: { email: string, name: string }) {
    const { email, name } = formData;

    try {
        await sql`
            INSERT INTO users (email, name)
            VALUES (${email}, ${name});
        `;
        return true;
    } catch (error) {
        console.error('Error inserting user:', error);
        return false;
    }
}
