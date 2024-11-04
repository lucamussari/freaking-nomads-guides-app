"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { City } from "@/lib/types";
import { WorkspaceTabs } from "./WorkspaceTabs";
import { ColivingCard } from "./ColivingCard";
import { ExpensesCard } from "./ExpensesCard";
import { VoteButton } from "@/components/ui/vote-button";
import { WeatherChart } from "./WeatherChart";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Image from "next/image";

interface CityDetailsProps {
  city: City;
}

export function CityDetails({ city }: CityDetailsProps) {
  const [upvotes, setUpvotes] = useState(city.upvotes);
  const [downvotes, setDownvotes] = useState(city.downvotes);
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);

  const handleVote = (type: 'up' | 'down') => {
    if (type === 'up') {
      if (userVote === 'up') {
        setUpvotes(city.upvotes);
        setUserVote(null);
      } else {
        setUpvotes(city.upvotes + 1);
        setUserVote('up');
      }
    } else {
      if (userVote === 'down') {
        setDownvotes(city.downvotes);
        setUserVote(null);
      } else {
        setDownvotes(city.downvotes + 1);
        setUserVote('down');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/destinations">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
              </Link>
              <Breadcrumb
                items={[
                  { label: "Destinations", href: "/destinations" },
                  { label: city.city },
                ]}
              />
            </div>
            <VoteButton
              upvotes={upvotes}
              downvotes={downvotes}
              onVote={handleVote}
              userVote={userVote}
            />
          </div>
        </div>
      </div>

      <div className="relative h-[300px] w-full overflow-hidden">
        <Image
          src={city.image}
          alt={`${city.city}, ${city.country}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-white mb-2">{city.city}</h1>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="h-4 w-4" />
              <span>{city.country}</span>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid gap-6">
          <ExpensesCard expenses={city.expenses} />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <Card className="overflow-hidden">
                <div className="border-b px-6 py-4">
                  <h2 className="text-xl font-semibold">Where to Work From</h2>
                </div>
                <div className="p-6">
                  <WorkspaceTabs
                    coworkingSpaces={city.coworkingSpaces}
                    cafes={city.cafes}
                  />
                </div>
              </Card>
            </div>

            <Card className="overflow-hidden">
              <div className="border-b px-6 py-4">
                <h2 className="text-lg font-semibold">Best Time to Visit</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Peak Season</h3>
                    <p className="text-sm text-gray-600">November - February</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Low Season</h3>
                    <p className="text-sm text-gray-600">June - August</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Best for Digital Nomads</h3>
                    <p className="text-sm text-gray-600">
                      March-May when the weather is pleasant and prices are moderate.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="border-b px-6 py-4">
                <h2 className="text-lg font-semibold">Weather Year Round</h2>
              </div>
              <div className="p-6">
                <WeatherChart />
              </div>
            </Card>
          </div>

          <Card className="overflow-hidden">
            <div className="border-b px-6 py-4">
              <h2 className="text-xl font-semibold">Coliving Spaces</h2>
            </div>
            <div className="p-6">
              <div className="grid gap-4">
                {city.coliving.map((space) => (
                  <ColivingCard key={space.name} coliving={space} />
                ))}
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}