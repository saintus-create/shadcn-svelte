'use client';

import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';
import { InkMorphText } from '../components/ink-morph';

export function ReloadableInk() {
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
      <InkMorphText
        key={reloadKey}
        text="SPECTRUM UI"
        intensityFrom={0.28}
        intensityTo={0.002}
        settleMs={2000}
        colorStart="#38bdf8"
        colorEnd="#0ea5e9"
      />
    </>
  );
}
