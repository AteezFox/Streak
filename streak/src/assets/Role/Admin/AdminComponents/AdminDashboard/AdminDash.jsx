import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';
import AdminNav from '../AdminNavbar/AdminNav.jsx';

export default function AdminDash() {
    return (
        <div>
            <AdminNav />
            <Container>
                <h1>Admin Dashboard</h1>
                <p>Here will be a series of requests at some point</p>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>CEOs</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            List of CEOs and related actions.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Customers</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            List of Customers and related actions.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Couriers</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            List of Couriers and related actions.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

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