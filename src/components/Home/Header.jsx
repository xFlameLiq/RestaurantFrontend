// Importa los componentes necesarios de Material-UI
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";

// Crea el componente Header
const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        {/* Título del Header */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Sabor Azteca
        </Typography>
        
        {/* Botones o enlaces del Header */}
        <Button color="inherit"><Link className="linkLogin" to={"/Login"}>LOGIN</Link></Button>
      </Toolbar>

    </AppBar>
  );
};

export default Header;
