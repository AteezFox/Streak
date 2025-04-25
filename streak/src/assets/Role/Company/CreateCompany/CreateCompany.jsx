import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Button, Modal, Box, TextField, Container } from '@mui/material';
import { AppContext } from '../../../Context/AppContext';
import styles from "./createcompany.module.css";

export default function CreateCompany({ refreshCompanyList }) {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [emptyError, setEmptyError] = useState(false);
  const [hasCompany, setHasCompany] = useState(false); // Track if the CEO already has a company

  const [open, setOpen] = useState(false);

  const { user } = useContext(AppContext); // Get the logged-in user from context

  useEffect(() => {
    // Check if the logged-in CEO already has a company
    axios.get(`http://localhost:8080/streak/api/companies/get/ceo/${user.userId}`)
      .then((response) => {
        if (response.data) {
          setHasCompany(true); // CEO already has a company
        }
      })
      .catch((error) => {
        console.error("Hiba a cég ellenőrzésekor:", error);
      });
  }, [user.userId]);

  const createCompany = () => {
    if (hasCompany) {
      setError("Már van egy cég hozzárendelve ehhez a CEO-hoz.");
      return;
    }

    setError(null);
    setEmptyError(false);

    if (!name) {
      setEmptyError(true);
      return;
    }

    axios.post('http://localhost:8080/streak/api/companies/add', {
      name,
      userId: user.userId, // Use the logged-in user's ID
    })
      .then(() => {
        refreshCompanyList();
        handleClose();
        console.log("Cég létrehozva");
      })
      .catch((error) => {
        console.error("Hiba a cég létrehozásakor:", error);
        setError("Hiba a cég létrehozásakor");
      });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Company hozzáadása</Button>
      
      <Modal open={open} onClose={handleClose}>
        <Container className={styles.container}>
        <Box className={styles.body}>
          <TextField
            label="Cég neve"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={emptyError}
            helperText={emptyError ? "Kötelező mező" : ""}
            required
          />
          {error && <p className={styles.error}>{error}</p>}
          <Button variant="contained" onClick={createCompany}>
            Hozzáadás
          </Button>
        </Box>
        </Container>
      </Modal>
    </>
  );
}
