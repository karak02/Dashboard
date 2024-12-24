import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Patient } from '../types/patient'
import { VitalCard } from './vital-card'
import { BloodPressureChart } from './blood-pressure'

interface PatientDetailsProps {
  patient: Patient
}

export function PatientDetails({ patient }: PatientDetailsProps) {
  const latestDiagnosis = patient.diagnosis_history?.[0]

  if (!latestDiagnosis) {
    return (
      <div className="flex-1 p-6 overflow-auto">
        <p>No diagnosis history available.</p>
      </div>
    )
  }

  return (
    <div className="flex-1 p-6 ">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>{patient.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Age: {patient.age}</p>
            <p>Gender: {patient.gender}</p>
            <p>Date of Birth: {patient.date_of_birth}</p>
            <p>Phone: {patient.phone_number}</p>
            <p>Emergency Contact: {patient.emergency_contact}</p>
            <p>Insurance: {patient.insurance_type}</p>
          </CardContent>
        </Card>

        <BloodPressureChart diagnosisHistory={patient.diagnosis_history} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <VitalCard
            title="Blood Pressure"
            value={`${latestDiagnosis.blood_pressure.systolic.value}/${latestDiagnosis.blood_pressure.diastolic.value}`}
            unit="mmHg"
            status={latestDiagnosis.blood_pressure.systolic.levels}
          />
          <VitalCard
            title="Heart Rate"
            value={latestDiagnosis.heart_rate.value.toString()}
            unit="bpm"
            status={latestDiagnosis.heart_rate.levels}
          />
          <VitalCard
            title="Respiratory Rate"
            value={latestDiagnosis.respiratory_rate.value.toString()}
            unit="bpm"
            status={latestDiagnosis.respiratory_rate.levels}
          />
          <VitalCard
            title="Temperature"
            value={latestDiagnosis.temperature.value.toString()}
            unit="°F"
            status={latestDiagnosis.temperature.levels}
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Diagnostic List</CardTitle>
          </CardHeader>
          <CardContent>
            {patient.diagnostic_list.length === 0 ? (
              <p>No diagnostic records available.</p>
            ) : (
              <table className="w-full border-r-orange-200">
                <thead>
                  <tr className="text-left border-b ">
                    <th className="body-emphasized-14pt py-2">Problem/Diagnosis</th>
                    <th className="body-emphasized-14pt py-2">Description</th>
                    <th className="body-emphasized-14pt py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {patient.diagnostic_list.map((diagnosis, index) => (
                    <tr key={index} className="border-b">
                      <td className="body-regular-14 py-3">{diagnosis.name}</td>
                      <td className="body-secondary-info-14pt py-3">{diagnosis.description}</td>
                      <td className="body-regular-14 py-3">{diagnosis.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
