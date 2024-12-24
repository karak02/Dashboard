'use client'

import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface BloodPressureChartProps {
  diagnosisHistory: Array<{
    month: string
    year: number
    blood_pressure: {
      systolic: { value: number; levels: string }
      diastolic: { value: number; levels: string }
    }
  }>
}

export function BloodPressureChart({ diagnosisHistory }: BloodPressureChartProps) {
  const data = diagnosisHistory
    .slice(0, 12)
    .reverse()
    .map(diagnosis => ({
      date: `${diagnosis.month} ${diagnosis.year}`,
      systolic: diagnosis.blood_pressure.systolic.value,
      diastolic: diagnosis.blood_pressure.diastolic.value
    }));

  return (
    <Card className="p-6">
      <CardHeader className="px-0 pt-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Blood Pressure</CardTitle>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-info" />
              <span className="text-sm">Systolic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-warning" />
              <span className="text-sm">Diastolic</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="date" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#707070' }} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#707070' }} 
            />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="systolic" 
              stroke="#006AAC" 
              strokeWidth={2} 
              dot={{ r: 4, fill: "#006AAC" }} 
              activeDot={{ r: 6 }} 
            />
            <Line 
              type="monotone" 
              dataKey="diastolic" 
              stroke="#FF6200" 
              strokeWidth={2} 
              dot={{ r: 4, fill: "#FF6200" }} 
              activeDot={{ r: 6 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
