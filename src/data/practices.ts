import { PracticeSummary } from "@/types/practice";

export const practices: PracticeSummary[] = [
  {
    id: "1",
    name: "Smile Dental Clinic",
    city: "New York",
    country: "USA",
    newPatientsThisMonth: 42,
    appointmentRequests: 128,
    conversionRate: 23,
    monthlyTrend: [12, 18, 22, 30, 38, 42],
  },
  {
    id: "2",
    name: "BrightCare Dental",
    city: "London",
    country: "UK",
    newPatientsThisMonth: 18,
    appointmentRequests: 90,
    conversionRate: 8,
    monthlyTrend: [20, 17, 15, 14, 12, 18],
  },
  {
    id: "3",
    name: "Pearl Smiles",
    city: "Sydney",
    country: "Australia",
    newPatientsThisMonth: 30,
    appointmentRequests: 110,
    conversionRate: 15,
    monthlyTrend: [18, 20, 22, 24, 28, 30],
  },
];
