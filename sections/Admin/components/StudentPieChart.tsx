"use client";

const StudentPieChart = () => {
  const data = [
    { label: "Male", value: 58, color: "#2563eb" },
    { label: "Female", value: 40, color: "#60a5fa" },
    { label: "Other", value: 2, color: "#f97316" },
  ];

  const total = 60;
  const radius = 65;
  const centerX = 150;
  const centerY = 150;
  const innerRadius = 45;

  const createPaths = () => {
    let currentAngle = -90; // Start from top
    const paths: {
      path: string;
      color: string;
      midAngle: number;
      labelX: number;
      labelY: number;
      lineX1: number;
      lineY1: number;
      lineX2: number;
      lineY2: number;
    }[] = [];

    data.forEach((item) => {
      const percentage = item.value;
      const angle = (percentage / 100) * 360;
      const startAngle = (currentAngle * Math.PI) / 180;
      const endAngle = ((currentAngle + angle) * Math.PI) / 180;
      const midAngle = ((currentAngle + angle / 2) * Math.PI) / 180;

      // Outer arc points
      const x1 = centerX + radius * Math.cos(startAngle);
      const y1 = centerY + radius * Math.sin(startAngle);
      const x2 = centerX + radius * Math.cos(endAngle);
      const y2 = centerY + radius * Math.sin(endAngle);

      // Inner arc points
      const x3 = centerX + innerRadius * Math.cos(endAngle);
      const y3 = centerY + innerRadius * Math.sin(endAngle);
      const x4 = centerX + innerRadius * Math.cos(startAngle);
      const y4 = centerY + innerRadius * Math.sin(startAngle);

      const largeArcFlag = angle > 180 ? 1 : 0;

      // Create donut path
      const path = `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4} Z`;

      // Calculate label position (outside the chart)
      const labelDistance = radius + 50;
      const labelX = centerX + labelDistance * Math.cos(midAngle);
      const labelY = centerY + labelDistance * Math.sin(midAngle);

      // Calculate line end points - start from outer edge
      const lineX1 = centerX + radius * Math.cos(midAngle);
      const lineY1 = centerY + radius * Math.sin(midAngle);
      // Line extends a bit further for better visual
      const lineX2 = centerX + (labelDistance - 10) * Math.cos(midAngle);
      const lineY2 = centerY + (labelDistance - 10) * Math.sin(midAngle);

      paths.push({
        path,
        color: item.color,
        midAngle: ((currentAngle + angle / 2) * Math.PI) / 180,
        labelX,
        labelY,
        lineX1,
        lineY1,
        lineX2,
        lineY2,
      });
      currentAngle += angle;
    });

    return paths;
  };

  const paths = createPaths();

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            Student Pi Chart
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            September 2025
          </p>
        </div>
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

      <div className="flex items-center justify-center py-6">
        <div className="relative w-full max-w-[320px] mx-auto">
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 300 300"
            className="aspect-square"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Draw paths */}
            {paths.map((pathData, index) => (
              <g key={index}>
                {/* Main donut segment */}
                <path
                  d={pathData.path}
                  fill={pathData.color}
                  stroke="white"
                  strokeWidth="3"
                />
                {/* Lines from segments to labels */}
                <line
                  x1={pathData.lineX1}
                  y1={pathData.lineY1}
                  x2={pathData.lineX2}
                  y2={pathData.lineY2}
                  stroke={pathData.color}
                  strokeWidth="2"
                  opacity="0.7"
                />
                {/* Labels with percentages */}
                <text
                  x={pathData.labelX}
                  y={pathData.labelY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="13"
                  fontWeight="600"
                  fill={pathData.color}
                >
                  {data[index].label} {data[index].value}%
                </text>
              </g>
            ))}
            {/* Center circle for donut effect with shadow */}
            <circle
              cx={centerX}
              cy={centerY}
              r={innerRadius}
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            {/* Center text */}
            <text
              x={centerX}
              y={centerY}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="36"
              fontWeight="700"
              fill="#111827"
            >
              {total}
            </text>
          </svg>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 sm:mt-8 flex flex-wrap gap-5 sm:gap-6 justify-center items-center">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div
              className="w-3.5 h-3.5 rounded-full shrink-0"
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-sm font-medium text-gray-800">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentPieChart;
