import { useMemo } from "react";
import { EMPLOYEES } from "../data/employeeData";

const getMonthName = (monthIndex) =>
  new Date(0, monthIndex).toLocaleString("en-US", { month: "long" });

export const useReportData = ({ isManager, user, isYear, debouncedSearch }) => {
  //  -------------------------------------------------------------------------------------  Raw data
  const rawReportData = useMemo(() => {
    if (!isManager) {
      return Array.from({ length: 12 }, (_, monthIndex) => ({
        salesName: user.name,
        monthIndex,
        month: getMonthName(monthIndex),
        year: isYear,
        transactions: 150 + monthIndex * 100,
        revenue: 1_500_000 + monthIndex * 200_000,
      }));
    }

    return EMPLOYEES.filter((emp) => emp.role === "sales").flatMap((emp) =>
      Array.from({ length: 12 }, (_, monthIndex) => ({
        salesName: emp.name,
        monthIndex,
        month: getMonthName(monthIndex),
        year: isYear,
        transactions: 300 + monthIndex * 150,
        revenue: 5_000_000 + monthIndex * 300_000,
      }))
    );
  }, [isYear, isManager, user?.name]);

  //  -------------------------------------------------------------------------------------  Filter
  const filteredRawData = useMemo(() => {
    if (!isManager || !debouncedSearch.trim()) return rawReportData;
    const term = debouncedSearch.toLowerCase();
    return rawReportData.filter((item) =>
      item.salesName.toLowerCase().includes(term)
    );
  }, [rawReportData, debouncedSearch, isManager]);

  //  -------------------------------------------------------------------------------------  Aggregate
  const aggregatedData = useMemo(() => {
    const result = Array(12)
      .fill(null)
      .map((_, monthIndex) => ({
        id: monthIndex + 1,
        month: getMonthName(monthIndex),
        year: isYear,
        transactions: 0,
        revenue: 0,
      }));

    filteredRawData.forEach((item) => {
      result[item.monthIndex].transactions += item.transactions;
      result[item.monthIndex].revenue += item.revenue;
    });

    return result;
  }, [filteredRawData, isYear]);

  return { aggregatedData };
};
