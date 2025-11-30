'use client';

import React, { useState } from 'react';
import { HologramText } from '../components/hologram-text';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

export function ReloadableHologram() {
  const [reloadKey, setReloadKey] = useState(0);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-20 right-4 z-10"
        onClick={() => setReloadKey((prev) => prev + 1)}
      >
        <RotateCcw />
      </Button>
      <HologramText key={reloadKey} text="SPECTRUM UI" scanDuration={1800} chromaJitter={0.8} />
    </>
  );
}
