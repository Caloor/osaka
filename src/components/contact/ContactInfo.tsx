'use client';

import { Box, Typography, Paper, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { restaurants } from '@/data/restaurants';

export default function ContactInfo() {
  return (
    <Box>
      <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
        Nos Restaurants
      </Typography>
      {restaurants.map((restaurant) => (
        <Paper 
          key={restaurant.id} 
          elevation={0}
          sx={{ 
            p: 3, 
            mb: 3,
            backgroundColor: 'background.default',
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, color: 'secondary.main' }}>
            {restaurant.name}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LocationOnIcon sx={{ mr: 1, color: 'secondary.main' }} />
                <Typography variant="body1">{restaurant.location}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <PhoneIcon sx={{ mr: 1, color: 'secondary.main' }} />
                <Typography variant="body1">{restaurant.contact.phone}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <EmailIcon sx={{ mr: 1, color: 'secondary.main' }} />
                <Typography variant="body1">{restaurant.contact.email}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                <AccessTimeIcon sx={{ mr: 1, mt: 0.5, color: 'secondary.main' }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 500, mb: 0.5 }}>
                    Horaires d'ouverture :
                  </Typography>
                  {Object.entries(restaurant.hours).map(([day, hours]) => (
                    <Typography key={day} variant="body2" sx={{ mb: 0.5 }}>
                      {day.charAt(0).toUpperCase() + day.slice(1)} : {hours}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
}
