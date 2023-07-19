import React from "react";
import { Box, Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import logo from "../../../img/Group 39875.svg";
import { Link } from "react-router-dom";
import pic1 from "../../../img/pic1.png";
import pic2 from "../../../img/pic2.png";
import pic3 from "../../../img/pic3.png";
import pic4 from "../../../img/Group 39872.svg";

const Login = () => {
  const logoStyle = {
    // width: "136.2px",
    // height/: "191.27px",
  };
  const styles = {
    box1: {
      borderRadius: "8.158px",
      border: "2px solid #0D6EFD",
      width: "170.449px",
      height: "170.297px",
      padding: "9.178px 50.477px",
      background: "#0D6EFD",
      color: "#FFF",
    },
    box2: {
      borderRadius: "8.158px",
      border: "2px solid #0D6EFD",
      background: "#FFF",
      width: "170.449px",
      height: "170.297px",
      padding: "9.178px 50.477px",
      color: "#0D6EFD",
    },
  };

  const img = {
    // width: "150%",
    // height: "100%",
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
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 5 }}
      >
        <Grid item xs={false} sm={false} md={5} lg={5}>
          <img src={logo} alt="Logo" style={logoStyle} />
        </Grid>
        <Grid item xs={12} sm={8} md={2} lg={2}>
          <Typography sx={{ fontWeight: 600, fontSize: 32 }}>
          Sign in now          </Typography>
          <Typography
            variant="p"
            sx={{
              mb: 5,
              color: "#7D848D",
              fontSize: 19,
              fontWeight: 500,
            }}
          >
          Please sign in to <br></br>
continue with this site 
          </Typography>
        </Grid>
        <Grid item xs={false} sm={false} md={5} lg={5}>
          <img src={logo} alt="Logo" style={logoStyle} />
        </Grid>
      </Grid>
      {/* 2nd section  */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 12 }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={4}>
        <img src={pic2} alt="Logo" style={img} />

        </Grid>

        <Grid
          item
          xs={12}
          md={4}
     
        >
            <form>
                  <Grid container spacing={2}>
                   
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
                        id="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                      />
                    </Grid>
                  
                  </Grid>
               
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                  >
                    Sign In
                  </Button>
                </form>
         
        </Grid>

        <Grid item md={4}>           <img src={pic4} alt="Logo" />
</Grid>
      </Grid>
     
    </Box>
  );
};

export default Login;
