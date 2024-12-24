import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar, Download, MapPin, Phone } from 'lucide-react'
import { Patient } from '../types/patient'

interface PatientProfileProps {
  patient: Patient
}

export function PatientProfile({ patient }: PatientProfileProps) {
  return (
    <>
      <div className="w-80 p-6 border-l">
        <div className="flex flex-col items-center text-center ">
          <Avatar className="w-32 h-32 mb-4">
            <AvatarImage src={patient.profile_picture} alt={patient.name} />
            <AvatarFallback>{patient.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-dark mb-1">{patient.name}</h2>
          <p className="text-gray-500">{patient.gender}, {patient.age}</p>
        </div>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm font-semibold">Date Of Birth</p>
                <p className="text-sm text-gray-500">{patient.date_of_birth}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm font-semibold">Contact Info</p>
                <p className="text-sm text-gray-500">{patient.phone_number}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm font-semibold">Emergency Contact</p>
                <p className="text-sm text-gray-500">{patient.emergency_contact}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm font-semibold">Insurance Provider</p>
                <p className="text-sm text-gray-500">{patient.insurance_type}</p>
              </div>
            </div>
            <Button className="w-full mt-6 bg-amber-400 text-dark ">
            Show All Information
          </Button>
          </div>


          <div className="w-50  border-t ">
            <h3 className="text-lg font-semibold mb-4">Lab Results</h3>
            <div className="space-y-3 overflow-y-auto h-40">
              {patient.lab_results.map((result, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm">{result}</span>
                  <Button variant="ghost" size="icon">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          <Button className="w-full mt-6 bg-amber-400 text-dark hover:bg-secondary">
            Show Details
          </Button>
          </div>
        </div>
      </div>
    </>
  )
}
