'use client';

import { Box, Typography } from '@mui/material';
import { restaurants } from '@/data/restaurants';

export default function LocationSection() {
  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
        Nos Emplacements
      </Typography>
      <Box sx={{ 
        width: '100%',
        height: '400px',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        overflow: 'hidden'
      }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95410694685!2d2.276995233454714!3d48.85883363166117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1645004373307!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </Box>
    </Box>
  );
}
