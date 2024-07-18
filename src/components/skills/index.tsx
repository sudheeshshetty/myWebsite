import React from 'react';
import FlashOnOutlineIcon from '@mui/icons-material/FlashOnOutlined';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircleOutlineIcon from '@mui/icons-material/CircleOutlined';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';


export default function Skills() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const listIconCss = { fontSize: '10px', paddingRight: '0px', minWidth: '50px', color: "#9cbff7" }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px', width: "100%" }}>
            {/* Title with User Icon */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px', width: isMobile ? '90%' : '66%' }}>

                <FlashOnOutlineIcon sx={{ fontSize: 48, marginRight: '10px', color: 'grey' }} />
                <Typography variant="h5" component="div" sx={{ fontWeight: '500', fontFamily: 'Roboto, sans-serif' }}>
                    SKILLS
                </Typography>
            </Box>
            {/* <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '60%', marginBottom: '50px' }}> */}
            <Card variant="outlined" sx={{ width: isMobile ? '90%' : '60%' }}>
                <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', }}>
                        <span style={{ width: isMobile ? '100%' : '50%' }}>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleOutlineIcon sx={{ ...listIconCss }} />
                                    </ListItemIcon>
                                    <ListItemText sx={{ marginLeft: '0px' }}>
                                        <Typography><span style={{ fontWeight: 'bold' }}>AWS: </span>Lambda, S3, CloudWatch, EC2, Dynamo, Code Pipeline, Code Build, IAM, ECS, Fargate, API Gateway, SNS, Athena, Event Bridge, Knowledge Base, BedRock, SQS, Route53, VPC, RUM, Dashboards, X-ray</Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleOutlineIcon sx={{ ...listIconCss }} />
                                    </ListItemIcon>
                                    <ListItemText sx={{ marginLeft: '0px' }}>
                                        <Typography><span style={{ fontWeight: 'bold' }}>Cloud: </span>AWS, Azure</Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleOutlineIcon sx={{ ...listIconCss }} />
                                    </ListItemIcon>
                                    <ListItemText sx={{ marginLeft: '0px' }}>
                                        <Typography><span style={{ fontWeight: 'bold' }}>Unit Testing: </span>Jest, Mocha, Chai, E2E testing, Jasmine, Karma</Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleOutlineIcon sx={{ ...listIconCss }} />
                                    </ListItemIcon>
                                    <ListItemText sx={{ marginLeft: '0px' }}>
                                        <Typography><span style={{ fontWeight: 'bold' }}>Back End: </span>Node JS (Express & Fastify), Golang with HashiCorp Terraform SDK</Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleOutlineIcon sx={{ ...listIconCss }} />
                                    </ListItemIcon>
                                    <ListItemText sx={{ marginLeft: '0px' }}>
                                        <Typography><span style={{ fontWeight: 'bold' }}>Version Control: </span>Git</Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </span>
                        <span>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleOutlineIcon sx={{ ...listIconCss }} />
                                    </ListItemIcon>
                                    <ListItemText sx={{ marginLeft: '0px' }}>
                                        <Typography><span style={{ fontWeight: 'bold' }}>Documentation: </span>OpenAPI</Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleOutlineIcon sx={{ ...listIconCss }} />
                                    </ListItemIcon>
                                    <ListItemText sx={{ marginLeft: '0px' }}>
                                        <Typography><span style={{ fontWeight: 'bold' }}>Databases: </span>AWS DynamoDB. MongoDB, MySQL</Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleOutlineIcon sx={{ ...listIconCss }} />
                                    </ListItemIcon>
                                    <ListItemText sx={{ marginLeft: '0px' }}>
                                        <Typography><span style={{ fontWeight: 'bold' }}>Container: </span>Docker</Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleOutlineIcon sx={{ ...listIconCss }} />
                                    </ListItemIcon>
                                    <ListItemText sx={{ marginLeft: '0px' }}>
                                        <Typography><span style={{ fontWeight: 'bold' }}>Front End: </span>React JS, Angular, Vue, React Native</Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleOutlineIcon sx={{ ...listIconCss }} />
                                    </ListItemIcon>
                                    <ListItemText sx={{ marginLeft: '0px' }}>
                                        <Typography><span style={{ fontWeight: 'bold' }}>IaC: </span>Terraform, AWS CDK</Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleOutlineIcon sx={{ ...listIconCss }} />
                                    </ListItemIcon>
                                    <ListItemText sx={{ marginLeft: '0px' }}>
                                        <Typography><span style={{ fontWeight: 'bold' }}>Scripting: </span>JavaScript, Typescript, Shell, Perl</Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleOutlineIcon sx={{ ...listIconCss }} />
                                    </ListItemIcon>
                                    <ListItemText sx={{ marginLeft: '0px' }}>
                                        <Typography><span style={{ fontWeight: 'bold' }}>Observability: </span>AWS Cloudwatch, AWS X-ray</Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </span>
                    </Box>
                </CardContent>
            </Card>
        </Box>
        // </Box>
    );
}
