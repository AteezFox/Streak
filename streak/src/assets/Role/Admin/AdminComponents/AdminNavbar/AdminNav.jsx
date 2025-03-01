import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Button } from "@mui/material";
import styles from './adminnav.module.css';

export default function AdminNav() {
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
                        <Button color="inherit" className={styles.navLink}>Shops</Button>
                        <Button color="inherit" className={styles.navLink}>Orders</Button>
                        <Button color="inherit" className={styles.navLink}>Support</Button>
                        <div className={styles.dash}>
                            <Button color={"inherit"} className={styles.goDashboard} onClick={<a href="../AdminDashboard/AdminDash.jsx"></a>}>Go to Workspace</Button>
                        </div>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}