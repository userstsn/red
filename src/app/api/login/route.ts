// pages/api/login.ts

import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { executeQuery } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming JSON body
    const { email, password } = await req.json();

    // Validate inputs
    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    // Retrieve user with the provided email
    const result:any = await executeQuery('SELECT * FROM users WHERE email = ?', [email]);

    if (result.length === 0) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    const user = result[0];

    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    // If needed, create and return a JWT token here

    return NextResponse.json({ message: 'Login successful',data: user }, { status: 200 });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
