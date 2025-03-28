
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { CreditCardIcon, TrendingUpIcon, TrendingDownIcon } from 'lucide-react';

interface AccountBalanceProps {
  accountName: string;
  balance: number;
  currency: string;
  changePercent: number;
  changeAmount: number;
}

const AccountBalance: React.FC<AccountBalanceProps> = ({
  accountName,
  balance,
  currency,
  changePercent,
  changeAmount
}) => {
  const isPositive = changePercent >= 0;
  const TrendIcon = isPositive ? TrendingUpIcon : TrendingDownIcon;
  const trendColor = isPositive ? 'text-green-500' : 'text-red-500';

  return (
    <Card className="bg-white dark:bg-fintech-neutral border-slate-100 dark:border-slate-800 overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">{accountName}</CardTitle>
          <CreditCardIcon className="h-5 w-5 text-fintech-secondary" />
        </div>
        <CardDescription>Current Balance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <span className="text-3xl font-bold">
            {currency}{balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </span>
          <div className={`flex items-center mt-2 gap-1 ${trendColor}`}>
            <TrendIcon className="h-4 w-4" />
            <span className="text-sm font-medium">
              {changePercent >= 0 ? '+' : ''}{changePercent}% (
              {currency}{Math.abs(changeAmount).toLocaleString('en-US', { minimumFractionDigits: 2 })})
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <div className="text-xs text-muted-foreground">Updated just now</div>
      </CardFooter>
    </Card>
  );
};

export default AccountBalance;
