import Link from 'next/link';
import { FomoButton } from './ui/moving-border';
import { ArrowRight } from 'lucide-react';

export function Fomo() {
  return (
    <Link
      href="https://vercel.com/oss?utm_source=ikiform"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <FomoButton
          borderRadius="1.75rem"
          className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-neutral-800 px-4"
        >
          <div className="flex items-center justify-center gap-2">
            Backed by
            <span className="flex items-center gap-2 justify-center">
              <svg
                height="13"
                width="13"
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                aria-label="Vercel logo"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 1L16 15H0L8 1Z"
                  fill="currentColor"
                ></path>
              </svg>
              Vercel OSS
            </span>
          </div>
          <ArrowRight className="h-4 w-4 ml-2" />
        </FomoButton>
      </div>
    </Link>
  );
}
