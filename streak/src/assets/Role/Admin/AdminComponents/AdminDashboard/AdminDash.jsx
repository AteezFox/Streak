import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Box } from '@mui/material';
import AdminNav from '../AdminNavbar/AdminNav.jsx';
import styles from './admindash.module.css';
import User from "../../../User/UserUser/User.jsx";
import Courier from "../../../Courier/CourierCourier/Courier.jsx";
import CreateCourier from '../../../Courier/CreateCourier/CreateCourier.jsx';
import Company from "../../../Company/Company/Company.jsx"
import CreateCeo from "../../../Ceo/CreateCeo/CreateCeo.jsx"

export default function AdminDash() {


    return (
        <>
            <AdminNav />
            <Container className={styles.container}>
                <Box className={styles.body}>
                    <h1>Admin Dashboard</h1>
                    <Accordion className={styles.list}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>CEOs</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <CreateCeo />
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className={styles.list}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Couriers</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography component={"div"}>
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

                </Box>
            </Container>
        </>
    );
}