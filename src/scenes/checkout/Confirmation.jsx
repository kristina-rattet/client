import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Confirmation = () => {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Get Ready!!!</AlertTitle>
        Your order has been received —{" "}
        <strong>and will be DashDelievered within 30 minutes!</strong>
      </Alert>
    </Box>
  );
};

export default Confirmation;
