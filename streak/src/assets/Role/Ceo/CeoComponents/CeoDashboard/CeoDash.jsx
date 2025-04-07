import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';
import CeoNav from '../CeoNavbar/CeoNav.jsx';
import styles from './ceodash.module.css';
import Company from '../../../Company/Company/Company.jsx';
import Product from '../../../Product/Product/Product.jsx';

export default function CeoDash() {
    return (
        <div>
            <CeoNav />
            <Container className={styles.container}>
                <div className={styles.body}>
                    <h1>Ceo Dashboard</h1>
                    <p>Here will be a series of requests at some point</p>
                    <Accordion className={styles.list}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Companies</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                    <Company />
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className={styles.list}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Products</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                    <Product />
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </Container>
        </div>
    );
}