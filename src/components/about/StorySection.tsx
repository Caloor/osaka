'use client';

import { Box, Typography, Grid } from '@mui/material';

export default function StorySection() {
  return (
    <Grid container spacing={6} sx={{ mb: 8 }}>
      <Grid item xs={12} md={6}>
        <Box 
          sx={{ 
            position: 'relative', 
            width: '100%', 
            height: '400px',
            backgroundImage: 'url(https://images.unsplash.com/photo-1542528180-a1208c5169a5?w=1600&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '8px',
          }}
        />
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
        <Box>
          <Typography variant="h4" component="h2" sx={{ mb: 3, color: 'secondary.main' }}>
            Notre Histoire
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Fondée en 1985 par la famille Dubois, notre chaîne de restaurants est née d'une passion 
            pour la gastronomie française authentique. Ce qui a commencé comme un petit bistrot 
            dans le cœur de Paris s'est transformé en trois établissements prestigieux, chacun 
            conservant l'essence de notre cuisine traditionnelle tout en y apportant sa touche unique.
          </Typography>
          <Typography variant="body1">
            Au fil des années, nous avons cultivé des relations étroites avec les producteurs locaux, 
            sélectionnant les meilleurs ingrédients pour créer des plats qui racontent l'histoire 
            de notre terroir. Notre engagement envers l'excellence culinaire et le service personnalisé 
            reste au cœur de notre philosophie.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
