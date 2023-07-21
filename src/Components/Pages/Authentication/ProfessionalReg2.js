import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
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
    }}
  >
    {/* 1st section  */}
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      justifyContent="center"
      alignItems="center"
      sx={{ mb: 5 }}
    >
      <Grid item xs={12} md={3}>
        <img src={pic1} alt="Logo" style={logoStyle} />
      </Grid>
      <Grid item xs={12} md={6}>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Card>
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
        </Card>
      </Box>
      </Grid>
      <Grid item xs={12} md={3}  sx={{mt:5}}>
          <img src={pic3} alt="Logo" style={logoStyle} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfessionalReg2;
