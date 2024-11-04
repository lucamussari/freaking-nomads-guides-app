import { CityCard } from "@/components/destinations/CityCard";
import { FilterBar } from "@/components/destinations/FilterBar";
import { CITIES_DATA } from "@/lib/cities-data";
import { City } from "@/lib/types";
import { Globe2 } from "lucide-react";

interface DestinationsPageProps {
  cities?: City[];
  title?: string;
}

export function DestinationsPage({ cities = CITIES_DATA, title }: DestinationsPageProps) {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="relative bg-[#F73A96] text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center gap-3">
            <Globe2 className="h-8 w-8" />
            <h1 className="text-4xl font-bold">
              {title || "Digital Nomad Destinations"}
            </h1>
          </div>
        </div>
      </div>

      <FilterBar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <CityCard key={city.id} {...city} />
          ))}
        </div>
      </main>
    </div>
  );
}