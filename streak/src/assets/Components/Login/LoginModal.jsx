import React, { useEffect, useState } from 'react';
import { Button, Modal, Box, TextField } from "@mui/material";
import styles from './loginModal.module.css';

export default function LoginModal({ isOpen, onClose }) {
    const [openClass, setOpenClass] = useState('');
    const [login, setLogin] = useState('');
    const loginArray = [
        {id: '1', name: "Béla", email: "bela@email.com", password: "1234" }
    ]
    
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setOpenClass(styles['modal-enter']), 10);
        } else {
            setOpenClass('');
        }
    }, [isOpen]);
        
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
        >
            <Box className={`${styles.modal} ${openClass}`}>
                <h1>Bejelentkezés</h1>
                <TextField
                    id="outlined-basic"
                    variant={"outlined"}
                    placeholder="Email"
                    className={styles.input}
                    type="email"
                    required={true}
                />
                <TextField
                    id="outlined-basic"
                    variant={"outlined"}
                    placeholder={"Jelszó"}
                    className={styles.input}
                    type="password"
                    required={true}
                />
                <div className={styles.buttons}>
                    <Button className={styles.button} >Bejelentkezés</Button>
                    <Button className={styles.button} onClick={onClose}>Bezár</Button>
                </div>
            </Box>
        </Modal>
    );
}