import { NextResponse } from 'next/server';
import { comparePassword, generateToken, hashPassword } from '@/lib/utils/auth';

const users = async function() {
    let password = await hashPassword(process.env.ADMIN_PASSWORD ?? '');
    return [
        { username: 'admin', password: password } // Replace with your credentials
    ];
}

export async function POST(req: Request) {
    try {
        const { username, password } = await req.json();
        let user: any = await users();
        user = user.find((user: { username: any; }) => user.username === username);
        console.log(password, user.password);
        if (user && await comparePassword(password, user.password)) {
            const token = generateToken({ username: user.username });
            return NextResponse.json({ token });
        }
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
