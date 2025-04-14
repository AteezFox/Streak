import Drawer from '@mui/material/Drawer'
import { useState } from 'react'
import {Button, Box} from '@mui/material'
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function CompanySide() {
    const [isSideOpen, setIsSideOpen] = useState(false);

    const toggleSide = () => {
        setIsSideOpen(!isSideOpen);
    }

    return (
        <>
            <Button variant="text" color="inherit" onClick={toggleSide}>
                <ViewSidebarIcon />
            </Button>
            <Drawer variant="temporary" anchor="left" open={isSideOpen} onClose={toggleSide}>
                <Container maxWidth="lg">
                  <Box>
                    <Typography variant="h4">Kat</Typography>
                  </Box>
                </Container>
            </Drawer>
        </>
    )
}