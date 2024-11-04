"use client";

import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown } from "lucide-react";

interface VoteButtonProps {
  upvotes: number;
  downvotes: number;
  onVote: (type: 'up' | 'down') => void;
  userVote: 'up' | 'down' | null;
  size?: 'sm' | 'default';
}

export function VoteButton({
  upvotes,
  downvotes,
  onVote,
  userVote,
  size = 'default'
}: VoteButtonProps) {
  return (
    <div className={cn(
      "flex items-center gap-1 bg-white rounded-lg border shadow-sm",
      size === 'sm' ? 'text-sm p-1' : 'p-2'
    )}>
      <button
        onClick={() => onVote('up')}
        className={cn(
          "flex items-center gap-1 px-2 py-1 rounded hover:bg-black hover:text-white transition-colors",
          userVote === 'up' && "text-green-500"
        )}
      >
        <ChevronUp className={cn(
          "w-4 h-4",
          userVote === 'up' ? "fill-green-500" : "fill-none"
        )} />
        <span>{upvotes}</span>
      </button>
      <div className="w-px h-4 bg-gray-200" />
      <button
        onClick={() => onVote('down')}
        className={cn(
          "flex items-center gap-1 px-2 py-1 rounded hover:bg-black hover:text-white transition-colors",
          userVote === 'down' && "text-red-500"
        )}
      >
        <ChevronDown className={cn(
          "w-4 h-4",
          userVote === 'down' ? "fill-red-500" : "fill-none"
        )} />
        <span>{downvotes}</span>
      </button>
    </div>
  );
}