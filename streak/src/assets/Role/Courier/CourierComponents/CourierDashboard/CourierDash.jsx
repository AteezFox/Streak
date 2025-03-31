import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';
import styles from './courierdash.module.css';
import CourierNav from "../CourierNavbar/CourierNav.jsx";

export default function CourierDash() {
    return (
        <>
            <CourierNav />
            <Container className={styles.container}>
                <div className={styles.body}>
                    <h1>Courier Dashboard</h1>
                    <p>Here will be a series of requests at some point</p>

                    <Accordion className={styles.list}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Acceptable Orders</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Acceptable Orders and related actions.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className={styles.list}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Accepted by you</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Accepted Orders by you and related actions.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className={styles.list}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Timed out orders</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                List of orders which is timed out or accepted by someone else
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </div>
            </Container>
        </>
    );
}