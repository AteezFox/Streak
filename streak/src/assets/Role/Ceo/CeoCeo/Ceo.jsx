import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Modal, Box, Container, Typography } from '@mui/material';
import styles from "./ceo.module.css";
import { useNavigate } from 'react-router-dom';
import CreateCeo from '../CreateCeo/CreateCeo';
import CompanyByCeo from '../../Company/CompanyByCeo/CompanyByCeo';

export default function getCeo() {
  const [filterUsers, setFilterUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const edit = useNavigate();

  const getCeoData = () => {
    axios
      .get('http://localhost:8080/streak/api/users/get/ceos')
      .then((response) => {
        setFilterUsers(response.data);
        console.log("Sikeres lekérés");
      })
      .catch((error) => {
        console.log('Valami gikszer', error);
      });
  };

  useEffect(() => {
    // Initial data fetch
    getCeoData();

    // Set up automatic refresh every 5 seconds
    const interval = setInterval(() => {
      getCeoData();
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleOpen = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };
  
  const handleClose = () => setOpen(false);

  return (
    <>
      <CreateCeo onCeoAdded={getCeoData} />
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
                  CEO részletei
                </Typography>
                <div>
                  <p>Név: {selectedUser.firstName} {selectedUser.lastName}</p>
                  <p>Azonosító: #{selectedUser.id}</p>
                  <p>Email: {selectedUser.email}</p>
                  <p>Telefonszám: {selectedUser.phoneNumber}</p>
                </div>
                <CompanyByCeo></CompanyByCeo>
                <div className={styles.modalButtons}>
                  <Button 
                    variant="contained" 
                    className={styles.editButton}
                    onClick={() => {edit(`/ceo/edit/${selectedUser.id}`)}}
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