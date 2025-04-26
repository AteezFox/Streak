import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';
import CeoNav from '../CeoNavbar/CeoNav.jsx';
import styles from './ceodash.module.css';
import CompanyByCeo from '../../../Company/CompanyByCeo/CompanyByCeo.jsx';
import CreateCompany from '../../../Company/CreateCompany/CreateCompany.jsx';
import { useAppContext } from '../../../../Context/AppContext.jsx'; // Import the context to get the logged-in user

export default function CeoDash() {
    const { user } = useAppContext(); // Get the logged-in user from context

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
                            <Typography component="div">
                                <CompanyByCeo />
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </Container>
        </div>
    );
}