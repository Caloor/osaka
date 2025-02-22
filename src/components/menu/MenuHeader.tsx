'use client';

import { Box, Typography, Container } from '@mui/material';
import Head from 'next/head';

const menuHeaderImage = 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2000&auto=format&fit=crop';

export default function MenuHeader() {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href={menuHeaderImage} />
        <style>
          {`
            .fade-in-up {
              opacity: 0;
              transform: translateY(50px);
              animation: fadeInUp 0.8s ease-out forwards;
            }

            .delay-1 {
              animation-delay: 0.1s;
            }

            .delay-2 {
              animation-delay: 0.3s;
            }

            @keyframes fadeInUp {
              0% {
                opacity: 0;
                transform: translateY(50px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>
      </Head>
      <Box sx={{ 
        position: 'relative',
        width: '100%',
        height: { xs: '300px', sm: '400px' },
        marginBottom: { xs: 4, sm: 6 },
        overflow: 'hidden'
      }}>
        <Box sx={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${menuHeaderImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />

        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', color: 'white' }}>
              <Typography 
                variant="h1" 
                className="fade-in-up delay-1"
                sx={{ 
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  fontWeight: 'bold',
                  mb: 2
                }}
              >
                Notre Carte
              </Typography>
              <Typography 
                variant="h2" 
                className="fade-in-up delay-2"
                sx={{ 
                  fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
                  maxWidth: '800px',
                  margin: '0 auto'
                }}
              >
                Une sélection raffinée de spécialités japonaises préparées devant vous
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
