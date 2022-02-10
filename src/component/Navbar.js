import React from 'react';
import { AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '.././store-icon.jpg'
const Navbar = () => {
  return <div>
<AppBar>
    <Toolbar>
        <Typography>
            <img src='' alt = "" heigh= '20px' style={{marginRight: '10px'}}/>
        GG online market
        </Typography>

        <div></div>
        <div>
        <IconButton aria-label='show cart item' color='inherit'>
            <Badge badgeContent={2} color='secondary'>
            <ShoppingCart/>
            </Badge>
        </IconButton>
        
        </div>
    </Toolbar>
</AppBar>
  </div>;
};

export default Navbar;
