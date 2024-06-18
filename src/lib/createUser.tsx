'use server';

import { sql } from '@vercel/postgres';

export async function createUser(formData: FormData[]) {
    // Contact database of submissions.
    console.log(formData);
    return true;
}
