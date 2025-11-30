'use client';

import { HologramText } from '../components/hologram-text';

export function Hologram() {
  return (
    <div>
      <HologramText key={0} text="SPECTRUM UI" scanDuration={1800} chromaJitter={0.8} />
    </div>
  );
}
