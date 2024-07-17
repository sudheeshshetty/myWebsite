import React, { useState } from 'react';
import SchoolOutlineIcon from '@mui/icons-material/SchoolOutlined';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

export default function Engineering() {
    const [show, setShow] = useState(false);
    const showDescription = () => {
        setShow(!show)
    }
    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '60%', marginBottom: '50px' }}>
            <Card variant="outlined" sx={{ width: '65%', position: 'relative' }}>
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
                        opacity: 0.1, // Adjust the transparency here
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '10rem', // Adjust the size as needed
                            fontWeight: 'bold',
                            color: 'rgba(37, 118, 247, 0.5)', // Adjust the color as needed
                        }}
                    >
                        BE
                    </Typography>
                </Box>
                <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <SchoolOutlineIcon sx={{ fontSize: 30, marginRight: '30px', color:'#2576f7' }} />
                        <span>
                            <Typography variant='body1' fontWeight={'bold'} marginBottom={1}>Bachelor of Engineering - Computer Science</Typography>
                            <Typography variant='body1' fontSize={16} fontWeight={'400'}>Vivekananda College of Engineering And Technology</Typography>
                            <Typography variant='body1' fontSize={14} fontWeight={'300'}>Viveswaraya Technological University</Typography>
                            <Typography variant='body1' fontSize={14} fontWeight={'50'} sx={{
                                mb: 2,
                                opacity: 0.5,
                                marginTop: '5px'
                            }}>2010 - 2014</Typography>
                        </span>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}