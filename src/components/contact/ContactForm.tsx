'use client';

import { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  MenuItem,
  Snackbar,
  Alert
} from '@mui/material';
import { restaurants } from '@/data/restaurants';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    restaurant: '',
    subject: '',
    message: ''
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous ajouteriez la logique pour envoyer le formulaire
    setSnackbar({
      open: true,
      message: 'Message envoyé avec succès !',
      severity: 'success'
    });
    setFormData({
      name: '',
      email: '',
      restaurant: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
        Contactez-nous
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nom"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          select
          label="Restaurant"
          name="restaurant"
          value={formData.restaurant}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        >
          {restaurants.map((restaurant) => (
            <MenuItem key={restaurant.id} value={restaurant.id}>
              {restaurant.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          label="Sujet"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          sx={{ mb: 3 }}
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="secondary"
          size="large"
          fullWidth
        >
          Envoyer
        </Button>
      </form>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
      >
        <Alert 
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
