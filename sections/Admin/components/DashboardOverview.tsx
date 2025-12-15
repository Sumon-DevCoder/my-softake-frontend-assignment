"use client";

const DashboardOverview = () => {
  const metrics = [
    {
      title: "Total Institutions",
      value: "5",
      change: "+2 this month",
      trend: "up",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "Total Students",
      value: "8",
      change: "+12% from last month",
      trend: "up",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
        </svg>
      ),
    },
    {
      title: "Total Staff",
      value: "6",
      change: "+5 new hires",
      trend: "up",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      title: "Total Revenue",
      value: "৳6.5Cr",
      change: "+8.2% from last year",
      trend: "up",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 md:p-6">
      <div className="mb-4 md:mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          Dashboard Overview
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-1 font-medium">
          Welcome to your educational institutions management dashboard
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200 hover:shadow-md transition-shadow relative"
          >
            {/* Icon in top right corner */}
            <div className="absolute top-4 right-4 text-gray-400">
              {metric.icon}
            </div>

            {/* Title at top */}
            <h3 className="text-sm font-medium text-gray-900 mb-2 pr-8">
              {metric.title}
            </h3>

            {/* Value in middle */}
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {metric.value}
            </p>

            {/* Trend at bottom */}
            <p className="text-sm font-medium text-green-600 flex items-center">
              <svg
                className="w-3 h-3 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
              {metric.change}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardOverview;
