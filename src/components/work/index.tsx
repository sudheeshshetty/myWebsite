import React from 'react';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CircleOutlineIcon from '@mui/icons-material/CircleOutlined'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Diligent from './diligent';
import Mirafra from './mirafra';
import WebPeople from './webpeople';
import UpYourGame from './upyourgame';
import Persistent from './persistent';

export default function Work() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px', width: "100%" }}>
            {/* Title with User Icon */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px', width: '66%' }}>

                <WorkOutlineIcon sx={{ fontSize: 48, marginRight: '10px', color:'grey' }} />
                <Typography variant="h6" component="div" sx={{ fontWeight: '500' }}>
                    WORK HISTORY
                </Typography>
            </Box>

            <Diligent />
            <Mirafra />
            <WebPeople />
            <UpYourGame />
            <Persistent />
        </Box>
    );
}
