"use client";

import { Card } from "@/components/ui/card";
import { VoteButton } from "@/components/ui/vote-button";
import { useState } from "react";

interface WorkspaceProps {
  workspace: {
    name: string;
    image: string;
    price: string;
    speed: number;
    upvotes: number;
    downvotes: number;
  };
}

export function WorkspaceCard({ workspace }: WorkspaceProps) {
  const [upvotes, setUpvotes] = useState(workspace.upvotes);
  const [downvotes, setDownvotes] = useState(workspace.downvotes);
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);

  const handleVote = (type: 'up' | 'down') => {
    if (userVote === type) {
      setUserVote(null);
      if (type === 'up') {
        setUpvotes(workspace.upvotes);
      } else {
        setDownvotes(workspace.downvotes);
      }
    } else {
      if (userVote) {
        if (userVote === 'up') {
          setUpvotes(workspace.upvotes);
        } else {
          setDownvotes(workspace.downvotes);
        }
      }
      setUserVote(type);
      if (type === 'up') {
        setUpvotes(workspace.upvotes + 1);
      } else {
        setDownvotes(workspace.downvotes + 1);
      }
    }
  };

  return (
    <Card className="p-4">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">{workspace.name}</h3>
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