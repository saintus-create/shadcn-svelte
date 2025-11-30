'use client';

import { JSX, useLayoutEffect, useState } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
import { useTheme } from 'next-themes';
import type { BundledLanguage } from 'shiki/bundle/web';
import { codeToHast } from 'shiki/bundle/web';
import Copy from './copy';
import { Skeleton } from './ui/skeleton';
import { Icons } from './icon';

// ✅ All languages you want preloaded
const supportedLanguages: BundledLanguage[] = [
  'javascript',
  'typescript',
  'jsx',
  'tsx',
  'css',
  'html',
  'json',
  'bash',
  'python',
  'sql',
];

export async function highlight(code: string, lang: BundledLanguage, theme: string) {
  const hast = await codeToHast(code, {
    lang,
    theme,
  });

  return toJsxRuntime(hast, {
    Fragment,
    jsx,
    jsxs,
  }) as JSX.Element;
}

type Props = {
  code: string | null;
  language: BundledLanguage;
  filename?: string;
  initial?: JSX.Element;
  preHighlighted?: JSX.Element | null;
};

export default function CodeBlock({ code, language, filename, initial, preHighlighted }: Props) {
  const { resolvedTheme } = useTheme();
  const [content, setContent] = useState<JSX.Element | null>(preHighlighted || initial || null);

  useLayoutEffect(() => {
    if (preHighlighted) {
      setContent(preHighlighted);
      return;
    }

    let isMounted = true;

    if (code) {
      const selectedTheme = resolvedTheme === 'dark' ? 'vesper' : 'github-light';

      highlight(code, language, selectedTheme).then((result) => {
        if (isMounted) setContent(result);
      });
    } else {
      setContent(<pre className="rounded-md bg-neutral-800 p-4">No code available</pre>);
    }

    return () => {
      isMounted = false;
    };
  }, [code, language, preHighlighted, resolvedTheme]);

  return (
    <div className="border border-dashed border-border rounded-lg overflow-hidden ">
      <div className="flex justify-between items-center px-4 py-2  border-b border-dashed border-border">
        {filename && (
          <div className="py-2  text-sm text-muted-foreground font-mono flex items-center gap-2">
            <Icons.typeScript className="h-6 w-6 text-muted-foreground rounded-md" />
            {filename}
          </div>
        )}

        <Copy content={typeof content === 'string' ? content : ''} />
      </div>

      <div className=" [&_pre]:!bg-white dark:[&_pre]:!bg-[#0A0A0A] [&_code]:font-medium [&_code]:font-mono [&_code]:text-[14px]  [&_pre]:overflow-auto [&_pre]:rounded-md [&_pre]:p-2 [&_pre]:leading-7 dark:[&_pre]:bg-neutral-900!">
        {content || (
          <div className="rounded-md p-4 bg-neutral-100 dark:bg-neutral-950">
            <div className="space-y-3">
              <Skeleton className="h-4 w-5/6 bg-neutral-300 dark:bg-neutral-800" />
              <Skeleton className="h-4 w-3/4 bg-neutral-300 dark:bg-neutral-800" />
              <Skeleton className="h-4 w-full bg-neutral-300 dark:bg-neutral-800" />
              <Skeleton className="h-4 w-2/3 bg-neutral-300 dark:bg-neutral-800" />
              <Skeleton className="h-4 w-4/5 bg-neutral-300 dark:bg-neutral-800" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
