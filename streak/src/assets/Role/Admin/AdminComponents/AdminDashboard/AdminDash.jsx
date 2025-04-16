import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';
import AdminNav from '../AdminNavbar/AdminNav.jsx';
import styles from './admindash.module.css';
import Ceo from "../../../Ceo/CeoCeo/Ceo.jsx";
import User from "../../../User/UserUser/User.jsx";
import Courier from "../../../Courier/CourierCourier/Courier.jsx";
import Product from "../../../Product/Product/Product.jsx";
import Company from "../../../Company/Company/Company.jsx"

export default function AdminDash() {
    return (
        <>
            <AdminNav />
            <Container className={styles.container}>
                <div className={styles.body}>
                    <h1>Admin Dashboard</h1>
                    <p>Here will be a series of requests at some point</p>

                    

                    <Accordion className={styles.list}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Companies</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className={styles.list}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Couriers</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <Courier />
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className={styles.list}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Customers</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <User />
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </div>
            </Container>
        </>
    );
}