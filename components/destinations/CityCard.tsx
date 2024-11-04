"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { VoteButton } from "@/components/ui/vote-button";
import Image from "next/image";
import { Wifi, DollarSign, ThermometerSun, Flame, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface CityCardProps {
  id: string;
  city: string;
  country: string;
  image: string;
  internetSpeed: number;
  temperature: number;
  cost: number;
  upvotes: number;
  downvotes: number;
  trending: boolean;
  popular: boolean;
}

export function CityCard({
  id,
  city,
  country,
  image,
  internetSpeed,
  temperature,
  cost,
  upvotes: initialUpvotes,
  downvotes: initialDownvotes,
  trending,
  popular,
}: CityCardProps) {
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [downvotes, setDownvotes] = useState(initialDownvotes);
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);

  const handleVote = (type: 'up' | 'down') => {
    if (type === 'up') {
      if (userVote === 'up') {
        setUpvotes(initialUpvotes);
        setUserVote(null);
      } else {
        setUpvotes(initialUpvotes + 1);
        setUserVote('up');
      }
    } else {
      if (userVote === 'down') {
        setDownvotes(initialDownvotes);
        setUserVote(null);
      } else {
        setDownvotes(initialDownvotes + 1);
        setUserVote('down');
      }
    }
  };

  const tempF = (temperature * 9/5) + 32;

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="relative">
        <div className="absolute top-4 right-4 z-10">
          <VoteButton
            upvotes={upvotes}
            downvotes={downvotes}
            onVote={handleVote}
            userVote={userVote}
            size="sm"
          />
        </div>
        {(trending || popular) && (
          <div className="absolute top-4 left-4 z-10 flex gap-2">
            {trending && (
              <Badge variant="trending">
                <Flame className="h-3 w-3" />
                Trending
              </Badge>
            )}
            {popular && (
              <Badge variant="popular">
                <Star className="h-3 w-3" />
                Popular
              </Badge>
            )}
          </div>
        )}
        <Link href={`/digital-nomad-guide/${id}`}>
          <div className="relative h-48">
            <Image
              src={image}
              alt={`${city}, ${country}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-xl">{city}</h3>
              <p className="text-sm text-gray-200">{country}</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Wifi className="h-4 w-4 text-pink-500" />
            <span>{internetSpeed} Mbps</span>
          </div>
          <div className="flex items-center gap-2">
            <ThermometerSun className="h-4 w-4 text-pink-500" />
            <span>{temperature}°C / {tempF.toFixed(1)}°F</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-pink-500" />
            <span>Cost of Living</span>
          </div>
          <span className="font-semibold">${cost}/mo</span>
        </div>
      </div>
    </Card>
  );
}