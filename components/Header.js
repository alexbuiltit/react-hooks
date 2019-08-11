import React from 'react';
import Head from 'next/head';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const headerStyles = {
  marginBottom: '80px',
}
const Header = () => (
  <div style={headerStyles}>
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://meyerweb.com/eric/tools/css/reset/reset.css" />
    </Head>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" color="inherit">            
          React Hooks - useful examples
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;