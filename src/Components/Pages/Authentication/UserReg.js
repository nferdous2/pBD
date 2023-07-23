import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import pic1 from "../../../img/pic1.png";
import pic3 from "../../../img/pic3.png";
const UserReg = () => {
  const logoStyle = {
    width: "80%",
    // height: "50%",
  };
  const [state, setState] = useState({});

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad } = state;
  return (
    <div>
       <svg
        viewBox="0 0 1440 320"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          top:"15%",
          zIndex: -1,
          transform: "rotate(360deg)", // Rotate the SVG 180 degrees to flip it upside down
        }}
      >
        <path
          opacity="0.14"
          d="M1439.06 244.889V54.3183C1425.89 47.2518 1412.31 40.9853 1398.39 35.553C1337.73 12.125 1271.56 7.13626 1207.1 9.13176C1142.65 11.1273 1079.72 20.1646 1018.66 40.9638C958.531 61.4561 902.081 91.3118 848.337 124.928C796.531 157.374 743.535 189.725 682.691 201.678C622.673 213.536 563.499 201.678 509.486 173.972C420.878 128.516 354.374 45.4153 258.705 12.7966C205.882 -5.1821 147.821 -2.70692 94.2106 10.8778C66.5998 18.0348 33.9619 29.1827 13.4313 49.8476C8.39558 55.022 3.89564 60.6919 0 66.771L0 244.889H1439.06Z"
          fill="#0D6EFD"
        />
      </svg>
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
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 5 }}
      >
        <Grid item md={4} >
          <img src={pic1} alt="Logo" style={logoStyle} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{border:"none"}}>
              <Typography
                sx={{
                  fontSize: 32,
                  fontWeight: 600,
                  fontFamily: "SF UI Display",
                }}
              >
                Sign Up Now
              </Typography>

              <Box>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  align="center"
                  gutterBottom
                  sx={{ color: "#7D848D", fontWeight: 500, fontSize: "20" }}
                >
                  Please fill the details to <br></br>
                  create an account{" "}
                </Typography>
                <form>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        id="first-name"
                        label="First Name"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="last-name"
                        label="Last Name"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="email"
                        label="Email"
                        type="email"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="phone"
                        label="Mobile Number"
                        type="tel"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="confirm-password"
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Box sx={{ display: "flex" }}>
                    <FormControl
                      sx={{ m: 3 }}
                      component="fieldset"
                      variant="standard"
                    >
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={gilad}
                              onChange={handleChange}
                              name="gilad"
                            />
                          }
                          label="I agree with ProfessionalBD Privacy Policy"
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={gilad}
                              onChange={handleChange}
                              name="gilad"
                            />
                          }
                          label="I agree with the Terms and Conditions"
                        />
                      </FormGroup>
                    </FormControl>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                  >
                    Sign Up
                  </Button>
                </form>
                <Typography variant="body2" align="center" gutterBottom>
                  Already have an account?{" "}
                  <Link to="/login">Log In</Link>
                </Typography>
              </Box>
            </Box>
          </Container>
        </Grid>
        <Grid item  md={4}>
          <img src={pic3} alt="Logo" style={logoStyle} />
        </Grid>
      </Grid>
    </Box>
    </div>

  );
};

export default UserReg;
