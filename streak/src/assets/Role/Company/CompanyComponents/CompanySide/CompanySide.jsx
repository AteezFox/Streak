import Drawer from '@mui/material/Drawer'
import { useState } from 'react'
import Button from '@mui/material/Button'
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';

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
                <h1>Test</h1>
            </Drawer>
        </>
    )
}