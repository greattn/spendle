"use client";

import React from "react";
import Header from "../../components/organisms/Header";
import Sidebar from "../organisms/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

const Dashboard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <SidebarProvider>
          <Sidebar />
          <main className="main-content flex-1">
            <Header />
            <Separator />
            <div className="p-2">{children}</div>
          </main>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default Dashboard;
