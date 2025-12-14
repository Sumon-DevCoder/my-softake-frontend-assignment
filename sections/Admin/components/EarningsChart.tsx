"use client";

const EarningsChart = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
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
    .map((value, index) => `${index === 0 ? "M" : "L"} ${getX(index)} ${getY(value)}`)
    .join(" ");

  // Generate path for expense line
  const expensePath = expenseData
    .map((value, index) => `${index === 0 ? "M" : "L"} ${getX(index)} ${getY(value)}`)
    .join(" ");

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Earnings</h2>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      {/* Legend */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <span className="text-sm text-gray-600">Income</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
          <span className="text-sm text-gray-600">Expense</span>
        </div>
      </div>

      {/* Chart */}
      <div className="relative w-full overflow-x-auto">
        <svg width="100%" height={chartHeight + 40} viewBox={`0 0 ${chartWidth + 40} ${chartHeight + 40}`} className="min-w-[600px]">
          {/* Y-axis labels */}
          {[0, 50, 100, 150, 200].map((value) => (
            <g key={value}>
              <line
                x1={20}
                y1={getY(value) + 20}
                x2={chartWidth + 20}
                y2={getY(value) + 20}
                stroke="#e5e7eb"
                strokeWidth={1}
                strokeDasharray="2,2"
              />
              <text x={15} y={getY(value) + 25} textAnchor="end" className="text-xs fill-gray-500">
                {value}K
              </text>
            </g>
          ))}

          {/* X-axis labels */}
          {months.map((month, index) => (
            <text
              key={index}
              x={getX(index) + 20}
              y={chartHeight + 35}
              textAnchor="middle"
              className="text-xs fill-gray-500"
            >
              {month}
            </text>
          ))}

          {/* Income line */}
          <path
            d={incomePath}
            fill="none"
            stroke="#2563eb"
            strokeWidth={2}
            transform="translate(20, 20)"
          />

          {/* Expense line */}
          <path
            d={expensePath}
            fill="none"
            stroke="#a78bfa"
            strokeWidth={2}
            transform="translate(20, 20)"
          />

          {/* Tooltip line for September */}
          <line
            x1={getX(8) + 20}
            y1={20}
            x2={getX(8) + 20}
            y2={chartHeight + 20}
            stroke="#2563eb"
            strokeWidth={1}
            strokeDasharray="4,4"
          />

          {/* Data points for September */}
          <circle
            cx={getX(8) + 20}
            cy={getY(137) + 20}
            r={4}
            fill="#2563eb"
          />
          <circle
            cx={getX(8) + 20}
            cy={getY(100) + 20}
            r={4}
            fill="#a78bfa"
          />

          {/* Tooltip */}
          <g transform={`translate(${getX(8) + 20}, ${getY(180) + 20})`}>
            <rect
              x={-60}
              y={-50}
              width={120}
              height={50}
              fill="#1e40af"
              rx={4}
            />
            <text x={0} y={-30} textAnchor="middle" className="text-xs fill-white font-medium">
              ৳137.000
            </text>
            <text x={0} y={-15} textAnchor="middle" className="text-xs fill-white font-medium">
              ৳100.000
            </text>
            <text x={0} y={0} textAnchor="middle" className="text-xs fill-white">
              20th september 2024
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default EarningsChart;

