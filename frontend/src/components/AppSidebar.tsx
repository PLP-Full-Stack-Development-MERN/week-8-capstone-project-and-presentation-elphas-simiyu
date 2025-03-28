
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HomeIcon, 
  CreditCardIcon, 
  TrendingUpIcon, 
  PieChartIcon, 
  ShieldIcon,
  WalletIcon, 
  SettingsIcon, 
  FilesIcon,
  MenuIcon,
  UsersIcon
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger
} from "@/components/ui/sidebar";

const AppSidebar = () => {
  const navItems = [
    { 
      section: "Overview",
      items: [
        { name: "Dashboard", icon: HomeIcon, path: "/" },
        { name: "Accounts", icon: WalletIcon, path: "/accounts" },
        { name: "Transactions", icon: CreditCardIcon, path: "/transactions" }
      ] 
    },
    { 
      section: "Investments",
      items: [
        { name: "Portfolio", icon: PieChartIcon, path: "/portfolio" },
        { name: "Trading", icon: TrendingUpIcon, path: "/trading" },
        { name: "Crypto", icon: WalletIcon, path: "/crypto" }
      ] 
    },
    { 
      section: "Finance",
      items: [
        { name: "Budgeting", icon: PieChartIcon, path: "/budgeting" },
        { name: "Credit Score", icon: FilesIcon, path: "/credit-score" },
        { name: "Subscriptions", icon: UsersIcon, path: "/subscriptions" }
      ] 
    },
    { 
      section: "Security",
      items: [
        { name: "Fraud Detection", icon: ShieldIcon, path: "/security" },
        { name: "KYC & AML", icon: FilesIcon, path: "/compliance" },
        { name: "Settings", icon: SettingsIcon, path: "/settings" }
      ] 
    }
  ];

  return (
    <Sidebar>
      <div className="flex h-14 items-center border-b px-4">
        <Link to="/" className="flex items-center justify-center gap-2 font-semibold">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <span className="text-xl text-primary-foreground">S</span>
          </div>
          <span className="text-xl hidden md:inline-block">Singular</span>
        </Link>
        <div className="ml-auto md:hidden">
          <SidebarTrigger />
        </div>
      </div>
      <SidebarContent>
        {navItems.map((section, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel>{section.section}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item, itemIndex) => (
                  <SidebarMenuItem key={itemIndex}>
                    <SidebarMenuButton asChild>
                      <Link to={item.path} className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
