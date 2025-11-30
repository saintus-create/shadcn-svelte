'use client';

import { OrbitalText } from '../components/orbital-text';

export function OrbitalUse() {
  return (
    <div>
      <OrbitalText key={0} text="SPECTRUM UI" radius={18} duration={2000} decay={0.9} />
    </div>
  );
}
