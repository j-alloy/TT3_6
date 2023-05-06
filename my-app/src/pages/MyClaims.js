import React, { useState } from "react";
import ClaimsList from "../components/ClaimsList";
import Button from "@mui/material/Button";
import Modalform from "../components/Modalform";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Sidebar from "../components/Sidebar";

export default function MyClaims() {
  const [data, setData] = useState([
    {
      firstName: "alice",
      lastName: "tan",
      date: "22/1",
      claimId: 1245,
      purpose: 4321,
      amount: 130.5,
      currency: "EUR",
      status: "pending",
    },
    {
      firstName: "alice",
      lastName: "tan",
      date: "22/1",
      claimId: 1245,
      purpose: 4321,
      amount: 130.5,
      currency: "USD",
      status: "pending",
    },
  ]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Sidebar />
      <Box padding={10}>
        <Box mb={5} display="flex" justifyContent="space-between">
          <Typography variant="h3">My Claims</Typography>
          <Button variant="contained" onClick={handleClickOpen}>
            New Claim
          </Button>
        </Box>

        <Modalform open={open} setOpen={setOpen} />
        <ClaimsList data={data} open={open} setOpen={setOpen} />
      </Box>
    </div>
  );
}
