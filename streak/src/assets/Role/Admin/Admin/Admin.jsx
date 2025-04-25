import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Modal, Box, Container, Typography } from '@mui/material';
import styles from "./admin.module.css";
import { useNavigate } from 'react-router-dom';
import CreateAdmin from '../CreateAdmin/CreateAdmin.jsx';

export default function getAdmin() {
  const [filterUsers, setFilterUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const edit = useNavigate();

  useEffect(() => {
    getAdminData();
  }, []);

  const getAdminData = () => {
    axios
      .get('http://localhost:8080/streak/api/users/get/admins')
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
      <CreateAdmin refreshAdminList={getAdminData} />
      {filterUsers.map(user => (
        <div className={styles.userRow} key={user.id}>
          <div className={styles.userInfo}>
            <p className={styles.userText}>ID: #{user.id}</p>
            <p className={styles.userText}>Név: {user.firstName}, {user.lastName}</p>
          </div>
          <button className={styles.moreInfoButton} onClick={handleOpen}>
            További információk
          </button>
        </div>
      ))}
      
      <Modal open={open} onClose={handleClose}>
        <Container className={styles.modalContainer}>
          <Box className={styles.modalContent}>
            <Typography variant="h5" className={styles.modalTitle}>
              Admin részletei
            </Typography>
            <div className={styles.modalButtons}>
              <Button 
                variant="contained" 
                className={styles.editButton}
                onClick={() => {edit("/edit/id")}}
              >
                Szerkesztés
              </Button>
              <Button 
                variant="outlined" 
                className={styles.deleteButton}
              >
                Törlés
              </Button>
            </div>
          </Box>
        </Container>
      </Modal>
    </>
  );
}