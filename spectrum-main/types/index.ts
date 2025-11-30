import { LucideIcon } from "lucide-react";

type RoutesProps = {
  groupKey: string;
  groupValue: string;
  icon: LucideIcon;
  children: {
    label: string;
    value: string;
    url: string;
    tag?: {
      label: "new" | "most-popular" | "updated";
      color: "bg-lime-400" | "bg-amber-500" | "bg-blue-400";
    };
  }[];
};

export type { RoutesProps };
