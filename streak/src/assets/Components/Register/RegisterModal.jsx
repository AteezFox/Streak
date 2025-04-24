import React, { useEffect, useState } from 'react';
import { Button, Modal, Box, TextField } from "@mui/material";
import styles from './registerModal.module.css';

export default function RegisterModal({ isOpen, onClose }) {
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
                <h1>Regisztáció</h1>
                <div className={styles.inputGroup}>
                    <TextField
                        id="outlined-basic"
                        variant={"outlined"}
                        placeholder={"Keresztnév"}
                        className={styles.input}
                        required
                        type="text"
                    />
                    <TextField
                        id="outlined-basic"
                        placeholder={"Vezetéknév"}
                        variant="outlined"
                        className={styles.input}
                        required
                        type="text"
                    />
                </div>
                <TextField
                    id="outlined-basic"
                    placeholder={"Telefonszám"}
                    variant="outlined"
                    className={styles.input}
                    required={true}
                    type="tel"
                />
                <TextField
                    id="outlined-basic"
                    placeholder={"Email"}
                    variant="outlined"
                    className={styles.input}
                    type="email"
                    required
                />
                <TextField
                    id="outlined-basic"
                    placeholder={"Jelszó"}
                    variant="outlined"
                    className={styles.input}
                    type="password"
                    required
                />
                <div className={styles.buttons}>
                    <Button className={styles.button}>Regisztráció</Button>
                    <Button className={styles.button} onClick={onClose}>Bezár</Button>
                </div>
            </Box>
        </Modal>
    );
}