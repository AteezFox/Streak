import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal, Box, Container, Typography } from '@mui/material';
import styles from "./companybyceo.module.css";
import { useNavigate } from 'react-router-dom';
import CreateCompany from '../CreateCompany/CreateCompany.jsx';
import { useAppContext } from '../../../Context/AppContext';

export default function CompanyByCeo() {
  const [filterUser, setFilterUser] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const { user } = useAppContext();

  useEffect(() => {
    getCompanyData();
  }, []);

  const getCompanyData = () => {
    if (!user || !user.userId) {
      return;
    }

    axios.get(`http://localhost:8080/streak/api/companies/get/ceo/${user.userId}`)
      .then((response) => {
        setFilterUser(Array.isArray(response.data) ? response.data : [response.data]);
      })
      .catch((error) => {
        console.error("Hiba a cég adatok lekérésekor:", error);
      });
  };

  const handleOpen = (company) => {
    setSelectedCompany(company);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleDelete = (companyId) => {
    if (!companyId) return;

    axios.delete(`http://localhost:8080/streak/api/companies/delete/${companyId}`)
      .then(() => {
        handleClose();
        getCompanyData();
      })
      .catch((error) => {
        console.error("Hiba a cég törlésekor:", error);
      });
  };

  return (
    <>
      <CreateCompany refreshCompanyList={getCompanyData} />
      {filterUser.length === 0 ? (
        <Typography className={styles.noCompany}>
          Nincs még céged. Hozz létre egyet a fenti gombbal.
        </Typography>
      ) : (
        filterUser.map(company => (
          <div className={styles.userRow} key={company.id}>
            <div className={styles.userInfo}>
              <p className={styles.userText}>ID: #{company.id}</p>
              <p className={styles.userText}>Név: {company.name}</p>
            </div>
            <button className={styles.moreInfoButton} onClick={() => handleOpen(company)}>
              További információk
            </button>
          </div>
        ))
      )}

      <Modal open={open} onClose={handleClose}>
        <Container className={styles.modalContainer}>
          <Box className={styles.modalContent}>
            <Typography variant="h5" className={styles.modalTitle}>
              Cég részletei
            </Typography>
            {selectedCompany && (
              <div className={styles.CompanyDetails}>
                <p>ID: #{selectedCompany.id}</p>
                <p>Név: {selectedCompany.name}</p>
                <p>Tulaj: #{selectedCompany.userId} felhasználó</p>
              </div>
            )}
            <div className={styles.modalButtons}>
              <Button
                variant="contained"
                className={styles.editButton}
                onClick={() => {navigate(`/company/edit/${selectedCompany?.id}`)}}
              >
                Szerkesztés
              </Button>
              <Button
                variant="outlined"
                className={styles.deleteButton}
                onClick={() => handleDelete(selectedCompany?.id)}
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