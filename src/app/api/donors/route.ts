// pages/api/donors.ts

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { executeQuery } from '@/lib/db';

// Define the schema for the donor data
const donorSchema = z.object({
  username: z.string().min(1),
  email: z.string().email(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  dateOfBirth: z.string().min(1),
  bloodType: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  phoneNumber: z.string().min(1),
  address: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  postalCode: z.string().min(1),
  country: z.string().min(1),
  latitude: z.string().optional(),
  longitude: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming JSON body
    const data = await req.json();

    // Validate the input data against the schema
    const result = donorSchema.safeParse(data);

    if (!result.success) {
      return NextResponse.json({ message: 'Invalid input', errors: result.error.errors }, { status: 400 });
    }

    const {
      username,
      email,
      firstName,
      lastName,
      dateOfBirth,
      bloodType,
      phoneNumber,
      address,
      city,
      state,
      postalCode,
      country,
      latitude,
      longitude,
    } = result.data;

    // Check if the email already exists
    const existingDonors:any = await executeQuery('SELECT * FROM donors WHERE email = ?', [email]);

    if (existingDonors.length > 0) {
      return NextResponse.json({ message: 'Email already exists' }, { status: 409 });
    }

    // Insert the new donor into the database
    const insertResult:any = await executeQuery(
      `INSERT INTO donors (username, email, firstName, lastName, dateOfBirth, bloodType, phoneNumber, address, city, state, postalCode, country, latitude, longitude, created_at) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
      [username, email, firstName, lastName, dateOfBirth, bloodType, phoneNumber, address, city, state, postalCode, country, latitude, longitude]
    );

    if (insertResult.affectedRows === 1) {
      return NextResponse.json({ message: 'Donor created successfully', data: insertResult }, { status: 201 });
    } else {
      throw new Error('Failed to create donor');
    }
  } catch (error) {
    console.error('Donor signup error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
