'use client';
import { useEffect, useId, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type NormalizedCountry = { value: string; label: string; flag: string };

type CountrySelectProps = Omit<React.ComponentProps<typeof Select>, 'onValueChange' | 'value'> & {
  label?: string;
  onChange?: (label: string) => void;
};

export default function Countryinput({ label, onChange, ...rest }: CountrySelectProps) {
  const id = useId();
  const [countries, setCountries] = useState<NormalizedCountry[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try {
        setError(null);
        const url = query ? `/api/countries?q=${encodeURIComponent(query)}` : '/api/countries';
        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to load countries');
        const json = await res.json();
        if (isMounted) setCountries(json.countries as NormalizedCountry[]);
      } catch (e: any) {
        if (isMounted) setError(e?.message || 'Unable to load countries');
      }
    };
    const t = setTimeout(load, 200);
    return () => {
      isMounted = false;
      clearTimeout(t);
    };
  }, [query]);
  return (
    <div className="*:not-first:mt-2">
      <Select value={label} onValueChange={onChange} {...rest}>
        <SelectTrigger
          id={id}
          className="[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0 [&>span_svg]:text-muted-foreground/80"
        >
          <SelectValue placeholder="Select country" />
        </SelectTrigger>
        <SelectContent className="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0 [&_*[role=option]>span>svg]:text-muted-foreground/80">
          {countries &&
            countries.map((item) => (
              <SelectItem key={item.label} value={item.label}>
                <span className="text-lg leading-none">{item.flag}</span>{' '}
                <span className="truncate">{item.label}</span>
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </div>
  );
}
