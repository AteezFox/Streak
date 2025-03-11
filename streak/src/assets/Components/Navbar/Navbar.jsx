import { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Button } from "@mui/material";
import styles from './navbar.module.css';
import LoginModal from "../Login/LoginModal.jsx";
import RegisterModal from "../Register/RegisterModal.jsx";

export default function Navbar() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    useEffect(() => {
        let lastScrollTop = 0;
        const navbar = document.querySelector(`.${styles.appBar}`);

        const onScroll = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                navbar.classList.add(styles.hidden);
            } else {
                navbar.classList.remove(styles.hidden);
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const openLogin = () => {
        setIsLoginOpen(true);
    };

    const openRegister = () => {
        setIsRegisterOpen(true);
    };

    return (
        <>
            <AppBar position="fixed" className={styles.appBar}>
                <Toolbar className={styles.toolBar}>
                    <IconButton edge="start" aria-label="logo" className={styles.menuButton}>
                        <img src="/public/icons/logo_icon.png" alt="logo" className={styles.menuButton}/>
                    </IconButton>
                    <Typography component={"img"} className={styles.title} alt={"logo felirat"} src={"/public/icons/logo_felirat.png"}/>
                    <Box className={styles.navLinks}>
                        <Button color="inherit" className={styles.navLink}>Home</Button>
                        <Button color="inherit" className={styles.navLink}>About</Button>
                        <Button color="inherit" className={styles.work}>Work with us!</Button>
                        <Button color="inherit" className={styles.navLink}>Support</Button>
                        <div className={styles.login}>
                            <Button color="inherit" className={styles.navLink} onClick={openLogin}>Login</Button>
                            <Button color="inherit" className={styles.navLink} onClick={openRegister}>Register</Button>
                        </div>
                    </Box>
                </Toolbar>
            </AppBar>
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
            <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
        </>
    );
}