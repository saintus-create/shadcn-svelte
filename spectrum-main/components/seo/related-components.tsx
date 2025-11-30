import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface RelatedComponent {
  label: string;
  url: string;
  description?: string;
}

interface RelatedComponentsProps {
  components: RelatedComponent[];
  title?: string;
}

export function RelatedComponents({ 
  components, 
  title = "Related Components" 
}: RelatedComponentsProps) {
  if (!components || components.length === 0) return null;

  return (
    <section className="my-12 border-t pt-8">
      <h2 className="mb-6 text-2xl font-bold tracking-tight">
        {title}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {components.map((component) => (
          <Link 
            key={component.url} 
            href={component.url}
            className="group"
          >
            <Card className="h-full p-4 transition-all hover:border-primary hover:shadow-md">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold group-hover:text-primary">
                    {component.label}
                  </h3>
                  {component.description && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      {component.description}
                    </p>
                  )}
                </div>
                <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

