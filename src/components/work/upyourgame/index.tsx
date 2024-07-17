import React, { useState } from 'react';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CircleOutlineIcon from '@mui/icons-material/CircleOutlined'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

export default function UpYourGame() {
    const [show, setShow] = useState(false);
    const showDescription = () => {
        setShow(!show)
    }
    const listIconCss = { fontSize: '10px', paddingRight: '0px', minWidth: '50px', color:"#9cbff7" }
    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '60%', marginBottom: '50px' }}>
            <Card variant="outlined" sx={{ width: '65%' }}>
                <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                        <WorkOutlineIcon sx={{ fontSize: 30, marginRight: '30px', marginTop: '10px', color: '#2576f7' }} />
                        <span>
                            <Typography variant='body1' fontWeight={'bold'} marginBottom={1}>Senior Full Stack Developer</Typography>
                            <Typography variant='body1' fontWeight={'300'}>Up Your Game</Typography>
                            <Typography variant='body1' fontWeight={'50'} sx={{
                                mb: 2,
                                opacity: 0.5,
                            }}>Apr 2018 - Dec 2018</Typography>
                        </span>
                    </Box>
                </CardContent>
                <Accordion
                    sx={{
                        boxShadow: 'none',
                        border: 0,
                        marginTop: 0,
                        paddingTop: 0
                    }}>
                    <AccordionSummary
                        // expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{
                            marginLeft: '60px'
                        }}
                        onClick={showDescription}
                    >
                        {show ? <Typography color={'#2576f7'}>Hide Description</Typography> : <Typography color={'#2576f7'}>Show Description</Typography>}

                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <CircleOutlineIcon sx={{...listIconCss}} />
                                </ListItemIcon>
                                <ListItemText sx={{ marginLeft: '0px' }}>
                                    Played a key role in developing the Up-app, handling both front-end and back-end work
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CircleOutlineIcon sx={{...listIconCss}} />
                                </ListItemIcon>
                                <ListItemText sx={{ marginLeft: '0px' }}>
                                    Built the UI with Vue and developed back-end APIs with Loopback
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CircleOutlineIcon sx={{...listIconCss}} />
                                </ListItemIcon>
                                <ListItemText sx={{ marginLeft: '0px' }}>
                                    Improved app speed through optimization and performance tuning
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CircleOutlineIcon sx={{...listIconCss}} />
                                </ListItemIcon>
                                <ListItemText sx={{ marginLeft: '0px' }}>
                                    Created in-app chat and real-time notifications using web sockets and Dialog Flow
                                </ListItemText>
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
            </Card>
        </Box>
    )
}