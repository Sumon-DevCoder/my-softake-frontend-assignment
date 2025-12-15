"use client";

interface AdminBottomHeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const AdminBottomHeader = ({
  sidebarOpen,
  setSidebarOpen,
}: AdminBottomHeaderProps) => {
  return (
    <div className="bg-white border-b  border-gray-200 min-h-[64px] flex items-center justify-between px-4 sm:px-6 md:px-8 py-3">
      {/* Left Section - Icon, Logo, and Hamburger */}
      <div className="flex items-center  space-x-3 sm:space-x-4">
        {/* Documents Icon */}
        <div className="shrink-0">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 22V4C6 3.46957 6.21071 2.96086 6.58579 2.58579C6.96086 2.21071 7.46957 2 8 2H16C16.5304 2 17.0391 2.21071 17.4142 2.58579C17.7893 2.96086 18 3.46957 18 4V22H6Z"
              stroke="#155DFC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 12H4C3.46957 12 2.96086 12.2107 2.58579 12.5858C2.21071 12.9609 2 13.4696 2 14V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H6"
              stroke="#155DFC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H18"
              stroke="#155DFC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 6H14"
              stroke="#155DFC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 10H14"
              stroke="#155DFC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 14H14"
              stroke="#155DFC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 18H14"
              stroke="#155DFC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* EduDashboard Text */}
        <h1 className={`text-lg sm:text-xl font-bold text-gray-900 mr-14 ${!sidebarOpen ? 'hidden' : ''}`}>
          EduDashboard
        </h1>

        <div>
          {/* Hamburger Menu */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 hover:bg-gray-100 rounded-md transition-colors  border-gray-200"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Center Section - Search Bar */}
        <div className="flex-1 max-w-2xl mx-4 sm:mx-6 md:mx-8 hidden md:block">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search institutions, students, staff..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Right Section - Notifications and Profile */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        {/* Notification Bell with Badge */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          {/* Notification Badge */}
          <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-red-500 rounded-full">
            3
          </span>
        </button>

        {/* Profile Icon */}
        <button className="flex  items-center justify-center w-9 h-9 rounded-full  bg-[#F5F5F5] hover:bg-gray-300 transition-colors">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="16" fill="#F5F5F5" />
            <path
              d="M16 8C17.0609 8 18.0783 8.42143 18.8284 9.17157C19.5786 9.92172 20 10.9391 20 12C20 13.0609 19.5786 14.0783 18.8284 14.8284C18.0783 15.5786 17.0609 16 16 16C14.9391 16 13.9217 15.5786 13.1716 14.8284C12.4214 14.0783 12 13.0609 12 12C12 10.9391 12.4214 9.92172 13.1716 9.17157C13.9217 8.42143 14.9391 8 16 8ZM16 10C15.4696 10 14.9609 10.2107 14.5858 10.5858C14.2107 10.9609 14 11.4696 14 12C14 12.5304 14.2107 13.0391 14.5858 13.4142C14.9609 13.7893 15.4696 14 16 14C16.5304 14 17.0391 13.7893 17.4142 13.4142C17.7893 13.0391 18 12.5304 18 12C18 11.4696 17.7893 10.9609 17.4142 10.5858C17.0391 10.2107 16.5304 10 16 10ZM16 17C18.67 17 24 18.33 24 21V24H8V21C8 18.33 13.33 17 16 17ZM16 18.9C13.03 18.9 9.9 20.36 9.9 21V22.1H22.1V21C22.1 20.36 18.97 18.9 16 18.9Z"
              fill="#0A0A0A"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AdminBottomHeader;
