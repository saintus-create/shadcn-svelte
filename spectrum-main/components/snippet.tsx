"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import Copy from "./copy";

interface SnippetProps {
  text: string;
  width?: string;
}

export function Snippet({ text, width }: SnippetProps) {
  return (
    <Card
      className={`flex items-center justify-between p-2 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[740px] ${width ? "max-w-none" : ""}`}
    >
      <code className="text-sm font-mono truncate flex-1 mr-2">{text}</code>
      <Copy content={text} />
    </Card>
  );
}
