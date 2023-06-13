import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { mockDataTeam as data } from "../data/mockData";
import Header from "../components/Header";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Full Name", width: 130 },
  { field: "email", headerName: "Email", width: 160 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "number",
    width: 190,
  },
  {
    field: "access",
    headerName: "Access",
    type: "text",
    width: 80,
  },
];

const rows = data;

export default function Team() {
  return (
    <>
      <Header title="Users" subtitle="User Details" />
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
    </>
  );
}
