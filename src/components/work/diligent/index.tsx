import React, { useState } from 'react';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CircleOutlineIcon from '@mui/icons-material/CircleOutlined'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

export default function Diligent() {
    const [show, setShow] = useState(false);
    const showDescription = () => {
        setShow(!show)
    }

    const listIconCss={ fontSize: '10px', paddingRight: '0px', minWidth: '50px', color:"#9cbff7" }
    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '60%', marginBottom: '50px' }}>
            <Card variant="outlined" sx={{ width: '65%' }}>
                <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                        <WorkOutlineIcon sx={{ fontSize: 30, marginRight: '30px', marginTop: '10px', color: '#2576f7' }} />
                        <span>
                            <Typography variant='body1' fontWeight={'bold'} marginBottom={1}>Senior Software Engineer</Typography>
                            <Typography variant='body1' fontWeight={'300'}>Diligent</Typography>
                            <Typography variant='body1' fontWeight={'50'} sx={{
                                mb: 2,
                                opacity: 0.5,
                            }}>Nov 2021 - Present</Typography>
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
                                    Created custom Terraform providers using Terraform and Go for our product, ensuring thorough documentation and strong functionality
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CircleOutlineIcon sx={{ ...listIconCss }} />
                                </ListItemIcon>
                                <ListItemText sx={{ marginLeft: '0px' }}>
                                    Designed a system using Node.js and EJS templates to extract resources from our product's data, enabling easy reuse across different organizations.
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CircleOutlineIcon sx={{ ...listIconCss }} />
                                </ListItemIcon>
                                <ListItemText sx={{ marginLeft: '0px' }}>
                                    Developed serverless solutions for remote terraforming capabilities, providing flexible infrastructure management options.
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CircleOutlineIcon sx={{ ...listIconCss }} />
                                </ListItemIcon>
                                <ListItemText sx={{ marginLeft: '0px' }}>
                                    Engineered a versatile serverless solution to meet various business needs, enhancing efficiency and adaptability.
                                </ListItemText>
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
            </Card>
        </Box>
    )
}