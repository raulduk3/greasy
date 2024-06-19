'use server';

import { sql } from '@vercel/postgres';

export async function createUser(formData: any) {
    // Insert user data into database.
    console.log(formData);
    return true;
}
