import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Button } from "@mui/material";
import styles from './navbar.module.css';

export default function Navbar() {
    return(
        <>
            <AppBar position="fixed" className={styles.appBar}>
                <Toolbar className={styles.toolBar}>
                    <IconButton edge="start" aria-label="logo" className={styles.menuButton}>
                        <img src="../../../../../.././public/icons/logo_icon.png" alt="" className={styles.menuButton}/>
                    </IconButton>
                    <Typography variant="h6" className={styles.title}>
                        <img src="../../../../../.././public/icons/logo_felirat.png" alt=""/>
                    </Typography>

                    <Box className={styles.navLinks}>
                        <Button color="inherit" className={styles.navLink}>Home</Button>
                        <Button color="inherit" className={styles.navLink}>About</Button>
                        <Button color="inherit" className={styles.navLink}>Contact</Button>
                        <Button color="inherit" className={styles.navLink}>Login</Button>
                        <Button color="inherit" className={styles.navLink}>Register</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}