"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  containerSelector?: string;
}

export function TableOfContents({ containerSelector = "main" }: TableOfContentsProps) {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Generate TOC from headings
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const headings = container.querySelectorAll("h2[id], h3[id]");
    const items: TOCItem[] = Array.from(headings).map((heading) => ({
      id: heading.id,
      text: heading.textContent || "",
      level: parseInt(heading.tagName.substring(1)),
    }));

    setToc(items);

    // Set up intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -80% 0px",
        threshold: 0,
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [containerSelector]);

  if (toc.length === 0) return null;

  return (
    <nav className="sticky top-20 hidden max-h-[calc(100vh-8rem)] w-64 shrink-0 overflow-y-auto xl:block">
      <div className="space-y-2 pb-10">
        <h4 className="mb-4 text-sm font-semibold">On This Page</h4>
        <ul className="space-y-2 text-sm">
          {toc.map((item) => (
            <li
              key={item.id}
              className={cn(
                "transition-colors",
                item.level === 3 && "ml-4"
              )}
            >
              <a
                href={`#${item.id}`}
                className={cn(
                  "block py-1 text-muted-foreground hover:text-foreground",
                  activeId === item.id && "font-medium text-foreground"
                )}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

