import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Button, Modal, Box, TextField, Container } from '@mui/material';
import styles from "./courier.module.css";

export default function getCourier() {
  const [filterUsers, setFilterUsers] = useState([]);

  const [open, setOpen] = useState(false);

  const getCourier = () => {
    axios
      .get('http://localhost:8080/streak/api/users/get')
      .then((response) => {
        const allUsers = response.data
        const couriers = allUsers.filter(user => user.userType === 'COURIER');
        setFilterUsers(couriers);
        setOpen(false); // modal bezárása
      })
      .catch((error) => {
        console.log('Valami gikszer', error);
      });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {filterUsers.map(user => {
          <div className={styles.listing} key={user.id}>
            <h1>#{user.id}</h1>
            <h2>{user.firstname} {user.lastname}</h2>
             <Button onClick={handleOpen}>További Információ</Button>
          </div>
     
      })}
       
      <Modal open={open} onClose={handleClose}>
       
        <Container className={styles.container}>
        <Box className={styles.body}>
            <h1>információk röbiden majd itt jelennek meg</h1>
            <Button>Szerekesztés</Button>
            <Button>Törlés</Button>
        </Box>
        </Container>
      </Modal>
    </>
  );
}
