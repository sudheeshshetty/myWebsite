import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useMediaQuery, useTheme } from '@mui/material';

export default function Banner() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                marginTop: '60px',
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
            }}
        >
            <Card variant="outlined" sx={{ width: isMobile ? '90%' : '60%' }}>
                <CardMedia
                    component="img"
                    alt="Sudheesh"
                    height={isMobile ? '300' : '500'} // Adjust height for mobile
                    image={'https://raw.githubusercontent.com/sudheeshshetty/sudheeshshetty.github.io/master/Sudheesh.jpeg'}
                />
                <CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: isMobile ? 'center' : 'space-between',
                            textAlign: isMobile ? 'center' : 'left',
                        }}
                    >
                        <Typography gutterBottom variant={isMobile ? 'h6' : 'h5'} fontWeight="600" component="div">
                            SUDHEESH SHETTY
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: isMobile ? 'column' : 'row' }}>
                            {isMobile ? null : <LocationOnIcon sx={{ verticalAlign: 'middle', marginRight: 1, color: '#2596be' }} />}
                            <Typography variant="body2" sx={{ letterSpacing: '0.1em' }}>BANGALORE, KARNATAKA</Typography>
                            <Box sx={{ flexGrow: 1, display: isMobile ? 'none' : 'block' }} />
                            <Button
                                variant="contained"
                                color="error"
                                size="large"
                                href="https://www.linkedin.com/in/sudheeshshetty"
                                target="_blank"
                                sx={{ mt: isMobile ? 2 : 0 }} // Add margin-top on mobile
                            >
                                Contact Me
                            </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
