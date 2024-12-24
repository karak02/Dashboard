import { VitalCard } from './vital-card'
import { TreesIcon as Lungs, Thermometer, Heart } from 'lucide-react'

interface PatientData {
  respiratoryRate: number
  temperature: number
  heartRate: number
}

function getVitalStatus(value: number, type: string): "Normal" | "Higher than Average" | "Lower than Average" {
  switch(type) {
    case 'heartRate':
      return value >= 60 && value <= 100 ? "Normal" : value > 100 ? "Higher than Average" : "Lower than Average";
    case 'temperature':
      return value >= 97 && value <= 99 ? "Normal" : value > 99 ? "Higher than Average" : "Lower than Average";
    case 'respiratoryRate':
      return value >= 12 && value <= 20 ? "Normal" : value > 20 ? "Higher than Average" : "Lower than Average";
    default:
      return "Normal";
  }
}

export function PatientDataDisplay({ data }: { data: PatientData }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <VitalCard
        icon={<Lungs className="h-5 w-5 text-gray-500" />}
        title="Respiratory Rate"
        value={data.respiratoryRate.toString()}
        unit="bpm"
        status={getVitalStatus(data.respiratoryRate, 'respiratoryRate')}
      />
      <VitalCard
        icon={<Thermometer className="h-5 w-5 text-gray-500" />}
        title="Temperature"
        value={data.temperature.toFixed(1)}
        unit="°F"
        status={getVitalStatus(data.temperature, 'temperature')}
      />
      <VitalCard
        icon={<Heart className="h-5 w-5 text-gray-500" />}
        title="Heart Rate"
        value={data.heartRate.toString()}
        unit="bpm"
        status={getVitalStatus(data.heartRate, 'heartRate')}
      />
    </div>
  );
}
