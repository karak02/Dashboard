import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface VitalCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  unit: string;
  status: "Normal" | "Higher than Average" | "Lower than Average";
  className?: string;
}

export function VitalCard({
  icon,
  title,
  value,
  unit,
  status,
  className,
}: VitalCardProps) {
  return (
    <Card className={cn("vital-card", className)}>
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <span className="text-sm text-gray-600">{title}</span>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="vital-value">{value}</span>
        <span className="vital-unit">{unit}</span>
      </div>
      <div className="mt-2">
        <span
          className={cn(
            "text-sm font-medium",
            status === "Normal" && "status-normal",
            status === "Higher than Average" && "status-high",
            status === "Lower than Average" && "status-low"
          )}
        >
          {status}
        </span>
      </div>
    </Card>
  );
}
