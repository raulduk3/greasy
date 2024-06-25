'use server';

import { sql } from '@vercel/postgres';

export default async function createOrder(user_id: any, id: any) {
    const { rows: orderRows } = await sql`
        INSERT INTO orders (user_id, paypal_order_id)
        VALUES (${user_id}, ${id})
        RETURNING order_id;
    `;
    const orderId: number = orderRows[0].order_id;
    console.log('orderId:', orderId);
    return orderId;
}