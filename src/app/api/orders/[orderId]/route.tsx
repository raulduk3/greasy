import { sql } from '@vercel/postgres';
import { verifyToken } from '@/lib/utils/auth';

export const dynamic = 'force-dynamic';

export async function GET(req: Request, { params }: { params: { orderId: string }}) {
    try {
        let orderId = params.orderId;
        // Extract order ID from the request URL
        if (!params.orderId) {
            return new Response(JSON.stringify({ error: 'Order ID is required' }), { status: 400 });
        }

        // Fetch order and user details
        const query = `
            SELECT o.*, u.name AS user_name
            FROM orders o
            JOIN users u ON o.user_id = u.user_id
            WHERE o.paypal_order_id = $1
        `;
        const { rows } = await sql.query(query, [orderId]);

        if (rows.length === 0) {
            return new Response(JSON.stringify({ error: 'Order not found or you do not have access to this order' }), { status: 404 });
        }

        const orderDetails = {
            orderId: rows[0].order_id,
            user: {
                name: rows[0].user_name,
            },
        };

        return new Response(JSON.stringify(orderDetails), { status: 200 });
    } catch (error) {
        console.error('Error fetching order details:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
    }
}