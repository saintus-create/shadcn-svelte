import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ComparisonItem {
  feature: string;
  spectrum: string | boolean;
  others?: string | boolean;
}

interface ComponentComparisonProps {
  componentName: string;
  comparisons: ComparisonItem[];
  comparisonWith?: string;
}

export function ComponentComparison({
  componentName,
  comparisons,
  comparisonWith = "Other Libraries",
}: ComponentComparisonProps) {
  if (!comparisons || comparisons.length === 0) return null;

  const formatValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? "✓" : "✗";
    }
    return value;
  };

  return (
    <section className="my-12">
      <h2 className="mb-6 text-2xl font-bold tracking-tight">
        {componentName} Comparison
      </h2>
      <p className="mb-4 text-sm text-muted-foreground">
        See how Spectrum UI {componentName} compares to {comparisonWith}
      </p>
      <div className="overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">Feature</TableHead>
              <TableHead className="font-semibold">Spectrum UI</TableHead>
              <TableHead className="font-semibold">{comparisonWith}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisons.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.feature}</TableCell>
                <TableCell className="text-green-600 dark:text-green-400">
                  {formatValue(item.spectrum)}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {item.others ? formatValue(item.others) : "—"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}

