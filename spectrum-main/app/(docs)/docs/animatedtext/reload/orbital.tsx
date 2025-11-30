'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';
import { OrbitalText } from '../components/orbital-text';

export function ReloadableOrbital() {
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
      <OrbitalText key={reloadKey} text="Hover Me" radius={18} duration={2000} decay={0.9} />
    </>
  );
}
