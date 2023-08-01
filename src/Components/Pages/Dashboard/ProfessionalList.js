import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardActions, Button, Typography, Grid } from '@mui/material';

function ProfessionalList() {
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    // Replace this URL with the actual JSON file path on your server
    fetch('./prof.json')
      .then((response) => response.json())
      .then((data) => setProfessionals(data.professionals))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const cardStyle = {
    textAlign: 'center',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const boldTextStyle = {
    fontWeight: 'bold',
  };

  const cardActionsStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
        Professional's List                 </Typography>
      <Grid container spacing={2}>

        {professionals.map((professional, index) => (
          <Grid key={index} item xs={12} sm={12} md={6} lg={6}>
            <Card style={cardStyle}>
              <CardContent>
                <Typography variant="h6">
                  {professional.name}
                </Typography>
                <Typography variant="body1">
                  <span style={{ fontWeight: "bold" }}> </span>
                  <span style={{ fontWeight: "bold" }}>Mobile: </span>{professional.mobile}

                </Typography>
                <Typography variant="body1">
                  <span style={{ fontWeight: "bold" }}>     Email:</span> {professional.email}

                </Typography>

                <Typography variant="body1">
                  <span style={{ fontWeight: "bold" }}>    Gender:</span>{professional.gender}

                </Typography>

                <Typography variant="body1">
                  <span style={{ fontWeight: "bold" }}>   Country:</span> {professional.country}
                </Typography>

                <Typography variant="body1">
                  <span style={{ fontWeight: "bold" }}>     District:</span> {professional.district}

                </Typography>

                <Typography variant="body1">
                  <span style={{ fontWeight: "bold" }}>    Zip:</span> {professional.zip}
                </Typography>

                <Typography variant="body1">
                  <span style={{ fontWeight: "bold" }}>        Category:</span> {professional.category}

                </Typography>

                <Typography variant="body1">
                  <span style={{ fontWeight: "bold" }}>     Subcategory: </span> {professional.subcategory}

                </Typography>

                <Typography variant="body1">
                  <span style={{ fontWeight: "bold" }}>      Education:</span> {professional.education}
                </Typography>

              </CardContent>
              <CardActions style={cardActionsStyle}>
                <Button variant="contained" color="primary">
                  Message
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProfessionalList;
