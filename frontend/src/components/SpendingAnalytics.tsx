
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const spendingData = [
  { name: 'Housing', value: 1200, color: '#0CA4A5' },
  { name: 'Food', value: 450, color: '#3B82F6' },
  { name: 'Transport', value: 300, color: '#8B5CF6' },
  { name: 'Entertainment', value: 180, color: '#F97316' },
  { name: 'Shopping', value: 240, color: '#EC4899' },
  { name: 'Other', value: 130, color: '#94A3B8' },
];

const SpendingAnalytics = () => {
  const total = spendingData.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Spending Analytics</CardTitle>
        <CardDescription>Your expenditure breakdown</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={spendingData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {spendingData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [`$${value}`, 'Amount']}
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 space-y-2">
          {spendingData.map((category, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
                <span className="text-sm">{category.name}</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium">${category.value}</span>
                <span className="text-xs text-muted-foreground ml-2">
                  ({((category.value / total) * 100).toFixed(1)}%)
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendingAnalytics;
