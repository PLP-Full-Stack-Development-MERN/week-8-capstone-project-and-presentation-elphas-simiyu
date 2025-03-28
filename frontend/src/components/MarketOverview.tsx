
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { TrendingUpIcon, TrendingDownIcon } from 'lucide-react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const marketData = [
  { name: 'Jan', btc: 29500, eth: 1850, sol: 84 },
  { name: 'Feb', btc: 31200, eth: 1920, sol: 96 },
  { name: 'Mar', btc: 33400, eth: 1780, sol: 102 },
  { name: 'Apr', btc: 34100, eth: 1850, sol: 108 },
  { name: 'May', btc: 27800, eth: 1720, sol: 78 },
  { name: 'Jun', btc: 30200, eth: 1910, sol: 92 },
  { name: 'Jul', btc: 42000, eth: 2280, sol: 124 },
];

const cryptoAssets = [
  { id: 'btc', name: 'Bitcoin', symbol: 'BTC', price: 42000, change: 5.67 },
  { id: 'eth', name: 'Ethereum', symbol: 'ETH', price: 2280, change: 3.21 },
  { id: 'sol', name: 'Solana', symbol: 'SOL', price: 124, change: -2.15 },
];

const MarketOverview = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Market Overview</CardTitle>
        <CardDescription>Crypto market performance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={marketData}>
              <defs>
                <linearGradient id="colorBtc" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f7931a" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#f7931a" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="name" 
                stroke="#888888" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
              />
              <YAxis 
                stroke="#888888" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(value) => `$${value}`} 
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="btc" 
                stroke="#f7931a" 
                fill="url(#colorBtc)" 
                strokeWidth={2} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 space-y-2">
          {cryptoAssets.map((asset) => (
            <div 
              key={asset.id} 
              className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-${asset.id === 'btc' ? 'orange' : asset.id === 'eth' ? 'blue' : 'purple'}-100`}>
                  <span className={`text-xs font-bold text-${asset.id === 'btc' ? 'orange' : asset.id === 'eth' ? 'blue' : 'purple'}-600`}>
                    {asset.symbol.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium">{asset.name}</p>
                  <p className="text-sm text-muted-foreground">{asset.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">${asset.price.toLocaleString()}</p>
                <div className={`flex items-center justify-end gap-1 ${asset.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {asset.change >= 0 ? (
                    <TrendingUpIcon className="h-3 w-3" />
                  ) : (
                    <TrendingDownIcon className="h-3 w-3" />
                  )}
                  <span className="text-xs font-medium">
                    {asset.change >= 0 ? '+' : ''}{asset.change}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketOverview;
