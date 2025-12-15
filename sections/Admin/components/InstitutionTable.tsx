"use client";

const InstitutionTable = () => {
  const institutions = [
    {
      name: "Viqarunnisa school and College",
      type: "college",
      students: 2,
      staff: 1,
      revenue: "৳1,600,000",
      status: "Active",
    },
    {
      name: "Police Line High School",
      type: "school",
      students: 1,
      staff: 1,
      revenue: "৳300,000",
      status: "Active",
    },
    {
      name: "Pilot High School",
      type: "school",
      students: 2,
      staff: 2,
      revenue: "৳1,000,000",
      status: "Active",
    },
    {
      name: "University of Dhaka",
      type: "university",
      students: 2,
      staff: 1,
      revenue: "৳9,000,000",
      status: "Active",
    },
    {
      name: "Tech Land Institute",
      type: "college",
      students: 1,
      staff: 1,
      revenue: "৳600,000",
      status: "Active",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "college":
        return "bg-green-100 text-green-800";
      case "school":
        return "bg-blue-100 text-blue-800";
      case "university":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 md:p-6">
      <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 md:mb-6">
        Institution Overview
      </h2>

      <div className="overflow-x-auto -mx-4 sm:-mx-5 md:-mx-6 px-4 sm:px-5 md:px-6">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700">
                Institution
              </th>
              <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700">
                Type
              </th>
              <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700">
                Students
              </th>
              <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700">
                Staff
              </th>
              <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700">
                Revenue
              </th>
              <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {institutions.map((institution, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-800 font-medium">
                  {institution.name}
                </td>
                <td className="py-3 sm:py-4 px-2 sm:px-4">
                  <span
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
                      institution.type
                    )}`}
                  >
                    {institution.type}
                  </span>
                </td>
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-700">
                  {institution.students}
                </td>
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-700">
                  {institution.staff}
                </td>
                <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-700 font-medium">
                  {institution.revenue}
                </td>
                <td className="py-3 sm:py-4 px-2 sm:px-4">
                  <span className="px-2 sm:px-3 py-1 bg-transparent border border-green-600 text-green-600 rounded-lg text-xs font-medium">
                    {institution.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstitutionTable;
