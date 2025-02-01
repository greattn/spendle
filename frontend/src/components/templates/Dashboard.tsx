"use client";

import React from "react";
import Header from "../../components/organisms/Header";
import Sidebar from "../organisms/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Dashboard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <SidebarProvider>
          <Sidebar />
          <main>
            <Header />
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default Dashboard;
