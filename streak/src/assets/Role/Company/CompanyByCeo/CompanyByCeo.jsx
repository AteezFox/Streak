import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Modal, Box, Container, Typography } from '@mui/material';
import styles from "./companybyceo.module.css";
import { useNavigate } from 'react-router-dom';
import CreateCompany from '../CreateCompany/CreateCompany.jsx';
import { useAppContext } from '../../../Context/AppContext';

export default function CompanyByCeo() {
  const [filterUser, setFilterUser] = useState([]); // Initialize as an array
  const [open, setOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null); // State to store selected Company
  const edit = useNavigate();

  const { user } = useAppContext(); // Get the logged-in user from context

  useEffect(() => {
    getCompanyData();
  }, []);

  const getCompanyData = () => {
    if (!user || !user.userId) {
      console.error('User ID is undefined');
      return;
    }

    axios.get(`http://localhost:8080/streak/api/users/get/${user.userId}`)
      .then((response) => {
        setFilterUser(Array.isArray(response.data) ? response.data : [response.data]); // Ensure it's an array
        console.log("Sikeres lekérés");
      })
      .catch((error) => {
        console.error('Hiba a cégadatok lekérésekor:', error);
      });
  };

  const handleOpen = (company) => {
    setSelectedCompany(company); // Set the selected Company
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <CreateCompany refreshCompanyList={getCompanyData} />
      {filterUser.map(company => (
        <div className={styles.userRow} key={company.id}>
          <div className={styles.userInfo}>
            <p className={styles.userText}>ID: #{company.id}</p>
            <p className={styles.userText}>Név: {company.name}</p>
          </div>
          <button className={styles.moreInfoButton} onClick={() => handleOpen(company)}>
            További információk
          </button>
        </div>
      ))}
      
      <Modal open={open} onClose={handleClose}>
        <Container className={styles.modalContainer}>
          <Box className={styles.modalContent}>
            <Typography variant="h5" className={styles.modalTitle}>
              Company részletei
            </Typography>
            {selectedCompany && (
              <div className={styles.CompanyDetails}>
                <p>ID: #{selectedCompany.id}</p>
                <p>Név: {selectedCompany.name}</p>
                <p>Tulaj: {selectedCompany.userId}</p>
              </div>
            )}
            <div className={styles.modalButtons}>
              <Button 
                variant="contained" 
                className={styles.editButton}
                onClick={() => {edit(`/company/edit/${selectedCompany?.id}`)}}
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