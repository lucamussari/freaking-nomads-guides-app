"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
  ComposedChart,
} from "recharts";
import { Button } from "@/components/ui/button";

const data = [
  { month: "Jan", tempLowC: 18, tempHighC: 26, tempLowF: 64.4, tempHighF: 78.8, precipitation: 10 },
  { month: "Feb", tempLowC: 19, tempHighC: 28, tempLowF: 66.2, tempHighF: 82.4, precipitation: 15 },
  { month: "Mar", tempLowC: 21, tempHighC: 30, tempLowF: 69.8, tempHighF: 86, precipitation: 30 },
  { month: "Apr", tempLowC: 23, tempHighC: 32, tempLowF: 73.4, tempHighF: 89.6, precipitation: 45 },
  { month: "May", tempLowC: 24, tempHighC: 33, tempLowF: 75.2, tempHighF: 91.4, precipitation: 120 },
  { month: "Jun", tempLowC: 23, tempHighC: 32, tempLowF: 73.4, tempHighF: 89.6, precipitation: 150 },
  { month: "Jul", tempLowC: 22, tempHighC: 31, tempLowF: 71.6, tempHighF: 87.8, precipitation: 160 },
  { month: "Aug", tempLowC: 22, tempHighC: 31, tempLowF: 71.6, tempHighF: 87.8, precipitation: 170 },
  { month: "Sep", tempLowC: 21, tempHighC: 30, tempLowF: 69.8, tempHighF: 86, precipitation: 250 },
  { month: "Oct", tempLowC: 20, tempHighC: 29, tempLowF: 68, tempHighF: 84.2, precipitation: 200 },
  { month: "Nov", tempLowC: 19, tempHighC: 27, tempLowF: 66.2, tempHighF: 80.6, precipitation: 50 },
  { month: "Dec", tempLowC: 18, tempHighC: 26, tempLowF: 64.4, tempHighF: 78.8, precipitation: 20 },
];

export function WeatherChart() {
  const [unit, setUnit] = useState<'C' | 'F'>('C');

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <div className="inline-flex rounded-lg border p-1">
          <Button
            variant={unit === 'C' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setUnit('C')}
            className="text-xs"
          >
            Celsius
          </Button>
          <Button
            variant={unit === 'F' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setUnit('F')}
            className="text-xs"
          >
            Fahrenheit
          </Button>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="h-[300px] min-w-[600px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
              <XAxis 
                dataKey="month" 
                stroke="currentColor"
                fontSize={12}
                tickLine={false}
              />
              <YAxis 
                yAxisId="left"
                stroke="currentColor"
                fontSize={12}
                tickLine={false}
                tickFormatter={(value) => `${value}°`}
                domain={[
                  Math.floor(Math.min(...data.map(d => unit === 'C' ? d.tempLowC : d.tempLowF)) - 5),
                  Math.ceil(Math.max(...data.map(d => unit === 'C' ? d.tempHighC : d.tempHighF)) + 5)
                ]}
              />
              <YAxis 
                yAxisId="right"
                orientation="right"
                stroke="currentColor"
                fontSize={12}
                tickLine={false}
                tickFormatter={(value) => `${value}mm`}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-3 border rounded-lg shadow-sm">
                        <p className="font-medium">{label}</p>
                        <p className="text-sm text-gray-600">
                          High: {payload[0].value}°{unit}
                        </p>
                        <p className="text-sm text-gray-600">
                          Low: {payload[1].value}°{unit}
                        </p>
                        <p className="text-sm text-gray-600">
                          Rainfall: {payload[2].value}mm
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Legend 
                verticalAlign="top"
                height={36}
                iconType="circle"
                iconSize={8}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey={unit === 'C' ? 'tempHighC' : 'tempHighF'}
                name={`High (°${unit})`}
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6 }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey={unit === 'C' ? 'tempLowC' : 'tempLowF'}
                name={`Low (°${unit})`}
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6 }}
              />
              <Bar
                yAxisId="right"
                dataKey="precipitation"
                name="Rainfall (mm)"
                fill="hsl(var(--chart-3))"
                opacity={0.6}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}