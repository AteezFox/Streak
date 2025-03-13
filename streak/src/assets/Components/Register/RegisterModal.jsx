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
                        variant={"outlined"}
                        placeholder={"Keresztnév"}
                        className={styles.input}
                        required={true}
                        type="text"
                    />
                    <TextField
                        id="outlined-basic"
                        placeholder={"Vezetéknév"}
                        variant="outlined"
                        className={styles.input}
                        required={true}
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
                    required={true}
                />
                <TextField
                    id="outlined-basic"
                    placeholder={"Jelszó"}
                    variant="outlined"
                    className={styles.input}
                    type="password"
                    required={true}
                />
                <div className={styles.buttons}>
                    <Button className={styles.button}>Bejelentkezés</Button>
                    <Button className={styles.button} onClick={onClose}>Bezár</Button>
                </div>
            </Box>
        </Modal>
    );
}