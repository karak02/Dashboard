import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MoreVertical } from 'lucide-react'
import { Patient } from '../types/patient'

interface PatientListProps {
  patients: Patient[]
  onSelectPatient: (patient: Patient) => void
}

export function PatientList({ patients, onSelectPatient }: PatientListProps) {
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null)

  const handlePatientClick = (patient: Patient) => {
    setSelectedPatientId(patient.name)
    onSelectPatient(patient)
  }

  return (
    <div className="w-72 p-4 border-r">
      <div className="flex items-center justify-between mb-6">
        <h2 className="card-title-24pt">Patients</h2>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-5 w-5" />
        </Button>
      </div>
      <div className="space-y-4 overflow-y-auto h-[calc(100vh-120px)]"> {/* Adjust height as needed */}
        {patients.map((patient) => (
          <div
            key={patient.name}
            className={`flex items-center justify-between p-2 rounded-lg hover:bg-accent cursor-pointer ${
              selectedPatientId === patient.name ? 'bg-yellow-300' : ''
            }`}
            onClick={() => handlePatientClick(patient)}
          >
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={patient.profile_picture} alt={patient.name} />
                <AvatarFallback>{patient.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="body-emphasized-14pt">{patient.name}</p>
                <p className="body-secondary-info-14pt">Age: {patient.age}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
