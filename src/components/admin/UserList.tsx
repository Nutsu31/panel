import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils";
import { v4 as uuid } from "uuid";
import { UserType } from "../../types/type";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "email", headerName: "Email", width: 240 },
  { field: "payment", headerName: "Payment", width: 130 },
  { field: "isActivated", headerName: "User Activated", width: 130 },

  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

export default function UserList() {
  const [users, setUsers] = useState<Array<UserType>>([]);
  const addNewId = users?.map((item) => ({ ...item, id: uuid() }));
  const max600px = useMediaQuery("(max-width:600px)");
  const max1000px = useMediaQuery("(max-width:1000px)");

  useEffect(() => {
    async function getUsers() {
      const res = await axios.get(`${BASE_URL}users`);
      const data = res.data;
      console.log(data);
      if (data.status === "ok") return setUsers(data.getAllUsers);
      return;
    }
    getUsers();
  }, []);

  return (
    <Box
      sx={{
        height: 700,
        width: max600px ? "100%" : "80%",
        background: "white",
        margin: max1000px ? "48px 0 0 0 " : 6,
        borderRadius: 10,
        position: max600px ? "absolute" : "",
        top: 0,
        left: 0,
      }}
    >
      <Typography
        variant="h3"
        sx={{ textAlign: "center", padding: 2, fontSize: { sm: 22, xs: 20 } }}
      >
        Users
      </Typography>
      <DataGrid
        rows={addNewId}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Box>
  );
}
