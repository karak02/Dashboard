'use client'

import { useState } from 'react'
import { TopNav } from "@/components/top-nav"
import { PatientList } from "@/components/patient-list"
import { PatientProfile } from "@/components/patient-profile"
import { BloodPressureChart } from "@/components/blood-pressure"
import { VitalCard } from "@/components/vital-card"
import { TreesIcon as Lungs, Thermometer, Heart } from 'lucide-react'
import patientData from './patient-data.json'
import { Patient } from '../types/patient'

export default function Page() {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(patientData[0])

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav />
      <div className="flex h-[calc(100vh-4rem)]">
        <PatientList 
          patients={patientData} 
          onSelectPatient={(patient) => setSelectedPatient(patient)}
        />
        
        {selectedPatient ? (
          <>
            <div className="flex-1 p-6 overflow-auto">
              <BloodPressureChart diagnosisHistory={selectedPatient.diagnosis_history} />
              
              <div className="grid grid-cols-3 gap-4 mt-6">
                <VitalCard
                  icon={<Lungs className="w-5 h-5 text-gray-500" />}
                  title="Respiratory Rate"
                  value={selectedPatient.diagnosis_history[0].respiratory_rate.value.toString()}
                  unit="bpm"
                  status={selectedPatient.diagnosis_history[0].respiratory_rate.levels}
                />
                <VitalCard
                  icon={<Thermometer className="w-5 h-5 text-gray-500" />}
                  title="Temperature"
                  value={selectedPatient.diagnosis_history[0].temperature.value.toString()}
                  unit="°F"
                  status={selectedPatient.diagnosis_history[0].temperature.levels}
                />
                <VitalCard
                  icon={<Heart className="w-5 h-5 text-gray-500" />}
                  title="Heart Rate"
                  value={selectedPatient.diagnosis_history[0].heart_rate.value.toString()}
                  unit="bpm"
                  status={selectedPatient.diagnosis_history[0].heart_rate.levels}
                />
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-semibold mb-4">Diagnostic List</h2>
                <div className="bg-white rounded-xl border">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Problem/Diagnosis</th>
                        <th className="text-left py-3 px-4 font-medium">Description</th>
                        <th className="text-left py-3 px-4 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedPatient.diagnostic_list.map((diagnosis, index) => (
                        <tr key={index} className="border-b last:border-0">
                          <td className="py-3 px-4">{diagnosis.name}</td>
                          <td className="py-3 px-4 text-gray-500">{diagnosis.description}</td>
                          <td className="py-3 px-4">{diagnosis.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <PatientProfile patient={selectedPatient} />
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-2xl text-gray-400">Select a patient to view details</p>
          </div>
        )}
      </div>
    </div>
  )
}

