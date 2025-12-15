"use client";

import { useState } from "react";
import AdminBottomHeader from "./components/AdminBottomHeader";
import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import Calendar from "./components/Calendar";
import DashboardOverview from "./components/DashboardOverview";
import EarningsChart from "./components/EarningsChart";
import InstitutionTable from "./components/InstitutionTable";
import StudentPieChart from "./components/StudentPieChart";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="fixed top-16 left-0 right-0 z-50 pt-1.5">
        <AdminBottomHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>

      <div className="flex">
        <AdminSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <main
          className={`flex-1 transition-all duration-300 mt-32 ${
            sidebarOpen ? "lg:ml-64 md:ml-64 ml-0" : "lg:ml-20 md:ml-20 ml-0"
          } `}
        >
          <div className="p-3 sm:p-4 md:p-6 space-y-4 md:space-y-6">
            {/* Dashboard Overview */}
            <DashboardOverview />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 items-start">
              {/* Earnings Chart */}
              <div className="lg:col-span-2">
                <EarningsChart />
              </div>

              {/* Calendar */}
              <div>
                <Calendar />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
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
