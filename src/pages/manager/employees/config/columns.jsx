import StatusLabel from "../../../../components/ui/StatusLabel";
import {
  formatStatusLabel,
  getStatusColor,
} from "../../../../utils/statusUtils";
import {
  EMPLOYEE_STATUS_LABELS,
  EMPLOYEE_STATUS_COLORS,
} from "../config/statusConfig";

export const EMPLOYEE_COLUMNS_BASE = [
  { header: "No", accessor: "id" },
  { header: "Name", accessor: "name" },
  { header: "Username", accessor: "username" },
  { header: "Email", accessor: "email" },
  {
    header: "Status",
    accessor: "status",
    render: (row) => (
      <div className="flex justify-start">
        <StatusLabel
          variant={getStatusColor(row.status, EMPLOYEE_STATUS_COLORS)}
          label={formatStatusLabel(row.status, EMPLOYEE_STATUS_LABELS)}
        />
      </div>
    ),
  },
];
