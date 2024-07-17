import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

function Header() {
    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#fff' }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Your Logo
                </Typography>
                <Box>
                    <Button sx={{ color: '#2596be' }} href="#summary">Summary</Button>
                    <Button sx={{ color: '#2596be' }} href="#overview">Overview</Button>
                    <Button sx={{ color: '#2596be' }} href="#work">Work</Button>
                    <Button sx={{ color: '#2596be' }} href="#education">Education</Button>
                    <Button sx={{ color: '#2596be' }} href="#skills">Skills</Button>
                    <Button sx={{ color: '#2596be' }} href="#additional-information">Additional Information</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;