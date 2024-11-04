"use client";

import { Card } from "@/components/ui/card";
import { Building2, Coffee, DollarSign, Dumbbell, Train } from "lucide-react";

interface ExpensesProps {
  expenses: {
    housing: {
      oneBedroom: number;
      twoBedroom: number;
    };
    food: {
      cheapMeal: number;
      midRangeMeal: number;
      coffee: number;
      water: number;
    };
    entertainment: {
      gym: number;
      cinema: number;
      beer: number;
      cocktail: number;
    };
    transport: {
      publicTransport: number;
      taxiPerKm: number;
    };
  };
}

export function ExpensesCard({ expenses }: ExpensesProps) {
  return (
    <Card className="overflow-hidden">
      <div className="border-b px-6 py-4">
        <h2 className="text-xl font-semibold">Monthly Expenses</h2>
      </div>
      <div className="p-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-3 flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Housing
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-8">
                <span className="text-sm whitespace-nowrap">1 Bedroom Apt</span>
                <span className="font-medium">${expenses.housing.oneBedroom}/mo</span>
              </div>
              <div className="flex items-center justify-between gap-8">
                <span className="text-sm whitespace-nowrap">2 Bedroom Apt</span>
                <span className="font-medium">${expenses.housing.twoBedroom}/mo</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-3 flex items-center gap-2">
              <Coffee className="h-4 w-4" />
              Food & Drinks
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-8">
                <span className="text-sm whitespace-nowrap">Budget Meal</span>
                <span className="font-medium">${expenses.food.cheapMeal}</span>
              </div>
              <div className="flex items-center justify-between gap-8">
                <span className="text-sm whitespace-nowrap">Mid-range Meal</span>
                <span className="font-medium">${expenses.food.midRangeMeal}</span>
              </div>
              <div className="flex items-center justify-between gap-8">
                <span className="text-sm whitespace-nowrap">Coffee</span>
                <span className="font-medium">${expenses.food.coffee}</span>
              </div>
              <div className="flex items-center justify-between gap-8">
                <span className="text-sm whitespace-nowrap">Water (0.33L)</span>
                <span className="font-medium">${expenses.food.water}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-3 flex items-center gap-2">
              <Dumbbell className="h-4 w-4" />
              Entertainment
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-8">
                <span className="text-sm whitespace-nowrap">Gym</span>
                <span className="font-medium">${expenses.entertainment.gym}/mo</span>
              </div>
              <div className="flex items-center justify-between gap-8">
                <span className="text-sm whitespace-nowrap">Cinema</span>
                <span className="font-medium">${expenses.entertainment.cinema}</span>
              </div>
              <div className="flex items-center justify-between gap-8">
                <span className="text-sm whitespace-nowrap">Beer (0.5L)</span>
                <span className="font-medium">${expenses.entertainment.beer}</span>
              </div>
              <div className="flex items-center justify-between gap-8">
                <span className="text-sm whitespace-nowrap">Cocktail</span>
                <span className="font-medium">${expenses.entertainment.cocktail}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-3 flex items-center gap-2">
              <Train className="h-4 w-4" />
              Transportation
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-8">
                <span className="text-sm whitespace-nowrap">Public Transport</span>
                <span className="font-medium">${expenses.transport.publicTransport}</span>
              </div>
              <div className="flex items-center justify-between gap-8">
                <span className="text-sm whitespace-nowrap">Taxi (per km)</span>
                <span className="font-medium">${expenses.transport.taxiPerKm}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}