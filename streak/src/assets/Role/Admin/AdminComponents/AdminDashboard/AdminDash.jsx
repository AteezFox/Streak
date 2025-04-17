import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Button } from '@mui/material';
import AdminNav from '../AdminNavbar/AdminNav.jsx';
import styles from './admindash.module.css';
import Ceo from "../../../Ceo/CeoCeo/Ceo.jsx";
import User from "../../../User/UserUser/User.jsx";
import Courier from "../../../Courier/CourierCourier/Courier.jsx";
import CreateCourier from '../../../Courier/CreateCourier/CreateCourier.jsx';
import Product from "../../../Product/Product/Product.jsx";
import Company from "../../../Company/Company/Company.jsx"
import { useState } from 'react';

export default function AdminDash() {
    const [isCourierModal, setIsCourierModal] = useState(false);


    return (
        <>
            <AdminNav />
            <Container className={styles.container}>
                <div className={styles.body}>
                    <h1>Admin Dashboard</h1>
                    <Accordion className={styles.list}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Companies</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                #111 fasz
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className={styles.list}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Couriers</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <CreateCourier />
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