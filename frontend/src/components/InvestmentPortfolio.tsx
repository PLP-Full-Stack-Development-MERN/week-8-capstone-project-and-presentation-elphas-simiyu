
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { TrendingUpIcon, TrendingDownIcon } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

interface Investment {
  id: string;
  name: string;
  ticker: string;
  allocation: number;
  value: number;
  change: number;
}

const investments: Investment[] = [
  { id: '1', name: 'Apple Inc.', ticker: 'AAPL', allocation: 25, value: 12500, change: 2.4 },
  { id: '2', name: 'Microsoft', ticker: 'MSFT', allocation: 20, value: 10000, change: 1.7 },
  { id: '3', name: 'Amazon', ticker: 'AMZN', allocation: 15, value: 7500, change: -0.8 },
  { id: '4', name: 'Tesla', ticker: 'TSLA', allocation: 10, value: 5000, change: 4.2 },
  { id: '5', name: 'S&P 500 ETF', ticker: 'SPY', allocation: 30, value: 15000, change: 0.9 },
];

const InvestmentPortfolio = () => {
  const totalValue = investments.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Investment Portfolio</CardTitle>
        <CardDescription>Your investment allocation</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
            <span className="text-sm font-medium">Asset</span>
            <div className="flex gap-8">
              <span className="text-sm font-medium">Allocation</span>
              <span className="text-sm font-medium">Performance</span>
            </div>
          </div>
          
          {investments.map((investment) => (
            <div 
              key={investment.id} 
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{investment.name}</p>
                  <p className="text-xs text-muted-foreground">{investment.ticker}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">${investment.value.toLocaleString()}</p>
                  <div className={`flex items-center justify-end gap-1 ${investment.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {investment.change >= 0 ? (
                      <TrendingUpIcon className="h-3 w-3" />
                    ) : (
                      <TrendingDownIcon className="h-3 w-3" />
                    )}
                    <span className="text-xs font-medium">
                      {investment.change >= 0 ? '+' : ''}{investment.change}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Progress
                  value={investment.allocation}
                  className="h-2"
                />
                <span className="text-xs font-medium">{investment.allocation}%</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-center">
            <span className="font-medium">Total Portfolio Value</span>
            <span className="font-bold text-lg">${totalValue.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InvestmentPortfolio;
