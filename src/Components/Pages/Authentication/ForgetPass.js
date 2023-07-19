import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  CardHeader,
  Container,
} from "@mui/material";
import logo from "../../../img/logo.png";
import { Link } from "react-router-dom";

const ForgetPass = () => {
  const logoStyle = {
    maxWidth: 200,
    marginBottom: 10,
  };
  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card>
        <img src={logo} alt="Logo" style={logoStyle} />
        <CardHeader title="Forgot Password" />
        <CardContent>
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
                <Link to="/newpass">
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                  >
                    Next
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ForgetPass;
