import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
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
        <Grid item md={3} >
          <img src={pic1} alt="Logo" style={logoStyle} />
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding:"5px"
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
                  <Link href="/HTML/login.html">Log In</Link>
                </Typography>
              </Box>
            </Box>
          </Container>
        </Grid>
        <Grid item  md={3}>
          <img src={pic3} alt="Logo" style={logoStyle} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserReg;
