"use client";

const StudentPieChart = () => {
  const data = [
    { label: "Male", value: 58, color: "#2563eb" },
    { label: "Female", value: 40, color: "#60a5fa" },
    { label: "Other", value: 2, color: "#f97316" },
  ];

  const total = 60;
  const radius = 80;
  const centerX = 100;
  const centerY = 100;

  const createPaths = () => {
    let currentAngle = -90; // Start from top
    const paths: { path: string; color: string }[] = [];

    data.forEach((item) => {
      const percentage = item.value;
      const angle = (percentage / 100) * 360;
      const startAngle = (currentAngle * Math.PI) / 180;
      const endAngle = ((currentAngle + angle) * Math.PI) / 180;

      const x1 = centerX + radius * Math.cos(startAngle);
      const y1 = centerY + radius * Math.sin(startAngle);
      const x2 = centerX + radius * Math.cos(endAngle);
      const y2 = centerY + radius * Math.sin(endAngle);

      const largeArcFlag = angle > 180 ? 1 : 0;

      const path = `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

      paths.push({ path, color: item.color });
      currentAngle += angle;
    });

    return paths;
  };

  const paths = createPaths();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Student Pi Chart</h2>
          <p className="text-sm text-gray-600 mt-1">September 2025</p>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative">
          <svg width="200" height="200" viewBox="0 0 200 200">
            {paths.map((pathData, index) => (
              <path
                key={index}
                d={pathData.path}
                fill={pathData.color}
                stroke="white"
                strokeWidth="2"
              />
            ))}
            {/* Center circle for donut effect */}
            <circle cx={centerX} cy={centerY} r={radius * 0.6} fill="white" />
            {/* Center text */}
            <text
              x={centerX}
              y={centerY}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-2xl font-bold fill-gray-800"
            >
              {total}
            </text>
          </svg>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-sm text-gray-700">• {item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentPieChart;

