
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function Header(props){
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);


  const drawer = (
    <Box onClick={()=> setMobileOpen(!mobileOpen)} sx={{ textAlign: 'center' }}>
      <Box sx={{my:2}}>
        <img src="https://i.ibb.co/JsvBDwD/logo.png" style={{width:'150px'}} alt="" />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{
          backgroundColor:'transparent',
          boxShadow:'none',
          mt:2
      }}>
          <Container>

        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={()=> setMobileOpen(!mobileOpen)}
            sx={{ mr: 2, display: { sm: 'none' }, color:'primary.main' }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              <img src="https://i.ibb.co/JsvBDwD/logo.png" style={{width:'150px'}} alt="" />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'primary.main' }}>
                {item}
              </Button>
            ))}
            <Button sx={{bgcolor:'primary.green'}}>Login</Button>
          </Box>
        </Toolbar>
          </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={()=> setMobileOpen(!mobileOpen)}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
       
      </Box>
    </Box>
  );
}