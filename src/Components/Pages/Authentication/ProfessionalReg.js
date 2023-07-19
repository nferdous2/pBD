import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import pic1 from "../../../img/pic1.png";
import pic3 from "../../../img/pic3.png";
import { Link } from "react-router-dom";

const FileUpload = ({ label, value, onChange, accept }) => {
  const inputId = `${label}-input`;

  return (
    <Grid
      item
      xs={12}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TextField
        variant="outlined"
        sx={{ width: "100%", color: "black" }}
        value={value ? value.name : ""}
        disabled
      />
      <input
        accept={accept}
        id={inputId} // Add the id attribute
        type="file"
        onChange={onChange}
        style={{ display: "none" }}
        required
      />
      <Button
        component="span"
        onClick={() => document.getElementById(inputId).click()} // Use the inputId to trigger click
        sx={{
          width: "80%",
          ml: "10%",
          background: "blue",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {label}
      </Button>
    </Grid>
  );
};

const ProfessionalReg = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };
  const logoStyle = {
    width: "80%",
    height: "50%",
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
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h5" align="center">
                      Professional Information
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" align="center">
                      Please enter your professional information
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="category"
                      label="Category"
                      required
                    >
                      <MenuItem value="">--- Select Category ---</MenuItem>
                      <MenuItem value="category1">Electrician</MenuItem>
                      <MenuItem value="category2">Plumber</MenuItem>
                      <MenuItem value="category3">Carpenter</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="subcategory"
                      label="Subcategory"
                      required
                    >
                      <MenuItem value="">--- Select Subcategory ---</MenuItem>
                      <MenuItem value="subcategory1">Hair Saloon</MenuItem>
                      <MenuItem value="subcategory2">Car</MenuItem>
                      <MenuItem value="subcategory3">Computer</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="education"
                      label="Latest Education"
                      required
                    >
                      <MenuItem value="">--- Select Education ---</MenuItem>
                      <MenuItem value="education1">
                        PEC and Equivalent
                      </MenuItem>
                      <MenuItem value="education2">
                        JSC and Equivalent
                      </MenuItem>
                      <MenuItem value="education3">
                        SSC and Equivalent
                      </MenuItem>
                      <MenuItem value="education4">
                        HSC and Equivalent
                      </MenuItem>
                      <MenuItem value="education5">Undergraduate</MenuItem>
                      <MenuItem value="education6">Graduate</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <FileUpload
                      label="Upload NID(pdf)"
                      // value={cv}
                      // onChange={handleCVChange}
                      accept="application/pdf"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FileUpload
                      label="Upload Certificate (PDF)"
                      // value={pdf}
                      // onChange={handlePdfChange}
                      accept="application/pdf"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Link to="/proinfo">
                      <Button
                        sx={{ width: "50%" }}
                        variant="contained"
                        type="submit"
                        // onClick={handleSubmit}
                      >
                        Next
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Container>
        </Grid>
        <Grid item xs={12} md={3}>
          <img src={pic3} alt="Logo" style={logoStyle} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfessionalReg;
