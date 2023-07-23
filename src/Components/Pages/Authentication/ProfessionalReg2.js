import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import pic1 from "../../../img/pic1.png";
import pic3 from "../../../img/pic3.png";
const ProfessionalReg2 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };
  const logoStyle = {
    // width: "80%",
    // height: "50%",
  };
  return (
    <Box
    sx={{
      flexGrow: 1,
      mt: 5,
      textAlign: "center",
      fontFamily: "SF UI Display",
      position: "relative", // Ensure the parent container has position set to relative

}}
>
<svg
  viewBox="0 0 1440 320"
  style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    top:"20%",

    transform: "rotate(360deg)", // Rotate the SVG 180 degrees to flip it upside down
  }}
>
  <path
    opacity="0.14"
    d="M1439.06 244.889V54.3183C1425.89 47.2518 1412.31 40.9853 1398.39 35.553C1337.73 12.125 1271.56 7.13626 1207.1 9.13176C1142.65 11.1273 1079.72 20.1646 1018.66 40.9638C958.531 61.4561 902.081 91.3118 848.337 124.928C796.531 157.374 743.535 189.725 682.691 201.678C622.673 213.536 563.499 201.678 509.486 173.972C420.878 128.516 354.374 45.4153 258.705 12.7966C205.882 -5.1821 147.821 -2.70692 94.2106 10.8778C66.5998 18.0348 33.9619 29.1827 13.4313 49.8476C8.39558 55.022 3.89564 60.6919 0 66.771L0 244.889H1439.06Z"
    fill="#0D6EFD"
  />
</svg>
    {/* 1st section  */}
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      justifyContent="center"
      alignItems="center"
      sx={{ mb: 5 }}
    >
      <Grid item xs={12} md={4}>
        <img src={pic1} alt="Logo" style={logoStyle} />
      </Grid>
      <Grid item xs={12} md={4}>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" align="center">
                  Additional Information
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" align="center">
                  Please enter your additional information
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth id="gender" label="Gender" required>
                  <MenuItem value="">--- Select Gender ---</MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="country"
                  label="Country"
                  select
                  required
                >
                  <MenuItem value="">--- Select Country ---</MenuItem>
                  <MenuItem value="Afghanistan">Afghanistan</MenuItem>
                  <MenuItem value="Albania">Albania</MenuItem>
                  <MenuItem value="Algeria">Algeria</MenuItem>
                </TextField>
              </Grid>
              {/* <Grid item xs={12}>
                <Select fullWidth id="country" label="Country" required>
                  <MenuItem value="">--- Select Country ---</MenuItem>
                  {Object.keys(countries).map((countryCode) => (
                    <MenuItem key={countryCode} value={countryCode}>
                      {countries[countryCode]}
                    </MenuItem>
                  ))}
                </Select>
              </Grid> */}
              <Grid item xs={12}>
                <TextField fullWidth id="state" label="State" required />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth id="city" label="City" required />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth id="zip" label="Zip Code" required />
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="center">
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ width:"50%"}}
                    // onClick={handleSubmit}
                  >
                    Sign Up
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Box>
      </Box>
      </Grid>
      <Grid item xs={12} md={4}  sx={{mt:5}}>
          <img src={pic3} alt="Logo" style={logoStyle} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfessionalReg2;
