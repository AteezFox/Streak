import { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Menu, MenuItem, TextField } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import styles from './adminnav.module.css';

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);
    const [hidden, setHidden] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

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
        { label: "Welcome to Dashboard", onClick: () => window.location.href = "/AdminDash" },
        { label: <SearchIcon />, onClick: () => setShowSearch(!showSearch) },
        { label: "Logout", onClick: () => window.location.href = "/AdminDash", className: styles.login },
    ];

    return (
        <>
            <AppBar position="fixed" className={`${styles.appBar} ${hidden ? styles.hidden : ''}`}>
                <Toolbar className={styles.toolBar}>
                    <IconButton edge="start" aria-label="logo" className={styles.menuButton} component="a" href="#home">
                        <img src="/public/icons/logo_icon.png" alt="logo" className={styles.menuButton}/>
                    </IconButton>
                    <Typography component={"img"} className={styles.title} alt={"logo felirat"} src={"/public/icons/logo_felirat.png"}/>
                    {
                        isMobile ? (
                            <Box className={styles.menuWrapper}>
                                <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleMenuClose}
                                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                >
                                    {navItems.map((item, index) => (
                                        <MenuItem key={index} onClick={item.onClick || handleMenuClose} className={item.className}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        ) : (
                            <Box className={styles.navLinks}>
                                {navItems.map((item, index) => (
                                    <Button key={index} color="inherit" className={item.className || styles.navLink} onClick={item.onClick}>
                                        {item.label}
                                    </Button>
                                ))}
                            </Box>
                        )
                    }
                </Toolbar>
                {showSearch && (
                    <Box className={styles.searchBar}>
                        <TextField variant="outlined" placeholder="Search..." fullWidth />
                        <p>Használata:</p>
                        <ul>
                            <li>@szerepkörneve az adott szerepkörrben keres név alapján pl: @User K. G. Béla</li>
                            <li>#szerepkörneve az adott szerepkörrben keres id alapján pl: #User 1234</li>
                        </ul>
                    </Box>
                )}
            </AppBar>
        </>
    );
}