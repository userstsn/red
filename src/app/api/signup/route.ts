// pages/api/signup.ts

import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { executeQuery } from '@/lib/db';

const saltRounds = 10;

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming JSON body
    const { type, email, password } = await req.json();

    // Validate inputs
    if (!type || !email || !password) {
      return NextResponse.json({ message: 'type, email, and password are required' }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Check if the email already exists
    const existingUsers:any = await executeQuery('SELECT * FROM users WHERE email = ?', [email]);

    if (existingUsers.length > 0) {
      return NextResponse.json({ message: 'Email already exists' }, { status: 409 });
    }

    // Insert the new user into the database
    const insertResult:any = await executeQuery(
      'INSERT INTO users (type, email, password, created_at) VALUES (?, ?, ?, NOW())',
      [type, email, hashedPassword]
    );

    if (insertResult.affectedRows === 1) {
      return NextResponse.json({ message: 'User created successfully',data : insertResult }, { status: 201 });
    } else {
      throw new Error('Failed to create user');
    }
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
