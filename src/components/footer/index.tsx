import React, { useState } from 'react';
import { Box, Typography, IconButton, Link, Tooltip } from '@mui/material';
import { Facebook, X, LinkedIn, GitHub, Instagram, Email } from '@mui/icons-material';

function Footer() {
    const [open, setOpen] = useState(false);
    const email = 'sudheeshshetty@gmail.com';

    const handleTooltipOpen = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
        }, 5000); // Tooltip will stay open for 3 seconds
    };
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: 'black',
                textAlign: 'center'
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <Link href="https://www.facebook.com/sudheesh.shetty.5" target="_blank" rel="noopener">
                    <IconButton aria-label="Facebook" color="primary">
                        <Facebook />
                    </IconButton>
                </Link>
                <Link href="https://x.com/sudheeshshetty" target="_blank" rel="noopener">
                    <IconButton aria-label="Twitter" color="primary">
                        <X />
                    </IconButton>
                </Link>
                <Link href="https://www.linkedin.com/in/sudheeshshetty" target="_blank" rel="noopener">
                    <IconButton aria-label="LinkedIn" color="primary">
                        <LinkedIn />
                    </IconButton>
                </Link>
                <Link href="https://github.com/sudheeshshetty" target="_blank" rel="noopener">
                    <IconButton aria-label="GitHub" color="primary">
                        <GitHub />
                    </IconButton>
                </Link>
                <Link href="https://www.instagram.com/sudheeshshetty/" target="_blank" rel="noopener">
                    <IconButton aria-label="Instagram" color="primary">
                        <Instagram />
                    </IconButton>
                </Link>
                <Tooltip
                    title={email}
                    open={open}
                    disableHoverListener
                    disableTouchListener
                >
                    <IconButton aria-label="Email" color="primary" onClick={handleTooltipOpen}>
                        <Email />
                    </IconButton>
                </Tooltip>
            </Box>
        </Box>
    );
}

export default Footer;
