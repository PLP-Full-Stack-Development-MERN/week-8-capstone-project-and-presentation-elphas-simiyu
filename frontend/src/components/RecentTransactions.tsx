
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { ArrowDownIcon, ArrowUpIcon, ShoppingCartIcon, CreditCardIcon, WalletIcon } from 'lucide-react';

interface Transaction {
  id: string;
  type: 'incoming' | 'outgoing' | 'purchase' | 'subscription';
  title: string;
  description: string;
  amount: number;
  currency: string;
  date: string;
}

const transactions: Transaction[] = [
  {
    id: '1',
    type: 'incoming',
    title: 'Deposit',
    description: 'From Bank Account',
    amount: 1250.00,
    currency: '$',
    date: '2023-07-12'
  },
  {
    id: '2',
    type: 'purchase',
    title: 'Amazon',
    description: 'Online Shopping',
    amount: -84.50,
    currency: '$',
    date: '2023-07-11'
  },
  {
    id: '3',
    type: 'subscription',
    title: 'Netflix',
    description: 'Monthly Subscription',
    amount: -14.99,
    currency: '$',
    date: '2023-07-10'
  },
  {
    id: '4',
    type: 'outgoing',
    title: 'Wire Transfer',
    description: 'To Jane Smith',
    amount: -350.00,
    currency: '$',
    date: '2023-07-09'
  },
  {
    id: '5',
    type: 'incoming',
    title: 'Paycheck',
    description: 'From Employer Inc.',
    amount: 3200.00,
    currency: '$',
    date: '2023-07-05'
  }
];

const getIconForTransaction = (type: string) => {
  switch (type) {
    case 'incoming':
      return <ArrowDownIcon className="h-4 w-4 text-green-500" />;
    case 'outgoing':
      return <ArrowUpIcon className="h-4 w-4 text-red-500" />;
    case 'purchase':
      return <ShoppingCartIcon className="h-4 w-4 text-blue-500" />;
    case 'subscription':
      return <CreditCardIcon className="h-4 w-4 text-purple-500" />;
    default:
      return <WalletIcon className="h-4 w-4 text-gray-500" />;
  }
};

const RecentTransactions = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your latest financial activity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div 
              key={transaction.id} 
              className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 last:border-0 last:pb-0"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800">
                  {getIconForTransaction(transaction.type)}
                </div>
                <div>
                  <p className="font-medium">{transaction.title}</p>
                  <p className="text-sm text-muted-foreground">{transaction.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-medium ${transaction.amount >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {transaction.amount >= 0 ? '+' : ''}
                  {transaction.currency}{Math.abs(transaction.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>
                <p className="text-xs text-muted-foreground">
                  {new Date(transaction.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
