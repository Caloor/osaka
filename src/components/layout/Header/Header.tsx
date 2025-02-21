'use client';

import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, IconButton, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu } from '@mui/icons-material';
import Link from 'next/link';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/about' },
  { name: 'Menu', href: '/menu' },
  { name: 'Contact', href: '/contact' },
  { name: 'Réservation', href: '/reservation' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Animation for header appearance
    gsap.from('.header-animation', {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="fixed" color="default" className="header-animation" sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(5px)'
      }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
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

          {/* Logo */}
          <Box sx={{ 
            flex: { xs: 1, sm: 'auto' },
            textAlign: { xs: 'center', sm: 'left' },
            '& img': { height: '50px' }
          }}>
            <Link href="/">
              <img src="/images/logo-placeholder.png" alt="Restaurant Logo" />
            </Link>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navigation.map((item) => (
              <Button
                key={item.name}
                component={Link}
                href={item.href}
                sx={{
                  mx: 1,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '2px',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'primary.main',
                    transition: 'width 0.3s ease-in-out',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                  ...(pathname === item.href && {
                    '&::after': {
                      width: '100%',
                    },
                  }),
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

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
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', mt: 2, mb: 2 }}>
          <img src="/images/logo-placeholder.png" alt="Restaurant Logo" style={{ height: '50px' }} />
        </Box>
        <List>
          {navigation.map((item) => (
            <ListItem key={item.name} disablePadding>
              <Link href={item.href} style={{ width: '100%', textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={item.name} sx={{ textAlign: 'center' }} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
