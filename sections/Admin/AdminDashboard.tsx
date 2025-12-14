"use client";

import { useState } from "react";
import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import DashboardOverview from "./components/DashboardOverview";
import EarningsChart from "./components/EarningsChart";
import Calendar from "./components/Calendar";
import InstitutionTable from "./components/InstitutionTable";
import StudentPieChart from "./components/StudentPieChart";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex">
        <AdminSidebar sidebarOpen={sidebarOpen} />
        <main
          className={`flex-1 transition-all duration-300 ${
            sidebarOpen ? "ml-64" : "ml-20"
          } pt-16`}
        >
          <div className="p-6 space-y-6">
            {/* Dashboard Overview */}
            <DashboardOverview />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Earnings Chart */}
              <div className="lg:col-span-2">
                <EarningsChart />
              </div>

              {/* Calendar */}
              <div>
                <Calendar />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Institution Table */}
              <div className="lg:col-span-2">
                <InstitutionTable />
              </div>

              {/* Student Pie Chart */}
              <div>
                <StudentPieChart />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;

