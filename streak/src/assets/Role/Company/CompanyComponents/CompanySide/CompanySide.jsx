import Drawer from '@mui/material/Drawer'
import { useState } from 'react'
import {Button, Box} from '@mui/material'
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import styles from './companyside.module.css'

export default function CompanySide() {
    const [isSideOpen, setIsSideOpen] = useState(false);

    const toggleSide = () => {
        setIsSideOpen(!isSideOpen);
    }

    return (
        <>
            <Button variant="text" className={styles.floatingButton} onClick={toggleSide}>
                <ViewSidebarIcon />
            </Button>
            <Drawer variant="temporary" anchor="left" open={isSideOpen} onClose={toggleSide}>
                <Container className={styles.container}>
                  <Box className={styles.body}>
                    <Typography variant="h4">Kat</Typography>
                  </Box>
                </Container>
            </Drawer>
        </>
    )
}