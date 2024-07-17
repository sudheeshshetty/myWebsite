import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Banner() {
    return (
        <Box
            sx={{
                marginTop: '60px',
                display: 'flex',
                justifyContent: 'center',
                width: '100%', // Full width of the viewport
            }}
        >
            <Card variant="outlined" sx={{ width: '60%' }}>
                <CardMedia
                    component="img"
                    alt="Sudheesh"
                    height="500"
                    image={'https://raw.githubusercontent.com/sudheeshshetty/sudheeshshetty.github.io/master/Sudheesh.jpeg'}
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' fontWeight={"600"} component="div"  >
                        SUDHEESH SHETTY
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>

                        <LocationOnIcon sx={{ verticalAlign: 'middle', marginRight: 1, color: '#2596be' }} />
                        <Typography variant="body2" sx={{ letterSpacing: '0.1em' }}>BANGALORE, KARNATAKA</Typography>
                        <Box sx={{ flexGrow: 1 }} /> {/* This pushes the button to the right */}
                        <Button variant="contained" color="error" size="large" href="https://www.linkedin.com/in/sudheeshshetty" target="_blank">
                            Contact Me
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
