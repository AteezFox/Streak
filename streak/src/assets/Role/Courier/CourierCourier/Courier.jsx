import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Modal, Box, Container, Typography } from '@mui/material';
import styles from "./courier.module.css";
import { useNavigate } from 'react-router-dom';
import CreateCourier from '../CreateCourier/CreateCourier.jsx';

export default function getCourier() {
  const [filterUsers, setFilterUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const edit = useNavigate();

  useEffect(() => {
    getCourierData();
  }, []);

  const getCourierData = () => {
    axios
      .get('http://localhost:8080/streak/api/users/get/couriers')
      .then((response) => {
        setFilterUsers(response.data);
        setOpen(false);
        console.log("Sikeres lekérés");
      })
      .catch((error) => {
        console.log('Valami gikszer', error);
      });
  };

  const handleOpen = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };
  
  const handleClose = () => setOpen(false);

  return (
    <>
      <CreateCourier refreshCourierList={getCourierData} />
      {filterUsers.map(user => (
        <div className={styles.userRow} key={user.id}>
          <div className={styles.userInfo}>
            <h2 className={styles.userText}>ID: #{user.id}</h2>
            <h2 className={styles.userText}>Név: {user.firstName}, {user.lastName}</h2>
          </div>
          <button className={styles.moreInfoButton} onClick={() => handleOpen(user)}>
            További információk
          </button>
        </div>
      ))}
      
      <Modal open={open} onClose={handleClose}>
        <Container className={styles.modalContainer}>
          <Box className={styles.modalContent}>
            {selectedUser && (
              <>
                <Typography variant="h5" className={styles.modalTitle}>
                  Futár részletei
                </Typography>
                <div>
                  <p><strong>Név:</strong> {selectedUser.firstName} {selectedUser.lastName}</p>
                  <p><strong>Azonosító:</strong> #{selectedUser.id}</p>
                  <p><strong>Email:</strong> {selectedUser.email || 'Nincs megadva'}</p>
                  <p><strong>Telefonszám:</strong> {selectedUser.phone || 'Nincs megadva'}</p>
                </div>
                <div className={styles.modalButtons}>
                  <Button 
                    variant="contained" 
                    className={styles.editButton}
                    onClick={() => edit(`/courier/edit/${selectedUser.id}`)}
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
              </>
            )}
          </Box>
        </Container>
      </Modal>
    </>
  );
}