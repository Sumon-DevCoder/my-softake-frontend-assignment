"use client";

const EarningsChart = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Sample data for income and expense (matching screenshot)
  const incomeData = [30, 50, 80, 120, 160, 190, 180, 50, 137, 150, 155, 160];
  const expenseData = [20, 40, 60, 100, 140, 170, 160, 40, 100, 120, 130, 140];

  const maxValue = 200;
  const chartHeight = 200;
  const chartWidth = 600;

  const getY = (value: number) => {
    return chartHeight - (value / maxValue) * chartHeight;
  };

  const getX = (index: number) => {
    return (index / (months.length - 1)) * chartWidth;
  };

  // Generate path for income line
  const incomePath = incomeData
    .map(
      (value, index) =>
        `${index === 0 ? "M" : "L"} ${getX(index)} ${getY(value)}`
    )
    .join(" ");

  // Generate path for expense line
  const expensePath = expenseData
    .map(
      (value, index) =>
        `${index === 0 ? "M" : "L"} ${getX(index)} ${getY(value)}`
    )
    .join(" ");

  return (
    <div className="bg-white h-full rounded-lg shadow-sm p-4 sm:p-5 md:p-6">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">Earnings</h2>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
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
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
      </div>

      {/* Legend */}
      <div className="flex items-center space-x-6 mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <span className="text-sm font-medium text-gray-700">Income</span>
        </div>
        <div className="flex items-center space-x-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: "#a78bfa" }}
          ></div>
          <span className="text-sm font-medium text-gray-700">Expense</span>
        </div>
      </div>

      {/* Chart */}
      <div className="relative w-full overflow-x-auto -mx-4 sm:-mx-5 md:-mx-6 px-4 sm:px-5 md:px-6">
        <svg
          width="100%"
          height={chartHeight + 140}
          viewBox={`0 0 ${chartWidth + 60} ${chartHeight + 40}`}
          className="min-w-[400px] sm:min-w-[500px] md:min-w-[600px]"
        >
          {/* Y-axis labels */}
          {[0, 50, 100, 150, 200].map((value) => (
            <g key={value}>
              <line
                x1={40}
                y1={getY(value) + 20}
                x2={chartWidth + 40}
                y2={getY(value) + 20}
                stroke="#e5e7eb"
                strokeWidth={1}
                strokeDasharray="2,2"
              />
              <text
                x={35}
                y={getY(value) + 24}
                textAnchor="end"
                fontSize="12"
                fontWeight="500"
                fill="#6b7280"
              >
                {value}K
              </text>
            </g>
          ))}

          {/* X-axis labels */}
          {months.map((month, index) => (
            <text
              key={index}
              x={getX(index) + 40}
              y={chartHeight + 35}
              textAnchor="middle"
              fontSize="12"
              fill="#6b7280"
            >
              {month}
            </text>
          ))}

          {/* Income line - thicker, vibrant blue */}
          <path
            d={incomePath}
            fill="none"
            stroke="#2563eb"
            strokeWidth={3}
            transform="translate(40, 20)"
          />

          {/* Expense line - thinner, light purple */}
          <path
            d={expensePath}
            fill="none"
            stroke="#a78bfa"
            strokeWidth={2}
            transform="translate(40, 20)"
          />

          {/* Vertical shaded area for September highlight */}
          <rect
            x={getX(8) + 40 - 15}
            y={20}
            width={30}
            height={chartHeight}
            fill="#a78bfa"
            opacity={0.1}
          />

          {/* Vertical line for September */}
          <line
            x1={getX(8) + 40}
            y1={20}
            x2={getX(8) + 40}
            y2={chartHeight + 20}
            stroke="#a78bfa"
            strokeWidth={1}
            opacity={0.3}
          />

          {/* Data points for September */}
          <circle
            cx={getX(8) + 40}
            cy={getY(137) + 20}
            r={5}
            fill="#2563eb"
            stroke="white"
            strokeWidth={2}
          />
          <circle
            cx={getX(8) + 40}
            cy={getY(100) + 20}
            r={5}
            fill="#a78bfa"
            stroke="white"
            strokeWidth={2}
          />

          {/* Tooltip - White background with proper styling */}
          <g
            transform={`translate(${getX(8) + 70}, ${getY(120) + 20})`}
            className="hidden sm:block"
          >
            {/* White background */}
            <rect
              x={-80}
              y={-60}
              width={160}
              height={70}
              fill="white"
              rx={6}
              stroke="#e5e7eb"
              strokeWidth={1}
            />
            {/* Income row */}
            <g transform="translate(-70, -45)">
              <circle cx={0} cy={0} r={4} fill="#2563eb" />
              <text x={12} y={4} fontSize="12" fontWeight="500" fill="#1f2937">
                ৳137.000
              </text>
            </g>
            {/* Expense row */}
            <g transform="translate(-70, -25)">
              <circle cx={0} cy={0} r={4} fill="#a78bfa" />
              <text x={12} y={4} fontSize="12" fontWeight="500" fill="#1f2937">
                ৳100.000
              </text>
            </g>
            {/* Date row */}
            <text x={0} y={5} textAnchor="middle" fontSize="11" fill="#6b7280">
              20th september 2024
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default EarningsChart;
