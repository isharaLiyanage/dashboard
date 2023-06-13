import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { mockDataInvoices as data } from "../data/mockData";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Full name", width: 130 },
  { field: "email", headerName: "Last name", width: 130 },
  {
    field: "cost",
    headerName: "Cost ($)",
    type: "number",
    width: 90,
  },
  {
    field: "phone",
    headerName: "phone",
    type: "number",
    width: 190,
  },
  {
    field: "date",
    headerName: "Date",
    type: "string",
    width: 150,
  },
];

const rows = data;

export default function Invoice() {
  return (
    <div
      style={{ height: 400, width: "100%" }}
      className=" dark:bg-slate-500  dark:text-white"
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
