import { formatRupiah } from "../../../../utils/format";
import StatusLabel from "../../../../components/ui/StatusLabel";

import {
  formatStatusLabel,
  getStatusColor,
} from "../../../../utils/statusUtils";
import { PRODUCT_STATUS_LABELS, PRODUCT_STATUS_COLORS } from "./statusConfig";

export const PRODUCT_COLUMNS_BASE = [
  { header: "No", accessor: "id" },
  { header: "Name", accessor: "name" },
  {
    header: "Price",
    accessor: "price",
    render: (row) => <span>{formatRupiah(row.price)}</span>,
  },
  { header: "Stock", accessor: "stock" },
  { header: "Category", accessor: "category" },
  {
    header: "Status",
    accessor: "status",
    render: (row) => (
      <div className="flex justify-start">
        <StatusLabel
          variant={getStatusColor(row.status, PRODUCT_STATUS_COLORS)}
          label={formatStatusLabel(row.status, PRODUCT_STATUS_LABELS)}
        />
      </div>
    ),
  },
];
