// src/app/api/validateToken/route.tsx
import { verifyToken } from '@/lib/utils/auth';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { token } = await req.json();
        const payload = verifyToken(token);
        if (payload) {
            return NextResponse.json({ valid: true });
        } else {
            return NextResponse.json({ valid: false }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ valid: false }, { status: 500 });
    }
}