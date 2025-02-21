'use client';

import { Box, Typography, Grid, Paper } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import PeopleIcon from '@mui/icons-material/People';

const philosophyItems = [
  {
    icon: <RestaurantIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
    title: "Excellence Culinaire",
    description: "Nous nous engageons à créer des expériences gastronomiques exceptionnelles en utilisant les meilleurs ingrédients et techniques traditionnelles."
  },
  {
    icon: <LocalDiningIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
    title: "Qualité Premium",
    description: "Notre engagement envers la qualité se reflète dans notre sélection rigoureuse des produits et notre collaboration avec les meilleurs producteurs locaux."
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
    title: "Service Personnalisé",
    description: "Nous croyons en la création d'une expérience unique pour chaque client, avec un service attentionné et personnalisé."
  }
];

export default function PhilosophySection() {
  return (
    <Box sx={{ my: 8 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
        Notre Philosophie
      </Typography>
      <Grid container spacing={4}>
        {philosophyItems.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper 
              elevation={0}
              sx={{ 
                p: 4, 
                height: '100%',
                textAlign: 'center',
                backgroundColor: 'background.default',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)'
                }
              }}
            >
              <Box sx={{ mb: 2 }}>
                {item.icon}
              </Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {item.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {item.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
