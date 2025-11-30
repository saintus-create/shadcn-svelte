"use client"; // Error components must be Client Components

import { NotFound } from "@/components/ui/ghost-404-page";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
  }, [error]);

  return (
    <>
      <div className="min-h-screen w-full bg-white">
        <NotFound />
      </div>
    </>
  );
}
