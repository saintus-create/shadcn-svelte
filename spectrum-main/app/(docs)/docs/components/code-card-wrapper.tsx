// components/code-card-wrapper.tsx
"use client";

import CodeCard from "@/app/(docs)/docs/components/code-card/code-card";

interface Props {
  code: string;
  className?: string;
  children?: React.ReactNode;
  CLI?: string;
}

const CodeCardWrapper = ({ code, className, children, CLI }: Props) => {
  return (
    <CodeCard code={code} className={className} CLI={CLI}>
      {children}
    </CodeCard>
  );
};

export default CodeCardWrapper;
