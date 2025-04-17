import React, { useEffect, useState } from 'react';
import { Button, Modal, Box, TextField } from "@mui/material";
import styles from './loginModal.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginModal({ isOpen, onClose }) {
    const [openClass, setOpenClass] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const loggedIn = useNavigate();

    
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setOpenClass(styles['modal-enter']), 10);
        } else {
            setOpenClass('');
        }
    }, [isOpen]);

    useEffect(() => {
        loginUser
    }, []);

    const loginUser = (() => {
        axios.post("http://localhost:8080/streak/api/auth/login", {
            email,
            password
        })
            .then((response) => {
               const userId = response.data.userId
               axios.get(`http://localhost:8080/streak/api/users/get/${userId}`)
                    .then((userResponse) => {
                        const userType = userResponse.data.userType;

                        if(userType === 'ADMIN'){
                            loggedIn("/admin");
                        }else if(userType === 'CEO'){
                            loggedIn("/ceo")
                        }else if(userType === 'COURIER'){
                            loggedIn('/courier')
                        }else if(userType === 'USER'){
                            loggedIn('/yourhome')
                        }
                        console.log("Felhasznló megtalálva")
                    })
                    .catch((error) => {
                        console.log("Nincs felhasználó", error);
                    })
                    console.log("Sikeres bejelentkezés");
            })
            .catch((error) => {
                console.log("Sikertelen bejelentkezés", error)
            })
    })



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
                        value={email}
                        id="outlined-basic"
                        variant={"outlined"}
                        placeholder="Email"
                        className={styles.input}
                        type="email"
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        value={password}
                        id="outlined-basic"
                        variant={"outlined"}
                        placeholder={"Jelszó"}
                        className={styles.input}
                        type="password"
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className={styles.buttons}>
                        <Button className={styles.button} onClick={loginUser} >Bejelentkezés</Button>
                        <Button className={styles.button} onClick={onClose}>Bezár</Button>
                    </div>
                </Box>
        </Modal>
    );
}