'use client';

import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const menuHeaderImage = 'https://images.unsplash.com/photo-1580442151529-343f2f6e0e27?w=2000&auto=format&fit=crop&q=80';

export default function MenuHeader() {
  return (
    <Box 
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      sx={{ 
        position: 'relative',
        width: '100%',
        height: { xs: '300px', sm: '400px' },
        marginBottom: { xs: 4, sm: 6 },
        overflow: 'hidden',
        borderRadius: { xs: '0 0 24px 24px', sm: '0 0 48px 48px' }
      }}
    >
      <Box 
        sx={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${menuHeaderImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))'
          }
        }}
      />
      
      <Box
        sx={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: { xs: 2, sm: 4 },
          color: 'white'
        }}
      >
        <Typography
          component={motion.h1}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variant="h2"
          sx={{
            fontFamily: 'var(--font-playfair)',
            fontSize: { xs: '2.5rem', sm: '3.5rem' },
            fontWeight: 600,
            marginBottom: 2,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          Notre Menu
        </Typography>

        <Typography
          component={motion.p}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          variant="h6"
          sx={{
            maxWidth: '800px',
            fontSize: { xs: '1rem', sm: '1.25rem' },
            fontWeight: 300,
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            lineHeight: 1.6
          }}
        >
          Découvrez notre sélection de plats asiatiques authentiques, préparés avec passion et savoir-faire
        </Typography>
      </Box>
    </Box>
  );
}
