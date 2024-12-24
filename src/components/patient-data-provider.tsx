import { fetchPatientData } from '@/lib/api'
import { PatientDataDisplay } from './patient-data-display'

export async function PatientDataProvider() {
  const patientData = await fetchPatientData()

  return <PatientDataDisplay data={patientData} />
}

