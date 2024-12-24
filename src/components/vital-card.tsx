import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface VitalCardProps {
  icon?: React.ReactNode; // Made `icon` optional
  title: string;
  value: string;
  unit: string;
  status: string;
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
        {icon && icon} {/* Render icon only if provided */}
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

// Example Usage
export default function Dashboard({ latestDiagnosis }: any) {
  const statusMapping: {
    [key: string]: "Normal" | "Higher than Average" | "Lower than Average";
  } = {
    normal: "Normal",
    higher: "Higher than Average",
    lower: "Lower than Average",
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <VitalCard
        icon={<span className="w-5 h-5 text-gray-500">🩺</span>} // Example icon
        title="Blood Pressure"
        value={`${latestDiagnosis.blood_pressure.systolic.value}/${latestDiagnosis.blood_pressure.diastolic.value}`}
        unit="mmHg"
        status={statusMapping[latestDiagnosis.blood_pressure.levels] || "Normal"}
      />
    </div>
  );
}
