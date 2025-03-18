import { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import styles from './usernav.module.css';
export default function UserNav() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 720);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let lastScrollTop = 0;
        const onScroll = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setHidden(scrollTop > lastScrollTop);
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    const navItems = [
        {label: "Home", onClick: () => window.location.href = "#home"},
        {label: "Shops"},
        {label: "Orders"},
        {label: "Profile"},
        {label: "Logout"}
    ];

    return (
        <>
            <AppBar position="fixed" className={`${styles.appBar} ${hidden ? styles.hidden : ''}`}>
                <Toolbar className={styles.toolBar}>
                    <IconButton edge="start" aria-label="logo" className={styles.menuButton} href={"#home"}>
                        <img src="/public/icons/logo_icon.png" alt="logo" className={styles.menuButton}/>
                    </IconButton>
                    <Typography component={"img"} className={styles.title} alt={"logo felirat"}
                                src={"/public/icons/logo_felirat.png"}/>
                    {
                        isMobile ? (
                            <Box className={styles.menuWrapper}>
                                <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
                                    <MenuIcon/>
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleMenuClose}
                                    anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                                    transformOrigin={{vertical: 'top', horizontal: 'right'}}
                                >
                                    {navItems.map((item, index) => (
                                        <MenuItem key={index} onClick={item.onClick || handleMenuClose}
                                                  className={item.className}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        ) : (
                            <Box className={styles.navLinks}>
                                {navItems.map((item, index) => (
                                    <Button key={index} color="inherit" className={item.className || styles.navLink}
                                            onClick={item.onClick}>
                                        {item.label}
                                    </Button>
                                ))}
                            </Box>
                        )
                    }
                </Toolbar>
            </AppBar>
        </>
    )
}