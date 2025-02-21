'use client';

import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const teamMembers = [
  {
    name: "Chef Michel Dubois",
    role: "Chef Exécutif",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=400&fit=crop&q=80",
    description: "Avec plus de 20 ans d'expérience dans la gastronomie française, le Chef Michel dirige notre cuisine avec passion et créativité."
  },
  {
    name: "Sophie Martin",
    role: "Chef Pâtissière",
    image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&h=400&fit=crop&q=80",
    description: "Spécialisée dans la pâtisserie française traditionnelle, Sophie crée des desserts qui sont de véritables œuvres d'art."
  },
  {
    name: "Pierre Laurent",
    role: "Sommelier",
    image: "https://images.unsplash.com/photo-1560787313-5dff3307e257?w=400&h=400&fit=crop&q=80",
    description: "Expert en vins, Pierre sélectionne avec soin notre carte des vins et conseille nos clients pour des accords mets-vins parfaits."
  }
];

export default function TeamSection() {
  return (
    <Box sx={{ my: 8 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
        Notre Équipe
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)'
                }
              }}
            >
              <CardMedia
                component="div"
                sx={{
                  position: 'relative',
                  height: 300,
                  width: '100%',
                  overflow: 'hidden'
                }}
              >
                <Box
                  component="img"
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </CardMedia>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h3">
                  {member.name}
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  color="secondary.main" 
                  sx={{ mb: 1 }}
                >
                  {member.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
