import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';
import AdminNav from '../CeoNavbar/CeoNav.jsx';

export default function CeoDash() {
    return (
        <div>
            <AdminNav />
            <Container>
                <h1>Ceo Dashboard</h1>
                <p>Here will be a series of requests at some point</p>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Companies</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            List of Companies and related actions.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Products</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            List of Products and related actions.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Container>
        </div>
    );
}