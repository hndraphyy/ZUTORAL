import { formatRupiah } from "../../../../utils/format";

export const REPORT_COLUMNS_BASE = [
  { header: "Month", accessor: "month", sortable: false },
  { header: "Year", accessor: "year", sortable: false },
  { header: "Total Transactions", accessor: "transactions", sortable: false },
  {
    header: "Total Revenue",
    accessor: "revenue",
    sortable: false,
    render: (row) => <span>{formatRupiah(row.revenue)}</span>,
  },
];
