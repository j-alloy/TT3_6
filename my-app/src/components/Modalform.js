import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export default function FormDialog({ open, setOpen, modalData = null }) {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    if (modalData) {
      setData(modalData);
    }
  }, [modalData]);

  const [data, setData] = React.useState({});

  const handleChange = (event) => {
    let temp = data;
    switch (event.target.id) {
      case "firstName":
        temp.firstName = event.target.value;
        break;
      case "lastName":
        temp.lastName = event.target.value;
        break;
      case "date":
        temp.date = event.target.value;
        break;
      case "purpose":
        temp.purpose = event.target.value;
        break;
      case "claimAmount":
        temp.amount = event.target.value;
        break;
      case "currency":
        temp.currency = event.target.value;
        break;
    }
    setData(temp);
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Claim</DialogTitle>
        <br></br>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoFocus
                value={data.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="family-name"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="date"
                required
                fullWidth
                id="date"
                label="Date"
                name="date"
                value={data.date}
                onChange={handleChange}
              />
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
              </LocalizationProvider> */}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="purpose"
                required
                fullWidth
                id="purpose"
                label="Purpose"
                name="purpose"
                value={data.purpose}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                autoComplete="claim-amount"
                required
                fullWidth
                id="claimAmount"
                label="Claim Amount"
                name="claim_amount"
                autoFocus
                value={data.amount}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="currency"
                select
                label="Select"
                defaultValue="EUR"
                helperText="Please select your currency"
                value={data.currency}
                onChange={handleChange}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
            justify="center"
          >
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Create Claim
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </div>
  );
}
