import React from 'react';
import PersonAddAltOutlineIcon from '@mui/icons-material/PersonAddAltOutlined';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircleOutlineIcon from '@mui/icons-material/CircleOutlined';
import { Accordion, AccordionDetails, AccordionSummary, Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

export default function AdditionalInformation() {
    const listIconCss = { fontSize: '10px', paddingRight: '0px', minWidth: '50px', color: "#9cbff7" }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px', width: "100%" }}>
            {/* Title with User Icon */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px', width: '66%' }}>

                <PersonAddAltOutlineIcon sx={{ fontSize: 48, marginRight: '10px', color: 'grey' }} />
                <Typography variant="h5" component="div" sx={{ fontWeight: '500', fontFamily: 'Roboto, sans-serif' }}>
                    Additional Information
                </Typography>
            </Box>
            {/* <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '60%', marginBottom: '50px' }}> */}
            <Card variant="outlined" sx={{ width: '60%' }}>
                <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <CircleOutlineIcon sx={{ ...listIconCss }} />
                                </ListItemIcon>
                                <ListItemText sx={{ marginLeft: '0px' }}>
                                    <Typography>Participated in Hackathon conducted by IOT Pune. <Link href="https://github.com/sudheeshshetty/Bustracker" target="_blank" rel="noopener">https://github.com/sudheeshshetty/Bustracker</Link></Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CircleOutlineIcon sx={{ ...listIconCss }} />
                                </ListItemIcon>
                                <ListItemText sx={{ marginLeft: '0px' }}>
                                    <Typography>3 times consecutive winner of hackathon conducted in company Diligent</Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CircleOutlineIcon sx={{ ...listIconCss }} />
                                </ListItemIcon>
                                <ListItemText sx={{ marginLeft: '0px' }}>
                                    <Typography>Enjoy playing variety of sports including cricket, badminton, table tennis, and volleyball.</Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CircleOutlineIcon sx={{ ...listIconCss }} />
                                </ListItemIcon>
                                <ListItemText sx={{ marginLeft: '0px' }}>
                                    <Typography>Passionate about playing video games in my leisure time.</Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CircleOutlineIcon sx={{ ...listIconCss }} />
                                </ListItemIcon>
                                <ListItemText sx={{ marginLeft: '0px' }}>
                                    <Typography><span style={{ fontWeight: 'bold' }}>Github: </span><Link href="https://github.com/sudheeshshetty" target="_blank" rel="noopener">https://github.com/sudheeshshetty</Link></Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CircleOutlineIcon sx={{ ...listIconCss }} />
                                </ListItemIcon>
                                <ListItemText sx={{ marginLeft: '0px' }}>
                                    <Typography><span style={{ fontWeight: 'bold' }}>Medium: </span><Link href="https://medium.com/@sudheeshshetty" target="_blank" rel="noopener">https://medium.com/@sudheeshshetty</Link></Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CircleOutlineIcon sx={{ ...listIconCss }} />
                                </ListItemIcon>
                                <ListItemText sx={{ marginLeft: '0px' }}>
                                    <Typography><span style={{ fontWeight: 'bold' }}>LinkedIn: </span><Link href="https://www.linkedin.com/in/sudheeshshetty/" target="_blank" rel="noopener">https://www.linkedin.com/in/sudheeshshetty/</Link></Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Box>
                </CardContent>
            </Card>
        </Box>
        // </Box>
    );
}
