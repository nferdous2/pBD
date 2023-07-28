import React from "react";
import {
  Box,
  Button,
  CardContent,
  Container,
  Grid,
  MenuItem,
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
          background: "#1F51FF",
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
  const logoStyle = {
    // width: "50%",
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
          top: "20%",
          width: "100%",
          height: "100%",
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
      {/* 1st section  */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 5 }}
      >
        <Grid item xs={12} md={2} sx={{ mt: 5 }}>
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
            <Box>
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
                  <Grid item xs={6}>
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
                  <Grid item xs={6}>
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
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="education"
                      label="Latest Education"
                      required
                    >
                      <MenuItem value="">--- Select Education ---</MenuItem>
                      <MenuItem value="education1">PEC and Equivalent</MenuItem>
                      <MenuItem value="education2">JSC and Equivalent</MenuItem>
                      <MenuItem value="education3">SSC and Equivalent</MenuItem>
                      <MenuItem value="education4">HSC and Equivalent</MenuItem>
                      <MenuItem value="education5">Undergraduate</MenuItem>
                      <MenuItem value="education6">Graduate</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={6}>
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
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12} md={2} sx={{ marginTop: "9%" }}>
          <img src={pic3} alt="Logo" style={logoStyle} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfessionalReg;
