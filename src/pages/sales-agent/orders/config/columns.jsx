import { formatRupiah } from "../../../../utils/format";
import StatusLabel from "../../../../components/ui/StatusLabel";
import { formatDate } from "../../../../utils/date";

import {
  formatStatusLabel,
  getStatusColor,
} from "../../../../utils/statusUtils";
import {
  ORDERS_STATUS_LABELS,
  ORDERS_STATUS_COLORS,
} from "../config/statusConfig";

export const ORDERS_COLUMNS_BASE = [
  { header: "No", accessor: "id" },
  { header: "Invoice", accessor: "invoice" },
  { header: "Customer", accessor: "customer" },
  {
    header: "Total",
    accessor: "total",
    render: (row) => <span>{formatRupiah(row.total)}</span>,
  },
  {
    header: "Date",
    accessor: "date",
    render: (row) => formatDate(row.date),
  },
  {
    header: "Status",
    accessor: "status",
    render: (row) => (
      <div className="flex justify-start">
        <StatusLabel
          variant={getStatusColor(row.status, ORDERS_STATUS_COLORS)}
          label={formatStatusLabel(row.status, ORDERS_STATUS_LABELS)}
        />
      </div>
    ),
  },
];
