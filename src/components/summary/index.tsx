import React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useMediaQuery, useTheme } from '@mui/material';

export default function Summary() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px', width: "100%" }}>
            {/* Title with User Icon */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px', width: isMobile ? '90%' : '66%' }}>
                <PersonOutlineIcon sx={{ fontSize: 48, marginRight: '10px', color: 'grey' }} />
                <Typography variant="h6" component="div" sx={{ fontWeight: '500' }}>
                    SUMMARY
                </Typography>
            </Box>

            {/* Card below Title */}
            <Card variant="outlined" sx={{ width: isMobile ? '90%' : '60%' }}>
                <CardContent>
                    <Typography variant="body1" sx={{ wordSpacing: '0.3em' }}>
                        I have around 9+ years of experience leading and developing projects using React, Vue, Angular, and Node.js. I've built and optimized applications from scratch, integrated complex APIs, and developed tools for data manipulation and simulation. Additionally, I've engineered serverless solutions for efficient infrastructure management, ensuring comprehensive functionality and user-friendly interfaces across diverse project environments.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
