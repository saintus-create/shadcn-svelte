import { Check, Code2, Palette, Zap } from "lucide-react";

interface ComponentInfoSectionProps {
  componentName: string;
  features?: string[];
  useCases?: string[];
  advantages?: string[];
}

export function ComponentInfoSection({
  componentName,
  features = [],
  useCases = [],
  advantages = [],
}: ComponentInfoSectionProps) {
  return (
    <div className="my-8 space-y-8">
      {/* Features Section */}
      {features.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Key Features</h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Use Cases Section */}
      {useCases.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">When to Use {componentName}</h2>
          </div>
          <ul className="space-y-2">
            {useCases.map((useCase, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-sm">{useCase}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Advantages Section */}
      {advantages.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Palette className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Why Choose Spectrum UI {componentName}?</h2>
          </div>
          <ul className="space-y-2">
            {advantages.map((advantage, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                <span className="text-sm">{advantage}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

