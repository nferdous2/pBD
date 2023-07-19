import React from "react";
import logo from "../../../img/logo.png";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  TextField,
} from "@mui/material";

const SetNewPass = () => {
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
                  id="password"
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Confirm{" "}
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SetNewPass;
