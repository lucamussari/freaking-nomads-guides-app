"use client";

import { Button } from "@/components/ui/button";
import { WorkspaceCard } from "./WorkspaceCard";
import { WorkSpace } from "@/lib/types";
import { useState } from "react";

interface WorkspaceTabsProps {
  coworkingSpaces: WorkSpace[];
  cafes: WorkSpace[];
}

export function WorkspaceTabs({ coworkingSpaces, cafes }: WorkspaceTabsProps) {
  const [activeTab, setActiveTab] = useState<'coworking' | 'cafes'>('coworking');

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <div className="inline-flex rounded-lg border p-1">
          <Button
            variant={activeTab === 'coworking' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('coworking')}
          >
            Coworking Spaces
          </Button>
          <Button
            variant={activeTab === 'cafes' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('cafes')}
          >
            Work-Friendly Cafes
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {activeTab === 'coworking' && (
          coworkingSpaces.map((space) => (
            <WorkspaceCard key={space.name} workspace={space} />
          ))
        )}
        {activeTab === 'cafes' && (
          cafes.map((cafe) => (
            <WorkspaceCard key={cafe.name} workspace={cafe} />
          ))
        )}
      </div>
    </div>
  );
}