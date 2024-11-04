"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CONTINENTS = [
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  // Add other continents
];

const COUNTRIES = [
  { value: "thailand", label: "Thailand" },
  { value: "indonesia", label: "Indonesia" },
  { value: "portugal", label: "Portugal" },
  // Add other countries
];

export function FilterBar() {
  const router = useRouter();
  const [costRange, setCostRange] = useState([500, 3000]);
  const [internetSpeed, setInternetSpeed] = useState([20]);
  const [temperature, setTemperature] = useState([20]);

  const handleContinentChange = (value: string) => {
    router.push(`/digital-nomad-guide/${value}`);
  };

  const handleCountryChange = (value: string) => {
    router.push(`/digital-nomad-guide/${value}`);
  };

  return (
    <div className="bg-white border-b sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search cities..."
                className="pl-10"
              />
            </div>
          </div>
          <Select onValueChange={handleContinentChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Continent" />
            </SelectTrigger>
            <SelectContent>
              {CONTINENTS.map((continent) => (
                <SelectItem key={continent.value} value={continent.value}>
                  {continent.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={handleCountryChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              {COUNTRIES.map((country) => (
                <SelectItem key={country.value} value={country.value}>
                  {country.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Filters</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Destinations</SheetTitle>
                <SheetDescription>
                  Adjust filters to find your perfect destination
                </SheetDescription>
              </SheetHeader>
              <div className="space-y-6 py-4">
                <div className="space-y-2">
                  <Label>Monthly Cost (USD)</Label>
                  <Slider
                    min={500}
                    max={5000}
                    step={100}
                    value={costRange}
                    onValueChange={setCostRange}
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>${costRange[0]}</span>
                    <span>${costRange[1]}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Minimum Internet Speed (Mbps)</Label>
                  <Slider
                    min={0}
                    max={100}
                    step={5}
                    value={internetSpeed}
                    onValueChange={setInternetSpeed}
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{internetSpeed}+ Mbps</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Average Temperature (°C)</Label>
                  <Slider
                    min={-10}
                    max={40}
                    step={1}
                    value={temperature}
                    onValueChange={setTemperature}
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{temperature}°C</span>
                  </div>
                </div>
                <Button className="w-full">Apply Filters</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}