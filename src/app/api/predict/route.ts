import { NextRequest, NextResponse } from 'next/server';
import * as brain from 'brain.js';
import { bloodDemandData } from '@/lib/donors';

// Function to convert blood type to number
function bloodTypeToNumber(bloodType: string): number|null {
  const types = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const index = types.indexOf(bloodType);
  return index >= 0 ? index / types.length : null;
}

// Validate the blood type
function isValidBloodType(bloodType: string): boolean {
  const types = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  return types.includes(bloodType);
}

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming JSON body
    const { bloodType, date } = await req.json();

    // Validate inputs
    if (!bloodType || !date) {
      return NextResponse.json({ message: 'Blood type and date are required' }, { status: 400 });
    }

    if (!isValidBloodType(bloodType)) {
      return NextResponse.json({ message: 'Invalid blood type' }, { status: 400 });
    }

    // Create neural network
    const net = new brain.NeuralNetwork({
      hiddenLayers: [10, 10] // Experiment with different architectures
    });

    // Normalize demand data
    const maxDemands:any = {};
    bloodDemandData.forEach(demand => {
      if (!(demand.bloodType in maxDemands)) {
        maxDemands[demand.bloodType] = demand.demand;
      } else if (demand.demand > maxDemands[demand.bloodType]) {
        maxDemands[demand.bloodType] = demand.demand;
      }
    });

    // Generate training data
    const trainData = bloodDemandData.map(demand => ({
      input: {
        date: new Date(demand.date).getTime() / 10000000000, // Normalize date
        bloodType: bloodTypeToNumber(demand.bloodType),      // Convert blood type to a number
      },
      output: { demand: demand.demand / maxDemands[demand.bloodType] } // Normalize demand
    }));

    // Train the network
    net.train(trainData, {
      iterations: 5000,
      log: true,
      logPeriod: 100,
      learningRate: 0.01
    });

    // Normalize input data
    const inputDate = new Date(date).getTime() / 10000000000;
    const inputBloodType = bloodTypeToNumber(bloodType);

    // Make a prediction
    const prediction:any = net.run({
      date: inputDate,
      bloodType: inputBloodType
    });

    // Denormalize demand
    const predictedDemand = prediction.demand * maxDemands[bloodType];

    return NextResponse.json({ message: 'Prediction successful', predictedDemand }, { status: 200 });
  } catch (error) {
    console.error('Prediction error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
