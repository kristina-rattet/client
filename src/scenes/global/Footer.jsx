import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            DishDashDelivery
          </Typography>
          <div>
            DishDashDelivery is a fictious food delivery app 
            developed as my submission for MIT xPro's Women's Cohort Professional 
            Certificate in Coding's final capstone project. Any similarities to 
            real business entities, retaurant name. dishes. ingredients or images 
            are purely coincidental. 
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Our Philosophy</Typography>
          <Typography mb="30px">Participating Restaurants</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Contact Support</Typography>
          <Typography mb="30px">Request a Restaurant</Typography>
          <Typography mb="30px">Partner with Us</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            12345 Nomnom Street, Newport Beach, CA 92660
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: kristina.rattet@gmail.com
          </Typography>
          <Typography mb="30px">(415)555-9876</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
