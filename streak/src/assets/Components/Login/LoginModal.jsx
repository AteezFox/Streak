import React, { useEffect, useState } from 'react';
import { Button, Modal, Box, TextField } from "@mui/material";
import styles from './loginModal.module.css';

export default function LoginModal({ isOpen, onClose }) {
    const [openClass, setOpenClass] = useState('');

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
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={`${styles.modal} ${openClass}`}>
                <h1>Bejelentkezés</h1>
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    className={styles.input}
                    type="email"
                    color={"error"}
                    required={true}
                />
                <TextField
                    id="outlined-basic"
                    label="Jelszó"
                    variant="outlined"
                    className={styles.input}
                    type="password"
                    required={true}
                    color={"error"}
                />
                <div className={styles.buttons}>
                    <Button className={styles.button}>Bejelentkezés</Button>
                    <Button className={styles.button} onClick={onClose}>Bezár</Button>
                </div>
            </Box>
        </Modal>
    );
}