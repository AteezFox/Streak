import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';
import CeoNav from '../CeoNavbar/CeoNav.jsx';
import styles from './ceodash.module.css';
import CompanyByCeo from '../../../Company/CompanyByCeo/CompanyByCeo.jsx';

export default function CeoDash() {
    return (
        <div>
            <CeoNav />
            <Container className={styles.container}>
                <div className={styles.body}>
                    <h1>Ceo Dashboard</h1>
                    <Accordion className={styles.list}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Az én cégem</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                    <CompanyByCeo />
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </Container>
        </div>
    );
}