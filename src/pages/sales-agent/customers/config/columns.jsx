import { formatDate } from "../../../../utils/date";

export const CUSTOMER_COLUMNS_BASE = [
  { header: "No", accessor: "id" },
  { header: "Name", accessor: "name" },
  { header: "Phone", accessor: "phone" },
  { header: "Email", accessor: "email" },
  {
    header: "Join Date",
    accessor: "joinDate",
    render: (row) => <span>{formatDate(row.joinDate)}</span>,
  },
];
