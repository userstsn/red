// trainDemandModel.ts
import * as brain from 'brain.js';
import { bloodDemandData,BloodDemand } from './donors';
import * as fs from 'fs';

const net = new brain.NeuralNetwork();

// Generate training data
const trainData = bloodDemandData.map(demand => ({
  input: {
    date: new Date(demand.date).getTime() / 10000000000, // Normalize date
    bloodType: bloodTypeToNumber(demand.bloodType),      // Convert blood type to a number
  },
  output: { demand: demand.demand / 100 }               // Normalize demand
}));

function bloodTypeToNumber(bloodType: string): number {
  const types = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  return types.indexOf(bloodType) / types.length;
}

// Train the network
net.train(trainData, {
  iterations: 2000,
  log: true,
  logPeriod: 100
});

// Save the trained model
const model = net.toJSON();
fs.writeFileSync('bloodDemandModel.json', JSON.stringify(model));

console.log('Model trained and saved.');
