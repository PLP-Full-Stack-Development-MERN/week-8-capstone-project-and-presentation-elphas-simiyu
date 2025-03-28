
import React from 'react';
import Header from '@/components/Header';
import AccountBalance from '@/components/AccountBalance';
import RecentTransactions from '@/components/RecentTransactions';
import MarketOverview from '@/components/MarketOverview';
import SpendingAnalytics from '@/components/SpendingAnalytics';
import InvestmentPortfolio from '@/components/InvestmentPortfolio';
import { Button } from '@/components/ui/button';
import { CreditCardIcon, PlusCircleIcon, SendIcon, BanknoteIcon } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="container mx-auto py-6 px-4 md:px-6">
        <div className="flex flex-col gap-1 mb-6">
          <h1 className="text-3xl font-bold">Welcome back, John Doe</h1>
          <p className="text-muted-foreground">Here's what's happening with your finances today.</p>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <Button variant="outline" className="gap-2">
            <SendIcon className="h-4 w-4" />
            <span>Send Money</span>
          </Button>
          <Button variant="outline" className="gap-2">
            <PlusCircleIcon className="h-4 w-4" />
            <span>Add Money</span>
          </Button>
          <Button variant="outline" className="gap-2">
            <CreditCardIcon className="h-4 w-4" />
            <span>Card Controls</span>
          </Button>
          <Button variant="outline" className="gap-2">
            <BanknoteIcon className="h-4 w-4" />
            <span>Loans</span>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <AccountBalance 
            accountName="Main Account"
            balance={12580.75}
            currency="$"
            changePercent={2.5}
            changeAmount={310.25}
          />
          <AccountBalance 
            accountName="Savings Account"
            balance={45780.50}
            currency="$"
            changePercent={1.2}
            changeAmount={542.90}
          />
          <AccountBalance 
            accountName="Investment Account"
            balance={28350.25}
            currency="$"
            changePercent={-0.8}
            changeAmount={-215.75}
          />
          <AccountBalance 
            accountName="Crypto Wallet"
            balance={8420.15}
            currency="$"
            changePercent={5.7}
            changeAmount={456.30}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <MarketOverview />
          <SpendingAnalytics />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentTransactions />
          <InvestmentPortfolio />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
