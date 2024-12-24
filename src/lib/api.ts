export async function fetchPatientData() {
    const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev');
    if (!response.ok) {
      throw new Error('Failed to fetch patient data');
    }
    return response.json();
  }
  
  