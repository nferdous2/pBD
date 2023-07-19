import { Grid, Card, CardMedia, Typography, Container } from "@mui/material";
import React from "react";
import bimg1 from "../../../img/Rectangle 3.png";
import bimg2 from "../../../img/Rectangle 4.png";
import bimg3 from "../../../img/Rectangle 5.png";
import bimg4 from "../../../img/Rectangle 6.png";

import "../../../Style/Style.css";

const HService = () => {
  const cardStyles = {
    width: "333.759px",
    height: "333.759px",
    position: "relative",
  };

  const overlayStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#FFF",
    fontFamily: "SF UI Display",
    fontSize: "27.745px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "34.273px",
    textAlign: "center",
    background: "rgba(0, 0, 0, 0.30)",
  };

  const containerStyles = {
      
    clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)"
    
  };

  return (
    <div style={containerStyles}>
      <Container sx={{mb:5}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} className="cardholder">
            <Card className="curved1">
              <CardMedia
                component="img"
                image={bimg1}
                alt="Image 1"
                style={cardStyles}
              />
              <Typography variant="h6" sx={overlayStyles}>
                Electrician
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="cardholder">
            <Card className="curved2">
              <CardMedia
                component="img"
                image={bimg2}
                alt="Image 2"
                style={cardStyles}
              />
              <Typography variant="h6" sx={overlayStyles}>
                Carpenter{" "}
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="cardholder">
            <Card className="curved3">
              <CardMedia
                component="img"
                image={bimg3}
                alt="Image 3"
                style={cardStyles}
              />
              <Typography variant="h6" sx={overlayStyles}>
                Technician{" "}
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="cardholder">
            <Card className="curved4">
              <CardMedia
                component="img"
                image={bimg4}
                alt="Image 4"
                style={cardStyles}
              />
              <Typography variant="h6" sx={overlayStyles}>
                Beautician{" "}
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HService;
