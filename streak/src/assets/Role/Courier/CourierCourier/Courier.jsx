import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Modal, Box, Container } from '@mui/material';
import styles from "./courier.module.css";
import { useNavigate } from 'react-router-dom';

export default function getCourier() {
  const [filterUsers, setFilterUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const edit = useNavigate();

  useEffect(() => {
    getCourierData();
  }, []);

  const getCourierData = () => {
    axios
      .get('http://localhost:8080/streak/api/users/get/couriers')
      .then((response) => {
        setFilterUsers(response.data);
        setOpen(false); // modal bezárása
        console.log("Sikeres lekérés");
      })
      .catch((error) => {
        console.log('Valami gikszer', error);
      });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {filterUsers.map(user => (
        <div className={styles.listing} key={user.id}>
          <h1>#{user.id}</h1>
          <h2>{user.firstName} {user.lastName}</h2>
          <Button onClick={handleOpen}>További Információ</Button>
        </div>
      ))}
      <Modal open={open} onClose={handleClose}>
        <Container className={styles.container}>
          <Box className={styles.body}>
            <h1>információk röviden majd itt jelennek meg</h1>
            <Button onClick={() => {edit("/edit/id")}}>Szerekesztés</Button>
            <Button>Törlés</Button>
          </Box>
        </Container>
      </Modal>
    </>
  );
}