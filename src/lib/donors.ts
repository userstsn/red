// src/donors.ts
export interface Donor {
    name: string;
    bloodGroup: string;
    location: {
      lat: number;
      lng: number;
    };
    available: boolean;
  }
  
  export const donors: Donor[] = [
    { name: "John Doe", bloodGroup: "A+", location: { lat: 37.7749, lng: -122.4194 }, available: true },
    { name: "Jane Smith", bloodGroup: "B+", location: { lat: 34.0522, lng: -118.2437 }, available: true },
  
  ];


  export interface BloodDemand {
    date: string;       // Date in YYYY-MM-DD format
    bloodType: string;  // Blood type (e.g., 'A+', 'O-', etc.)
    demand: number;     // Number of units demanded
  }
  
  export const bloodDemandData: BloodDemand[] = [
    // O Positive (35% prevalence)
    { date: '2023-01-01', bloodType: 'O+', demand: 8 },
    { date: '2023-01-02', bloodType: 'O+', demand: 6 },
    { date: '2023-01-03', bloodType: 'O+', demand: 0 },
    { date: '2023-01-04', bloodType: 'O+', demand: 0 },
    { date: '2023-01-05', bloodType: 'O+', demand: 51 },
    { date: '2023-01-06', bloodType: 'O+', demand: 2 },
    { date: '2023-01-07', bloodType: 'O+', demand: 5 },
    { date: '2023-01-08', bloodType: 'O+', demand: 8 },
    { date: '2023-01-09', bloodType: 'O+', demand: 0 },
    { date: '2023-01-10', bloodType: 'O+', demand: 7 },
  
    // O Negative (13% prevalence)
    { date: '2023-01-01', bloodType: 'O-', demand: 28 },
    { date: '2023-01-02', bloodType: 'O-', demand: 30 },
    { date: '2023-01-03', bloodType: 'O-', demand: 27 },
    { date: '2023-01-04', bloodType: 'O-', demand: 32 },
    { date: '2023-01-05', bloodType: 'O-', demand: 35 },
    { date: '2023-01-06', bloodType: 'O-', demand: 38 },
    { date: '2023-01-07', bloodType: 'O-', demand: 36 },
    { date: '2023-01-08', bloodType: 'O-', demand: 40 },
    { date: '2023-01-09', bloodType: 'O-', demand: 39 },
    { date: '2023-01-10', bloodType: 'O-', demand: 42 },
  
    // A Positive (30% prevalence)
    { date: '2023-01-01', bloodType: 'A+', demand: 44 },
    { date: '2023-01-02', bloodType: 'A+', demand: 41 },
    { date: '2023-01-03', bloodType: 'A+', demand: 48 },
    { date: '2023-01-04', bloodType: 'A+', demand: 46 },
    { date: '2023-01-05', bloodType: 'A+', demand: 50 },
    { date: '2023-01-06', bloodType: 'A+', demand: 53 },
    { date: '2023-01-07', bloodType: 'A+', demand: 51 },
    { date: '2023-01-08', bloodType: 'A+', demand: 52 },
    { date: '2023-01-09', bloodType: 'A+', demand: 55 },
    { date: '2023-01-10', bloodType: 'A+', demand: 58 },
  
    // A Negative (8% prevalence)
    { date: '2023-01-01', bloodType: 'A-', demand: 20 },
    { date: '2023-01-02', bloodType: 'A-', demand: 19 },
    { date: '2023-01-03', bloodType: 'A-', demand: 22 },
    { date: '2023-01-04', bloodType: 'A-', demand: 21 },
    { date: '2023-01-05', bloodType: 'A-', demand: 24 },
    { date: '2023-01-06', bloodType: 'A-', demand: 23 },
    { date: '2023-01-07', bloodType: 'A-', demand: 25 },
    { date: '2023-01-08', bloodType: 'A-', demand: 27 },
    { date: '2023-01-09', bloodType: 'A-', demand: 26 },
    { date: '2023-01-10', bloodType: 'A-', demand: 28 },
  
    // B Positive (8% prevalence)
    { date: '2023-01-01', bloodType: 'B+', demand: 32 },
    { date: '2023-01-02', bloodType: 'B+', demand: 31 },
    { date: '2023-01-03', bloodType: 'B+', demand: 34 },
    { date: '2023-01-04', bloodType: 'B+', demand: 36 },
    { date: '2023-01-05', bloodType: 'B+', demand: 38 },
    { date: '2023-01-06', bloodType: 'B+', demand: 40 },
    { date: '2023-01-07', bloodType: 'B+', demand: 42 },
    { date: '2023-01-08', bloodType: 'B+', demand: 39 },
    { date: '2023-01-09', bloodType: 'B+', demand: 37 },
    { date: '2023-01-10', bloodType: 'B+', demand: 35 },
  
    // B Negative (2% prevalence)
    { date: '2023-01-01', bloodType: 'B-', demand: 20 },
    { date: '2023-01-02', bloodType: 'B-', demand: 19 },
    { date: '2023-01-03', bloodType: 'B-', demand: 18 },
    { date: '2023-01-04', bloodType: 'B-', demand: 17 },
    { date: '2023-01-05', bloodType: 'B-', demand: 16 },
    { date: '2023-01-06', bloodType: 'B-', demand: 15 },
    { date: '2023-01-07', bloodType: 'B-', demand: 14 },
    { date: '2023-01-08', bloodType: 'B-', demand: 13 },
    { date: '2023-01-09', bloodType: 'B-', demand: 12 },
    { date: '2023-01-10', bloodType: 'B-', demand: 11 },
  
    // AB Positive (2% prevalence)
    { date: '2023-01-01', bloodType: 'AB+', demand: 20 },
    { date: '2023-01-02', bloodType: 'AB+', demand: 19 },
    { date: '2023-01-03', bloodType: 'AB+', demand: 22 },
    { date: '2023-01-04', bloodType: 'AB+', demand: 21 },
    { date: '2023-01-05', bloodType: 'AB+', demand: 24 },
    { date: '2023-01-06', bloodType: 'AB+', demand: 23 },
    { date: '2023-01-07', bloodType: 'AB+', demand: 25 },
    { date: '2023-01-08', bloodType: 'AB+', demand: 27 },
    { date: '2023-01-09', bloodType: 'AB+', demand: 26 },
    { date: '2023-01-10', bloodType: 'AB+', demand: 28 },
  
    // AB Negative (1% prevalence)
    { date: '2023-01-01', bloodType: 'AB-', demand: 10 },
    { date: '2023-01-02', bloodType: 'AB-', demand: 9 },
    { date: '2023-01-03', bloodType: 'AB-', demand: 8 },
    { date: '2023-01-04', bloodType: 'AB-', demand: 7 },
    { date: '2023-01-05', bloodType: 'AB-', demand: 6 },
    { date: '2023-01-06', bloodType: 'AB-', demand: 5 },
    { date: '2023-01-07', bloodType: 'AB-', demand: 4 },
    { date: '2023-01-08', bloodType: 'AB-', demand: 3 },
    { date: '2023-01-09', bloodType: 'AB-', demand: 2 },
    { date: '2023-01-10', bloodType: 'AB-', demand: 1 },
  ]
  