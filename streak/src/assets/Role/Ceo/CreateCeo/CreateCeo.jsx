import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Button, Modal, Box, TextField, Container } from '@mui/material';
import styles from "./createceo.module.css";

export default function CreateCeo() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const [open, setOpen] = useState(false);

  const createCeo = () => {
    axios
      .post('http://localhost:8080/streak/api/users/add', {
        firstName,
        lastName,
        email,
        password,
        phone,
        address,
        userType: 'CEO',
      })
      .then((response) => {
        console.log('Sikeres hozzáadás');
        setOpen(false); // modal bezárása
      })
      .catch((error) => {
        console.log('Nem sikerült hozzáadni', error);
      });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Cég vezető felvétele</Button>
      
      <Modal open={open} onClose={handleClose}>
        <Container className={styles.container}>
        <Box className={styles.body}>
          <TextField
            label="Vezetéknév"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Keresztnév"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Jelszó"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Telefon"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            label="Cím"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button variant="contained" onClick={createCeo}>
            Hozzáadás
          </Button>
        </Box>
        </Container>
      </Modal>
    </>
  );
}
