import React from 'react';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Overview() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px', width: "100%" }}>
            {/* Title with User Icon */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px', width: '66%' }}>

                <BadgeOutlinedIcon sx={{ fontSize: 48, marginRight: '10px', color: 'grey' }} />
                <Typography variant="h6" component="div" sx={{ fontWeight: '500' }}>
                    OVERVIEW
                </Typography>
            </Box>

            {/* Card below Title */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', width: '60%' }}>
                <Card variant="outlined" sx={{ width: '50%', position: 'relative' }}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            zIndex: 0,
                            opacity: 0.1, // Adjust the transparency herep
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '15rem', // Adjust the size as needed
                                fontWeight: 'bold',
                                color: 'rgba(37, 118, 247, 0.5)', // Adjust the color as needed
                            }}
                        >
                            9
                        </Typography>
                    </Box>
                    <CardContent>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant='h1' sx={{ marginRight: '30px', color: '#2576f7' }}>9+</Typography>
                            <Typography variant='body1' fontSize={20}>YEARS OF PROFESSIONAL EXPERIENCE</Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}
