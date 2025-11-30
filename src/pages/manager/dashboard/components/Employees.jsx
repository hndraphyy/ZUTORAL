import { FaUser, FaUserClock, FaUserTimes } from "react-icons/fa";
import { getDashboardData } from "../utils/dashboardData";

const EmployeesDashboard = () => {
  const data = getDashboardData();
  return (
    <div>
      <h1 className="text-base lg:text-lg 2xl:text-2xl mb-6 font-medium text-gray-600">
        Employees
      </h1>

      <div className="flex justify-between flex-col h-52">
        <div className="flex items-center gap-4">
          <FaUser className="w-10 h-10 text-purple" />
          <p className="text-xl lg:text-2xl 2xl:text-4xl font-bold text-gray-600">
            {data.employees.all}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <FaUserClock className="w-10 h-10 text-purple" />
          <p className="text-xl lg:text-2xl 2xl:text-4xl font-bold text-gray-600">
            {data.employees.active}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <FaUserTimes className="w-10 h-10 text-purple" />
          <p className="text-xl lg:text-2xl 2xl:text-4xl font-bold text-gray-600">
            {data.employees.inactive}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeesDashboard;
