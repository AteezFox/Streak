import { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Box, Menu, MenuItem, Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useNavigate } from "react-router-dom";
import styles from './usernav.module.css';

export default function UserNav() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);
    const [hidden, setHidden] = useState(false);
    const [addressAnchorEl, setAddressAnchorEl] = useState(null);
    const [selectedAddress, setSelectedAddress] = useState(localStorage.getItem('selectedAddress') || "Select Address");
    const navigate = useNavigate();

    const addresses = ["Otthon", "Munkahely", "Cigánylak"];

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

    const handleAddressMenuOpen = (event) => setAddressAnchorEl(event.currentTarget);
    const handleAddressMenuClose = () => setAddressAnchorEl(null);

    const handleAddressSelect = (address) => {
        setSelectedAddress(address);
        localStorage.setItem('selectedAddress', address);
        handleAddressMenuClose();
    };

    const navItems = [
        { label: "Orders", onClick: () => navigate("/orders")},
        { label: "Profile", onClick: () => navigate("/profile") },
        { label: "Logout", onClick: () => navigate("/") }
    ];

    return (
        <>
            <AppBar position="fixed" className={`${styles.appBar} ${hidden ? styles.hidden : ''}`}>
                <Toolbar className={styles.toolBar}>
                    <IconButton edge="start" aria-label="logo" className={styles.menuButton} onClick={() => navigate("/yourhome")}>
                        <img src="/icons/logo_icon.png" alt="logo" className={styles.menuButton}/>
                    </IconButton>
                    <IconButton className={styles.menuButton} color={"inherit"} onClick={() => navigate("/yourhome")}><HomeIcon /></IconButton>
                    <Button color="inherit" onClick={handleAddressMenuOpen} className={styles.navLink} className={styles.addressMenu}>
                        {selectedAddress} {addressAnchorEl ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </Button>
                    <Menu
                        anchorEl={addressAnchorEl}
                        open={Boolean(addressAnchorEl)}
                        onClose={handleAddressMenuClose}
                    >
                        {addresses.map((address, index) => (
                            <MenuItem key={index} onClick={() => handleAddressSelect(address)}>
                                {address}
                            </MenuItem>
                        ))}
                    </Menu>
                    {
                        isMobile ? (
                            <Box className={styles.menuWrapper}>
                                <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
                                    <AccountCircleIcon />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleMenuClose}
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
                                <IconButton edge="end" color="inherit" onClick={handleMenuOpen} className={styles.login}>
                                    <AccountCircleIcon />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleMenuClose}
                                >
                                    {navItems.map((item, index) => (
                                        <MenuItem key={index} onClick={item.onClick || handleMenuClose} className={item.className}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        )
                    }
                </Toolbar>
            </AppBar>
        </>
    );
}