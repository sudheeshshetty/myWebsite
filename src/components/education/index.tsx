import React from 'react';
import SchoolOutlineIcon from '@mui/icons-material/SchoolOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Engineering from './engineering';
import { useMediaQuery, useTheme } from '@mui/material';

export default function Education() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px', width: "100%" }}>
            {/* Title with User Icon */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px', width: isMobile ? '90%' : '66%' }}>

                <SchoolOutlineIcon sx={{ fontSize: 48, marginRight: '10px', color:'grey' }} />
                <Typography variant="h6" component="div" sx={{ fontWeight: '500' }}>
                    EDUCATION
                </Typography>
            </Box>

            <Engineering />
        </Box>
    );
}
