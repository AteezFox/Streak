import React, { useEffect, useState } from 'react';
import { Button, Modal, Box, TextField } from "@mui/material";
import PropTypes from 'prop-types';
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
                        label="Keresztnév"
                        variant="outlined"
                        className={styles.input}
                        required={true}
                        color={"error"}
                        type="text"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Vezetéknév"
                        variant="outlined"
                        className={styles.input}
                        required={true}
                        color={"error"}
                        type="text"
                    />
                </div>
                <TextField
                    id="outlined-basic"
                    label="Telefonszám"
                    variant="outlined"
                    className={styles.input}
                    required={true}
                    color={"error"}
                    type="tel"
                />
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    className={styles.input}
                    type="email"
                    required={true}
                    color={"error"}
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