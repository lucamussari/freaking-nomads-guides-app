"use client";

import { Card } from "@/components/ui/card";
import { VoteButton } from "@/components/ui/vote-button";
import { useState } from "react";

interface ColivingProps {
  coliving: {
    name: string;
    image: string;
    price: string;
    amenities: string[];
    upvotes: number;
    downvotes: number;
  };
}

export function ColivingCard({ coliving }: ColivingProps) {
  const [upvotes, setUpvotes] = useState(coliving.upvotes);
  const [downvotes, setDownvotes] = useState(coliving.downvotes);
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);

  const handleVote = (type: 'up' | 'down') => {
    if (userVote === type) {
      setUserVote(null);
      if (type === 'up') {
        setUpvotes(coliving.upvotes);
      } else {
        setDownvotes(coliving.downvotes);
      }
    } else {
      if (userVote) {
        if (userVote === 'up') {
          setUpvotes(coliving.upvotes);
        } else {
          setDownvotes(coliving.downvotes);
        }
      }
      setUserVote(type);
      if (type === 'up') {
        setUpvotes(coliving.upvotes + 1);
      } else {
        setDownvotes(coliving.downvotes + 1);
      }
    }
  };

  return (
    <Card className="p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{coliving.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{coliving.price}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {coliving.amenities.map((amenity) => (
              <span
                key={amenity}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
        <VoteButton
          upvotes={upvotes}
          downvotes={downvotes}
          onVote={handleVote}
          userVote={userVote}
          size="sm"
        />
      </div>
    </Card>
  );
}