import { sql } from '@vercel/postgres';
import { verifyToken } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const payload = verifyToken(token);
    if (!payload) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    try {
        const { rows } = await sql`
            SELECT 
                o.order_id, 
                o.created_at, 
                u.name AS user_name, 
                u.email AS user_email, 
                u.user_id as user_id,
                o.paypal_order_id
            FROM orders o
            JOIN users u ON o.user_id = u.user_id
            WHERE o.paypal_order_id != 'NOT_PAYPAL'
            ORDER BY o.created_at DESC;
        `;
        return new Response(JSON.stringify(rows), { status: 200 });
    } catch (error) {
        console.error('Error fetching orders:', error);
        return new Response(JSON.stringify({ error: 'Error fetching orders' }), { status: 500 });
    }
}
