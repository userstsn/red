// interfaces.ts

export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    created_at: Date;
  }
  

  export interface Donor {
    id: number;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    bloodType: string;  // e.g., 'A+', 'B-', etc.
    phoneNumber: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    latitude: number;  // Latitude for geolocation
    longitude: number; // Longitude for geolocation
    created_at: Date;
    updated_at: Date;
    lastDonationDate: Date; // The last date the donor donated blood
    status: string;
  }
  