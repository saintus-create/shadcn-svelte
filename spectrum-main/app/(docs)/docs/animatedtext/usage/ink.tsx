'use client';

import { InkMorphText } from '../components/ink-morph';

export function InkMorphTextUse() {
  return (
    <div>
      <InkMorphText
        key={0}
        text="SPECTRUM UI"
        intensityFrom={0.28}
        intensityTo={0.002}
        settleMs={2000}
        colorStart="#38bdf8"
        colorEnd="#0ea5e9"
      />
    </div>
  );
}
