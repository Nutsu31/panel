import { Box, useMediaQuery } from "@mui/material";
import Dashboard from "./Dashboard";
import { useState } from "react";
import UploadFile from "./UploadFile";
import UserList from "./UserList";

const AdminPanel = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const max600 = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        background: "#dddddd",
        alignItems: max600 ? "flex-start" : "",
      }}
    >
      <Dashboard activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
      {activeBtn === 1 ? <UploadFile /> : activeBtn === 2 ? <UserList /> : null}
    </Box>
  );
};

export default AdminPanel;
