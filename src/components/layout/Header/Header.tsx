'use client';

import { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Box, Drawer, List, ListItem, ListItemText, Container } from '@mui/material';
import { Menu } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'À propos', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Réservation', href: '/reservation' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ position: 'relative', width: 50, height: 50 }}>
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=100&h=100&fit=crop&crop=faces&q=80"
                alt="Restaurant Logo"
                fill
                style={{ objectFit: 'cover', borderRadius: '50%' }}
              />
            </Box>
          </Link>

          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <Menu />
          </IconButton>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2, alignItems: 'center' }}>
            {navigation.map((item) => (
              <Button
                key={item.name}
                component={Link}
                href={item.href}
                variant={item.name === 'Réservation' ? 'contained' : 'text'}
                color={item.name === 'Réservation' ? 'secondary' : 'inherit'}
                sx={{
                  position: 'relative',
                  '&::after': item.name !== 'Réservation' ? {
                    content: '""',
                    position: 'absolute',
                    width: pathname === item.href ? '100%' : '0%',
                    height: '2px',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'secondary.main',
                    transition: 'width 0.3s ease-in-out',
                  } : {},
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', py: 2 }}>
          <List>
            {navigation.map((item) => (
              <ListItem key={item.name} disablePadding>
                <Link href={item.href} style={{ width: '100%', textDecoration: 'none', color: 'inherit' }}>
                  <ListItemText 
                    primary={item.name}
                    sx={{ 
                      textAlign: 'center',
                      color: pathname === item.href ? 'secondary.main' : 'inherit'
                    }}
                  />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
